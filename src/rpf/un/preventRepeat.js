export default function preventRepeat(fn) {
  if (typeof fn !== 'function') {
    throw Error('请传入函数!');
  }
  let lock = false;
  return async function (...args) {
    if (lock) return;
    console.time('\x1b[32m 防止异步函数重复调用程序启动 \x1b[0m');
    lock = true;
    const context = this;
    await fn.call(context, ...args);
    console.timeEnd('\x1b[32m 防止异步函数重复调用程序启动 \x1b[0m');
    lock = false;
  };
}
