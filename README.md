# 胖东来预约抢购 —— 代码逆向分析与客户端

对解包小程序 **`wxacf764ecf6bcc1f5`(胖东来)** 的预约/抢购链路做了完整逆向,并据此实现了一套可用的抢购客户端。

---

## 一、逆向结论总览

预约抢购由**两套独立系统**构成,互不影响:

| 系统 | 代码位置 | 网关 | 抢购方式 |
|------|----------|------|----------|
| **门店预约(排队叫号)** | `packageExternal/` | `https://pdlzbyy1.azpdl.net/dlapi` | **MQTT** 瞬时下单 |
| **茅台预购抽签** | `packageActive/maotai/` | `https://appapi.dmall.com` | HTTP `execLottery` |

### 门店预约(主抢购链路)——茶叶 / 玉石 / 黄金 / 银饰

**关键发现:所有品类共用一套预约系统,仅靠 `businessCode` 区分。**
App 内 `yylist` 列出品类 `玉石 / 黄金 / 银饰`(当前版本标记"未开放"),`茶叶` 走 `/tealeaves/*`,
超市等走 `/business/*`,但**下单报文、MQTT 流程、状态机完全一致**。玉石/黄金/银饰一旦开放,同一套工具即可抢占。

#### 端点(逆向自 `packageExternal/app-service.js`)

```
# 业务线前缀: 超市/通用 = /business,  茶叶 = /tealeaves
POST {前缀}/homepage/init[v4]          预约首页(区域+品类 -> 门店/业务)   ※下发 emqx 凭证
POST {前缀}/bookingpage/info[v4]        预约页初始化(场次/风控/emqx)
POST {前缀}/bookingpage/home[v2]        预约主页
POST {前缀}/bookingpage/listOfSession[v2] 场次列表(按日期)
POST {前缀}/bookingpage/list[v3]        可约列表
POST {前缀}/bookingpage/ruleinfo        规则说明
POST {前缀}/bookingpage/verifyCaptcha   验证码票据 -> verifyToken
POST {前缀}/bookingpage/subscriptionnotice 订阅入场提醒
POST {前缀}/mybookingpage/page[v2]      我的预约
POST {前缀}/mybookingpage/info[v2]      预约详情
POST {前缀}/mybookingpage/codeinfo      取号
POST /business/modulehomepage/init      模块首页(区域列表)

# 认证/员工侧(逆向自 modelEmployee)
POST /app/v1/miniLogin          登录(小程序 code / 员工账号)
POST /app/v1/checkToken         校验 token
POST /app/v1/refreshToken       刷新 token
POST /app/v1/checkIfEmployee    员工身份校验
POST /app/v1/bookingLottery     按场次取预约人员
POST /app/v1/updateLotteryStatus 更新叫号状态
POST /app/v1/miniAppVerify      扫码核销
```

#### 抢购协议(MQTT)——核心

```
broker   : wxs://pdlreservation3.azpdl.net/mqtt   (WebSocket+TLS, 443)
凭证     : emqx.username / emqx.password   ← bookingpage/infov4 下发
clientId : "wx" + deviceId + timestamp
订阅主题 : booking/result/{sessionCode}{token}
发布主题 : order_topic
```

下单报文(逆向自 `publish()`):
```json
{
  "token": "<loginInfo.token>",
  "storeCode": "...", "businessCode": "...", "structureCode": "...", "shoppeCode": "...",
  "sessionCode": "...", "deviceId": "...", "lat": "...", "lng": "...",
  "verifyToken": "<人机验证令牌, 启用风控时必填>"
}
```

结果 `flag` 语义(逆向自 `message` 回调):

| flag | 含义 | 客户端动作 |
|------|------|-----------|
| `success=true` | 预约成功 | 停止 |
| `2001` | 需人机验证 | 触发验证码, 带 verifyToken 重发 |
| `1011` / `1012` | 场次不可约/未开始 | 停止 |
| `1000` 等 | "预约太火爆" | 继续重试 |

