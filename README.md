DebuggerObj 简单的实现了一个 H5 的调试功能，核心使用的是腾讯的 Vconsole

## DebuggerObj 主要有两个功能

- 1. 在线上生产环境在 15s 内点击屏幕 7 下开启 Vcosole 调试
- 2. 在非生产环境默认打开 Vcosole 调试

## 使用办法

- 1. 引入 npm i debugger-obj-yc
- 2. import DbuggerObj from 'debugger-obj-yc'
- 3. DebuggerObj.checkDebugger();
- 4. 最后支持 <script src="https://github.com/yangchuntyr/debuggerObj/blob/master/dist/debuggerObj.min.js"></script> 引入
