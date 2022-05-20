export default function throttle(fn, gapTime = 500) {
  if (Object.prototype.toString.call(fn) !== '[object Function]')
    throw Error('请传入函数!');
  let enterTime = 0;
  return function (...args) {
    let context = this;
    let backTime = new Date();
    if (backTime - enterTime > gapTime) {
      console.log('\x1b[32m 内部统一方法：节流程序启动 \x1b[0m');
      fn.call(context, ...args);
      enterTime = backTime;
    }
  };
}