#### 叫号状态机(逆向自 `mapBackendStatusToInternal`)

```
后端 1 -> 0 已预约(排队)
后端 2 -> 1 已叫号
后端 3 -> 2 购物中
后端 4 -> 3 已完成
后端 5 -> 3 已完成
后端 6 -> 2 购物中
```

#### 认证

请求头固定携带 `token`(小程序 `loginInfo.token`)+ `deviceId`;员工侧另带 `Authorization: Bearer <employeeToken>`。
返回 `401` 触发重新登录。

### 茅台预购抽签

```
POST https://appapi.dmall.com/app/lottery/queryUserRemainTimes  剩余抽签次数
POST https://appapi.dmall.com/app/lottery/execLottery           执行抽签(抢购)
```

---

## 预约目标自动发现(不用手填编码)

门店/品类等编码**不需要手填**,UI 的「目标」页提供级联下拉,选定后自动写入配置。

发现链路(前两层实测**无需 token**):

| 层级 | 接口 | 入参 | 返回 |
|---|---|---|---|
| 附近门店 | `POST /business/bookingpage/homev2` | `{token, lat, lng}` | `storelist[].businesslist[]` |
| 业态/分类 | `POST /business/bookingpage/listv3` | `{token, storeCode, businessCode, struCode}` | `strulist[]`, `shoppelist[]` |
| 场次 | `POST /business/bookingpage/infov4` | `{storeCode, shoppeCode, ...}` | `datemap` |

命令等价物:

```bash
python -m pdl_grab.cli stores --city 许昌市   # 列门店+品类(无需 token)
python -m pdl_grab.cli stores --city 郑州市
python -m pdl_grab.cli tree                   # 完整树(业态/分类/场次需 token)
```

### 城市与经纬度

门店列表接口是**按经纬度**返回附近门店的,所以「选城市」等价于「填经纬度」。
内置城市(`pdl_grab/regions.py`):

| 城市 | lat, lng | 说明 |
|---|---|---|
| 许昌市 | 34.035700, 113.883800 | 5 家门店全部位于许昌,**推荐** |
| 郑州市 | 34.746600, 113.625400 | 距门店 65~83km |

> ⚠️ **地理围栏**: 接口会返回每个品类的 `fenceFlag` / `fenceRange`。
> 茶叶限门店 **50km**、医药限 **100km**。在郑州选茶叶会超出围栏,
> 下单会被服务端拒绝。UI 会在选择品类时直接提示围栏半径与门店真实坐标。

实测门店清单(storeCode / businessCode):

| 门店 | storeCode | 可约品类 |
|---|---|---|
| 胖东来天使城 | 1012 | 超市 `04`、茶叶 `03` |
| 胖东来时代广场 | 1007 | 茶叶 `03`、超市 `04` |
| 胖东来大胖店 | 1009 | 茶叶 `03`、医药 `05`、超市 `04` |
| 胖东来二胖店 | 1010 | 医药 `05`、超市 `04` |
| 胖东来三胖店 | 1011 | 茶叶 `03`、医药 `05`、超市 `04` |

## 真实数据接入(哪些不填 token 也能拿到)

逐端点实测(空 token, 2026-09-28):

| 端点 | 结果 | 真实数据 |
|---|---|---|
| `POST /business/modulehomepage/init` | ✅ | 区域 `01 许昌`、品类入口 `02 珠宝` / `03 茶叶` |
| `POST /business/bookingpage/homev2` | ✅ | 5 家门店、距离、品类 `03/04/05`、围栏半径与门店真实坐标 |
| `POST /business/homepage/popup` | ✅ | 弹窗开关(基本为空) |
| `POST /business/bookingpage/listv3` | ❌ | `未找到门店品类信息` — 需 token(业态/分类) |
| `POST /business/bookingpage/infov4` | ❌ | `业态编码为空` — 需 token(场次/验证码) |
| `POST /business/bookingpage/ruleinfo` | ❌ | 返回 `{}` — 需 token |
| `POST /business/support` | ❌ | 401 |

