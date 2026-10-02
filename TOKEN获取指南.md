# token 获取指南(5 种方法)

工具用的 `token` = 胖东来小程序登录后的 **`loginInfo.token`**(JWT,`eyJ` 开头)。
逆向确认它出现在每个接口请求头里(header `token`),所以**抓到任意一个请求就有了**。

> 登录链路:`wx.login()` → code → `POST passport.dmall.com/wechatApplet/loginInSilence` → token。
> 下面方法 3/4 就是围绕"拿 code"或"读缓存"来的。

按推荐度排序:

| # | 方法 | 门槛 | 适用 |
|---|------|------|------|
| 1 | 抓包(Charles/mitmproxy) | 低 | 通用,推荐 |
| 2 | 微信开发者工具 | 需开发者权限 | 有权限时最方便 |
| 3 | 直登助手 + code 钩子 | 中(root) | 想脚本化/自动化 |
| 4 | 读小程序本地缓存 | 高(root/越狱) | 免抓包 |
| 5 | PC 微信小程序抓包 | 低 | 不想在手机上弄证书 |

---

## 方法 1: 抓包(最通用,推荐)

1. 电脑装 Charles / mitmproxy / Fiddler / Proxyman。
2. 手机同 WiFi,代理指向电脑 IP + 端口(如 Charles:8888)。
3. 手机安装并**信任 CA 证书**(设置 → 通用 → 关于本机 → 证书信任设置),
   否则 HTTPS 抓不到。
4. 手机打开 **微信 → 胖东来小程序 → 登录**。
5. 抓包工具筛选域名 `pdlzbyy1.azpdl.net`,点开任意 `POST` 请求。
6. **Request Headers** 里找:
   ```
   token: eyJhbGci...                 ← 就是它
   ```
   或 `Authorization: Bearer eyJhbGci...`(去掉 `Bearer `)。
7. 复制填入「配置」页。

> token 有效期有限,过期报 401 就重抓一次。

---

## 方法 2: 微信开发者工具

1. 打开**微信开发者工具**,打开/导入胖东来小程序(需体验/开发权限)。
2. **Console** 执行:
   ```js
   wx.getStorageSync('loginInfo')   // → { token: "eyJ...", ticketName: "...", ... }
   ```
   或在 **Storage** 面板找 `loginInfo` 键,取 `.token`。
3. 也可看 **Network** 面板任意请求头里的 `token`。

---

## 方法 3: 直登助手 + code 钩子(脚本化)

本项目自带 `pdl_grab.login`,可把 `wx.login` code 直接兑换成 token,不必抓包整段会话:

```bash
python -m pdl_grab.login <wx.login code>
# → 打印 token, 再 export PDL_TOKEN="..."
```

**怎么拿 code?** code 由微信小程序运行时产生,可用任一方式获取:

- **Frida(安卓 root / iOS 越狱)**:hook `wx.login` 回调,拿到 code 后调用上面的脚本换 token。
  ```js
  // frida 脚本片段(示意)
  Java.perform(function(){ /* hook 微信 wx.login,打印 code */ });
  ```
- **小程序自动化框架**:如 `miniprogram-automator` / WeChat DevTools 远程调试,
  在 Node 里调 `miniProgram.evaluate(() => wx.login())` 或直接读 storage。

> 这条路适合要把登录集成进脚本/自动化的场景。

---

## 方法 4: 读小程序本地缓存(root/越狱)

token 落地在微信的本地存储里:

- **安卓(root)**:`/data/data/com.tencent.mm/appbrand/wx*/` 下的 storage 文件,
  用 `grep -r "eyJ" ` 或strings 搜 JWT。
- **iOS(越狱)**:微信沙盒 `Library/.../wx*/` 类似位置。

搜到 `eyJ` 开头的长串即 token。注意可能含多个 JWT,挑与登录最近/带 `ticket` 语义的。

---

## 方法 5: PC 微信小程序抓包

1. 电脑开**微信**,打开胖东来小程序(PC 微信可跑小程序)。
2. mitmproxy 监听本机,系统代理指向它;装好证书。
3. 小程序操作时,按域名 `pdlzbyy1.azpdl.net` 过滤,读请求头 `token`。

> 优点:不用改手机 WiFi 代理、不用装手机证书;部分微信版本 PC 端无证书绑定。
> 若 PC 微信版本不跑该小程序,可换方法 1/3。

---

## 填入工具

**图形界面**:桌面工具 → 「配置」页 → 「用户 token」粘贴 → 「保存配置」。

**环境变量(命令行)**:
```bash
export PDL_TOKEN="eyJhbGci..."
python -m pdl_grab.cli tree     # 能打印区域/品类/门店 = token 有效
```

保存后点「加载场次」。报 `401 / 认证失败` 就是 token 无效或过期,重取一次。

---

## 安全提醒

- token = 账号登录态,**不要外发 / 不要提交到公开仓库**。
- `.gitignore` 已忽略 `config.json`。
- 抓包请只对自己的账号操作,遵守服务条款。
