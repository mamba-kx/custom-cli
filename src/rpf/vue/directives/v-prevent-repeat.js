export default {
  install(Vue) {
    const aFunMap = new Map();
    const bind = (el, { arg, value, modifiers }, vnode) => {
      let flag = false;
      const [RUNNING_CLASS = '__v_prevent_repeat__disabled'] =
        Object.keys(modifiers);
      let aFun = async ev => {
        if (flag) return;
        console.time('\x1b[32m 防止异步函数重复调用程序启动 \x1b[0m');
        flag = true;
        el.classList.add(RUNNING_CLASS);
        await value.bind(vnode)(ev);
        console.timeEnd('\x1b[32m 防止异步函数重复调用程序启动 \x1b[0m');
        flag = false;
        el.classList.remove(RUNNING_CLASS);
      };
      aFunMap.set(el, aFun);
      el.addEventListener(arg, aFun);
    };
    Vue.directive('prevent-repeat', {
      bind,
      update(el, { arg, value, modifiers }, vnode) {
        el.removeEventListener(arg, aFunMap.get(el));
        bind(el, { arg, value, modifiers }, vnode);
      },
      unbind(el, { arg }) {
        el.removeEventListener(arg, aFunMap.get(el));
        aFunMap.delete(el);
      }
    });
  }
};