**结论**:不登录也能拿到 **区域 / 品类入口 / 门店 / 距离 / 围栏**。
场次、分类、验证码**必须真实登录 token**,没有本地绕法。

程序启动时会自动拉取这份目录并填好「目标」页下拉框,无需手点;
结果缓存 6 小时在 `~/.pdl_grab/catalog.json`。

```bash
python -m pdl_grab.cli catalog --city 郑州市          # 看真实目录
python -m pdl_grab.cli catalog --city 郑州市 --refresh  # 强制刷新缓存
```

> **玉石当前不可约**:门店级 `businesslist` 只有 `03 茶叶` / `04 超市` / `05 医药`。
> 顶层虽有 `02 珠宝` 入口且标记 `bookable: true`,但**没有任何门店**在售该品类,
> 所以玉石/珠宝预约目前拿不到场次。

## Web UI(推荐)

浏览器打开 `http://127.0.0.1:8765`,单页应用,深浅色跟随系统。

### 启动

```bash
# macOS: 双击「胖东来预约.app」(不显示终端窗口, 自动开浏览器)
# 或命令行:
.venv/bin/python -m pdl_grab.cli web --port 8765
```

默认只监听 `127.0.0.1`; Docker 镜像会使用 `0.0.0.0` 以便通过端口映射访问。局域网访问请打开 `http://设备IP:8765/`，不要把页面嵌入其他端口的网页；如确需跨源访问，可通过 `PDL_ALLOWED_ORIGINS` 配置可信 Origin。服务支持浏览器 `OPTIONS` 预检请求。端口被占用会自动顺延 8765 → 8774。日志在 `~/.pdl_grab/web.log`。

### 界面功能

| 页面 | 作用 |
|---|---|
| 抢购 | 大时钟 + 倒计时(≤60s 变红)、加载场次 / 定时抢购 / 立即抢购 / 停止 |
| 目标 | 城市 → 门店 → 品类 → 业态 → 分类 → **场次** 级联下拉,自动带出全部编码 |
| 场次 | 场次列表,点击即选为目标并对齐开抢时间 |
| 账号 | 多账号增删,各自 token/场次,下单时并发 |
| 日志 | SSE 实时推送,不用轮询 |

**坐标自动化**:选中带围栏的品类后,坐标会自动切到该品类的门店真实坐标
(`fenceRange.center`),并可开启「随机偏移」在围栏内随机几十米 —— 既稳过
距离校验,又不会每次都精确落在围栏正中心。

### 场次自动获取

「目标」页选完**分类**会自动拉该专柜的场次(`listOfSessionv2`),**可约的排最前**,
右侧显示 `可约 N/M`,默认选中第一个可约场次并同步到全局默认场次。

- 不可约的场次带 `✗` 前缀,灰显在后面,避免误选
- 判可约兼容多种服务端字段:`bookable / isBookable / canBook /
  bookableCount / surplusCount` 以及 `status` 文案
- 场次、分类、验证码都必须**真实登录 token**,这是服务端强制的,没有本地绕法

### 微信手机端模拟

请求头按微信内置 WebView 构造(`pdl_grab/wechat.py`):

| 项 | 值 |
|---|---|
| User-Agent | iPhone iOS 17.4 + `MicroMessenger/8.0.49(0x18003128)` |
| Referer | `https://servicewechat.com/app/wxacf764ecf6bcc1f5/page-frame.html` |
| token | `loginInfo.token`,**未登录时回落 deviceId**(照小程序 `getHeaderToken()` 逻辑) |
| deviceId | 32 位 hex,持久化在 `~/.pdl_grab/device.json` |

多账号时 `deviceId = md5("账号名\|token")`,**同账号每次运行稳定**(MQTT
`clientId = wx{deviceId}{ts}` 前缀复用,不会被判成多设备异常),不同账号必然不同。

