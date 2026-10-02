#!/bin/bash
# 胖东来预约抢购 —— 桌面 UI 启动器 (macOS 双击运行)
cd "$(dirname "$0")"
if [ ! -x ".venv/bin/python" ]; then
  echo "首次运行, 正在创建虚拟环境并安装依赖..."
  python3 -m venv .venv || { echo "创建 venv 失败"; read -n1 -s; exit 1; }
  .venv/bin/pip install -q paho-mqtt requests || { echo "安装依赖失败"; read -n1 -s; exit 1; }
fi
.venv/bin/python -m pdl_grab.cli gui
