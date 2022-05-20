import 'core-js/features/symbol';
import vconsoleReloadPlugin from '../un/vconsoleReloadPlugin';
import vconsoleFilterNetwork from '../un/vconsoleFilterNetwork';
import vconsoleBackdoor from '../un/vconsoleBackdoor';
import VConsole from 'vconsole';

if (!/localhost/.test(window.location.origin)) {
  if (process.env.VUE_APP_VCONSOLE === 'false') {
    vconsoleBackdoor();
  }

  /* add `html { height: 100% }` if not working */
  localStorage.setItem('vConsole_switch_y', window.innerHeight / 2 + '');

  try {
    const vc = new VConsole();

    vc.addPlugin(vconsoleReloadPlugin(VConsole));
    vconsoleFilterNetwork(vc);

    // 去除network的滚动事件，解决ios发请求后界面滚动到底部
    const scrollToBottom = vc.pluginList.network.scrollToBottom;
    vc.pluginList.network.scrollToBottom = function () {
      const isShow = vc.pluginList.network.isShow;
      if (isShow) scrollToBottom();
    };
  } catch (err) {
    alert('VCONSOLE ERROR:' + err.message);
  }

  window.addEventListener('unhandledrejection', event => {
    console.error('Promise 没有 catch ！！！', event.reason);
  });
}