`Device.system_info()` 提供 `wx.getSystemInfoSync` 的等价物,供需要设备参数的接口使用。

### HTTP 接口

```
GET  /                    单页应用
GET  /api/state           当前状态(配置/门店/场次/日志)
GET  /api/stream          SSE 实时日志
POST /api/catalog         {city, latlng, refresh}  拉门店与品类
POST /api/auto_coord      {store_code, business_code, jitter}  自动合规坐标
POST /api/stru            {store_code, business_code}          业态/分类(需 token)
POST /api/sessionlist     {store_code, business_code, shoppe_code}  场次清单(需 token)
POST /api/sessions        infov4 聚合场次
POST /api/preflight       开抢前预检(编码/token/坐标/场次/时钟/MQTT 连通)
POST /api/grab            {mode: now|schedule, session_code|fire_at}
POST /api/stop            停止
POST /api/accounts        保存账号列表
POST /api/config          保存配置
```

服务只监听 `127.0.0.1`,不对外暴露。日志与配置在 `~/.pdl_grab/`。

### 定时抢购:时序保证与预检

**时序**(实测, `pdl_grab/mqtt_grab.py`)

```
T0-10s   prepare() 建立 MQTT 长连接 + 订阅   ← 只做一次
T0       立刻 publish                        ← 不重连、不再 sleep
T0+      等 booking/result 应答, 失败重试
```

单账号落点偏差实测 **0.1~2.2ms**;3 账号并发组内极差 **<0.15ms**。

| 保障 | 实现 |
|---|---|
| 不重复建连 | `grab(prepared=True)` 跳过 `prepare()` |
| 不多等 warmup | 预热等待只在非定时路径 |
| 高精度等待 | `_sleep()` 末段 50ms 切成 1ms 片, 长等待分 250ms 段(保证停止可响应) |
| 停止可用 | `stop_event` 贯穿预热等待与结果等待; 每次开抢前 `clear()` |
| 未就绪不误发 | `_publish_loop` 检查 `_subscribed`, 未预热直接报错 |
| 发送失败可见 | `publish()` 检查 `rc`, 不假装已发出 |
| 预热失败不参与 | 多账号里失败的号被剔除, 结果中标注原因 |
| 全部失败即中止 | 抛错而不是空等到 T0 |

**预检**(新增):点「预检」或点「定时抢购」时自动跑一遍, 把问题提前暴露:

1. 必填编码完整性(storeCode/businessCode/structureCode/shoppeCode/sessionCode)
2. token、经纬度是否填了
3. 时间窗口够不够预热、开抢时刻是否已过
4. 真实链路:token 有效性 / 场次是否可约 / **MQTT 能否连上并订阅成功**
5. 本机时钟与开抢时刻的偏差(>5s 告警)

预检不通过就**取消定时**,不会让你白等一场。

```bash
POST /api/preflight   {store_code, business_code, structure_code, shoppe_code, session_code, latlng}
```

### 定时抢购流程

1. **填配置**:token、门店/专柜编码(可用 `tree` 命令先发现)。
2. **加载场次**:点「加载场次」拉取该门店可约场次,列表显示每个场次的**预约开始时间**。
3. **选择场次**:双击某场次 -> 自动把场次编码填入,并把**预约开始时间**设为开抢目标,顶部开始倒计时。
   - 也可在「自定义开抢时间」手动填 `HH:MM:SS`。
4. **定时抢购**:点「定时抢购」-> 程序在开抢时刻前 10 秒预热(建 MQTT 长连接+订阅),
   精确定点到开抢瞬间发单,失败自动重试。

顶部红色大字是**距开抢的实时倒计时**;场次的预约开始时间取自接口字段 `bookingStartTime`
(兼容时间戳/字符串两种返回)。

> 注:网络/抢购在后台线程执行,界面不卡顿;抢购期间按钮会禁用,完成后自动恢复。

