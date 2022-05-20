export default function debounce(fn, delay = 500) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw Error('请传入函数!');
  }
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('\x1b[32m 内部统一方法： 防抖程序启动 \x1b[0m');
      fn.call(context, ...args);
    }, delay);
  };
}
