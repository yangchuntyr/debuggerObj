/**
 * 检查是否开启调试模式
 */
class DebuggerObj {
  /**
   * second 秒内点击 clickCount次数开启调试模式
   * @param {Number} clickCount 点击次数
   * @param {Number} second 秒数
   */
  constructor(clickCount = 7, second = 15) {
    this.gClickCount = 0;
    /**
     * 已开启调试模式的缓存标志
     */
    this.userVconsoleCacheKey = "userVconsoleCacheKey";
    /**
     * 开启调试模式要点击的最小次数
     */
    this.minClickCount = clickCount;
    /**
     * 秒数限制
     */
    this.secondNum = second;
  }
  clickFUn() {
    if (this.gClickCount === 0) {
      setTimeout(() => {
        this.gClickCount = 0;
      }, this.secondNum * 1000);
    }

    this.gClickCount++;
    if (this.gClickCount > this.minClickCount) {
      this.startDebugger();
      localStorage.setItem(this.userVconsoleCacheKey, "used");
    }
  }

  startDebugger() {
    const VConsole = require("vconsole");
    new VConsole();
    this.listenFun && document.removeEventListener("click", this.listenFun);
  }

  innerCheckDebugger() {
    /**有两种情况打开调试模式
     *
     * 1.是非正式环境都打开调试模式
     * 2.如果是正式环境就多少秒内点击多少下下就开启调试模式
     */
    if (process.env.NODE_ENV != "production") {
      this.startDebugger();
      return;
    }
    if (localStorage.getItem(this.userVconsoleCacheKey)) {
      this.startDebugger();
      return;
    }
    this.listenFun = () => {
      this.clickFUn();
    };
    if (document.addEventListener) {
      document.addEventListener("click", this.listenFun);
    } else {
      document.onclick = this.listenFun;
    }
  }

  static checkDebugger() {
    const temp = new DebuggerObj();
    temp.innerCheckDebugger();
    return temp;
  }
}

export default DebuggerObj;