---

## 二、快速开始

```bash
python3 -m venv .venv && . .venv/bin/activate
pip install paho-mqtt requests

# 1. 生成配置模板
python -m pdl_grab.cli init

# 2. 编辑 config.json, 填入 token / 门店编码 / 场次编码
#    (编码可用 tree 自动发现, 见下)

# 3. 打印 区域→品类→门店→专柜→场次, 定位目标编码
python -m pdl_grab.cli tree

# 4. 门店预约抢购(预热 + MQTT 瞬时下单)
python -m pdl_grab.cli grab

# 5. 茅台抽签
python -m pdl_grab.cli maotai --times 5
```

### 获取 token

`token` 即微信小程序登录后的 `loginInfo.token`。在官方小程序完成登录后,
从微信开发者工具 / 抓包中取得该 token,填入配置。

---

## 三、配置说明(`config.json`)

```json
{
  "channel": "market",
  "user":  { "token": "...", "device_id": "...", "lat": "", "lng": "" },
  "store": {
    "store_code": "...", "business_code": "...",
    "structure_code": "...", "shoppe_code": "...", "name": "门店备注"
  },
  "grab":  {
    "session_code": "...",
    "verify_token": "",
    "warmup_seconds": 5,
    "auto_retry_on_captcha": true,
    "max_publish": 3,
    "result_timeout": 15
  }
}
```

- `channel`:`market`(超市/通用,`/business/*`)或 `tea`(茶叶,`/tealeaves/*`)。
- 品类(茶叶/玉石/黄金/银饰)由 `business_code` 决定,可用 `tree` 命令发现。
- `verify_token`:门店开启人机验证(腾讯防水墙)时必填。在官方小程序完成验证后,
  将 `ticket`/`randstr` 换得的 `verifyToken` 填入。

也可用环境变量覆盖:`PDL_TOKEN` `PDL_STORE_CODE` `PDL_BUSINESS_CODE`
`PDL_STRUCTURE_CODE` `PDL_SHOPPE_CODE` `PDL_SESSION_CODE` `PDL_VERIFY_TOKEN` `PDL_CHANNEL`。

---

## 四、抢购原理与调优

1. **预热(关键)**:`grab()` 会先调 `bookingpage/infov4` 拿到 `emqx` 凭证,
   提前建立 MQTT 长连接并订阅 `booking/result/{sessionCode}{token}`。
   开抢瞬间只做一次 `publish`,把网络握手耗时降到最低。
2. **连续发送**:默认 `max_publish=3` 次、间隔 200ms,提高成功率同时避免触发风控。
3. **人机验证**:收到 `flag=2001` 时,若已配置 `verify_token` 会自动带令牌重试;
   否则提示在官方小程序完成验证。
4. **场次编码**:`sessionCode` 有时效,需在开抢前用 `sessions`/`tree` 重新获取。

### 人机验证(t-captcha)处理

门店预约可能启用了**腾讯防水墙 t-captcha**(appId `195504199`)。逆向流程:

```
检测: bookingpage/infov4 -> captchaInfo { enabled, appId, ticket }
兑换: POST {前缀}/bookingpage/verifyCaptcha
      data: { token, storeCode, shoppeCode, sessionCode, ticket, randstr }
      resp: { code:200, data:{ verified:true, verifyToken } }
下单: MQTT 报文带 verifyToken; 服务端 flag=2001 = "需先完成人机验证"
```

**设计:人工介入(human-in-the-loop)。** 本工具**不做自动打码/不绕过验证码** ——
t-captcha 是专门区分人机的反爬机制。正确用法:

1. 程序检测到该场次需验证(「配置」页或抢购时提示);
2. **你**在官方小程序/浏览器完成一次 t-captcha,拿到 `ticket` + `randstr`;
3. 在「配置」页填入 `ticket`/`randstr`,点 **「兑换并缓存 verifyToken」**;
4. 程序用 `verifyCaptcha` 换成 `verifyToken` 并按场次缓存,之后下单自动带上;
5. 若过期(服务端 `flag=2001`),重复第 2-3 步即可。

> 拿 ticket/randstr 的方式:官方小程序完成验证后抓 `verifyCaptcha` 请求,或用
> 腾讯官方调试页。具体见 `TOKEN获取指南.md` 的验证码一节。

> 超市(通用)与茶叶使用**不同的 MQTT broker**:超市 `pdlzbyy3.azpdl.net`,
> 茶叶 `pdlreservation3.azpdl.net`,工具按 `channel` 自动选择。

### 下单结果 flag 语义(完整, 逆向自 MQTT onMessage)

| flag | 含义 | 工具行为 |
|------|------|----------|
| `success=true` | 预约成功 | 停止 |
| `1001` | 未登录 | **终止**, 提示重新登录 |
| `1002` | 未实名 | **终止**, 提示去实名 |
| `1004/1006/1010/1011/1012` | 场次满/关闭/不可约 | **终止**(本场次无解) |
| `1008` | "排号太火爆"(抢输) | **重试** |
| `2001` | 需人机验证 | 弹人工验证窗 -> 换 token -> 继续 |

> 预约前还会校验账号资格: `bookingpage/infov4` 返回的 `user.status` 必须为 `0000`,
> 否则 `1001`/`1002` 会直接拦截。工具在 `prepare()` 阶段就前置检查并给出明确提示。

### 一次调用拿全(booking_context)

`bookingpage/infov4` 一次返回: `datemap`(各日期场次)、`nowdate`、`emqx`(MQTT 凭证)、
`captchaInfo`、`user`(资格)。工具的 `client.booking_context()` 聚合这些, 抢购预热与
GUI 场次列表共用同一数据源, 少一次请求且状态一致。

### 多账号并发预约

支持家人/多人各自用自有账号预约同一(或不同)场次,到点**并发**下单。

- **配置**:桌面工具「账号」页 → `+ 添加`,每个账号填 `token`(其余字段留空继承公共门店/场次)。
  也可手写 `config.json` 的 `accounts` 列表(见 `config.py:dump_multi_template`)。
- **抢购**:`accounts` 里所有账号会各自建立独立 MQTT 连接(独立 `deviceId`/`clientId`、
  独立订阅主题),在开抢时刻**同时** publish,互不影响;结果按账号分别汇报(成功优先排序)。
- **逐账号覆盖**:某账号可单独指定 `session_code` / `verify_token`,不填则跟顶层公共配置。
- 向后兼容:没有 `accounts` 时,沿用单个 `user.token` 单账号模式。

命令行:
```python
from pdl_grab.config import load_accounts
from pdl_grab.multi import MultiAccountGrabber
MultiAccountGrabber(load_accounts()).run_scheduled(fire_at)   # 并发定时
```

---

## 五、代码结构

```
pdl_grab/
  config.py      配置(文件 + 环境变量), 品类/门店编码
  client.py      HTTP 客户端(网关/鉴权/401/端点封装)
  mqtt_grab.py   门店预约抢购核心(MQTT 下单 + flag 处理)
  maotai.py      茅台抽签
  discover.py    区域→品类→门店→专柜→场次 自动发现
  session.py     场次模型与时间解析(定时对齐)
  captcha.py     t-captcha 人工验证兑换 + verifyToken 缓存
  captcha_popup.py 人工验证码弹窗(本地 H5 桥接)
  multi.py       多账号并发抢购
  gui.py         桌面 UI(Tkinter): 时钟/倒计时/定时抢购
  cli.py         命令行入口(gui 子命令启动桌面端)
```

---

## 六、说明

- 本工具仅供技术研究/自用预约提醒,请遵守目标服务条款,勿用于破坏公平或超出个人需求。
- 令牌/编码属于个人账号信息,请勿外泄。
