import fixIOSForm from './fixIOSForm';
import { VConsoleNetworkPlugin } from 'vconsole';
import VConsole from 'vconsole';
const LOCALSTORA_GENAME = 'vconsoleFilterNetworkUrls';
const DEFAULT_FILTER_LIST = [
  {
    url: 'http://www.baidu.com',
    disable: false
  },
  {
    url: 'https://sdkapi.fibodata.com/track',
    disable: false
  },
  {
    url: 'https://elis-smp-ubas-new.lifeapp.pingan.com.cn:433/smp-ubas-dmz/mobile/savePerformanceInfoForH5.do',
    disable: false
  },
  {
    url: 'https://test-elis-smp-ubas-new.lifeapp.pingan.com.cn:11143/smp-ubas-dmz/mobile/savePerformanceInfoForH5.do',
    disable: false
  }
];

function vconsoleFilterNetworkPlugin(VConsole, filterList) {
  const inputId = '__vc-filter-url_url';
  const addBtnId = '__vc-filter-url_add_btn';
  const sizeId = '__vc-filter-url_size';
  const reloadId = '__vc-filter-url_reload_btn';
  const restoreId = '__vc-filter-url_restore_btn';

  const reloadPlugin = new VConsole.VConsolePlugin(
    'filterNetworkUrls',
    'FilterNetworkUrls'
  );

  function injectCSS(text = '') {
    var $style = document.createElement('style');
    $style.type = 'text/css';
    $style.textContent = `\n${text.trim()}\n`;
    document.head.appendChild($style);
  }

  injectCSS(`
#__vconsole .vc-tabbar {
  overflow-y: hidden;
}
#__vconsole .vc-filter-url-addr {
  padding: 0.5em;
}
#__vconsole .vc-filter-url-url {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-bottom: 1em;
  font-size: 14px;
}
#__vconsole .vc-filter-url-go-btn {
  box-sizing: border-box;
  display: block;
  width: 50%;
  height: 3em;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #eee;
  margin: auto;
  font-size: 14px;
}
#__vconsole .vc-filter-url-go-btn:active {
  background-color: #ddd;
}
#__vconsole .vc-filter-url-size {
  padding: 0.5em;
  margin-top: 1em;
}
  `);

  reloadPlugin.on('renderTab', callback => {
    const html = `
    <div>
      <textarea rows="6" class="vc-filter-url-url" id="${inputId}"></textarea>
      <button type="button" class="vc-filter-url-go-btn" id="${addBtnId}">添加要过滤的url</button>
      <div class="vc-filter-url-size" id="${sizeId}"></div>
    </div>
    <div style='margin:10px'>
      <form id='filterUrls'>
      ${filterList.reduce((n, r) => {
        return (
          `<input style='display:block' name="Fruit" type='checkbox' ${
            r.disable ? 'checked' : ''
          } value="${r.url}" />${r.url}` + n
        );
      }, '')}
      </form>
     <button type="button" style='margin:50px auto' class="vc-filter-url-take-effect vc-filter-url-go-btn" id="${reloadId}">勾选后点确定生效</button>
     <button type="button" style='margin:50px auto' class="vc-filter-url-restore vc-filter-url-go-btn" id="${restoreId}">还原过滤netWork的数据</button>
    </div>
    `;
    callback(html);
  });

  reloadPlugin.on('ready', () => {
    const $reLoad = document.getElementById(reloadId);
    const $input = document.getElementById(inputId);
    const $addBtn = document.getElementById(addBtnId);
    const $restore = document.getElementById(restoreId);

    $reLoad.addEventListener(
      'click',
      () => {
        const filtersData = JSON.parse(
          window.localStorage.getItem(LOCALSTORA_GENAME)
        );
        const checkboxs = document.getElementById('filterUrls').children;
        const checkedUrls = Array.prototype.filter
          .bind(checkboxs)(item => {
            return item.checked;
          })
          .map(item => {
            return item.value;
          });
        filtersData.forEach(element => {
          element.disable = checkedUrls.includes(element.url);
        });
        window.localStorage.setItem(
          LOCALSTORA_GENAME,
          JSON.stringify(filtersData)
        );
        window.location.reload();
      },
      false
    );
    $addBtn.addEventListener(
      'click',
      () => {
        if (!$input.value) return;
        const filtersData = JSON.parse(
          window.localStorage.getItem(LOCALSTORA_GENAME)
        );
        filtersData.push({
          url: $input.value,
          disable: true
        });
        window.localStorage.setItem(
          LOCALSTORA_GENAME,
          JSON.stringify(filtersData)
        );
        let timer = setTimeout(() => {
          window.location.reload();
          clearTimeout(timer);
        }, 0);
      },
      false
    );
    $input.addEventListener(
      'touchmove',
      e => {
        e.stopPropagation();
      },
      false
    );
    $restore.addEventListener(
      'click',
      () => {
        window.localStorage.removeItem(LOCALSTORA_GENAME);
        let timer = setTimeout(() => {
          window.location.reload();
          clearTimeout(timer);
        }, 0);
      },
      false
    );
  });

  return reloadPlugin;
}

function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
}

function isWindow(value) {
  var toString = Object.prototype.toString.call(value);
  return (
    toString === '[object global]' ||
    toString === '[object Window]' ||
    toString === '[object DOMWindow]'
  );
}

function isPlainObject(obj) {
  let hasOwn = Object.prototype.hasOwnProperty;
  // Must be an Object.
  if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
    return false;
  }
  try {
    if (
      obj.constructor &&
      !hasOwn.call(obj, 'constructor') &&
      !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')
    ) {
      return false;
    }
  } catch (e) {
    return false;
  }
  let key;
  return key === undefined || hasOwn.call(obj, key);
}

/**
 *
 * @param {string[]} filterList 被过滤的url
 * @param {string} url 被检测的url
 * @param {*} domList network选项卡中显示的dom
 * @param {*} id dom对应的id
 * @returns {boolean} 是否被过滤
 */
function isFilter(filterList, url, domList = null, id = null) {
  for (let _url of filterList) {
    // 匹配规则在这里修改
    let reg = new RegExp(
      /^https?/.test(_url)
        ? `${'^' + _url.replace(/\./g, '\\.').replace(/\//g, '\\/')}`
        : `https?:\\/\\/${_url.replace(/\./g, '\\.').replace(/\//g, '\\/')}`
    );
    if (reg.test(url)) {
      if (domList && domList[id]) {
        domList[id].parentNode.removeChild(domList[id]);
        domList[id] = undefined;
      }
      return true;
    }
  }
  return false;
}

class VConsoleNetworkPluginFilter extends VConsoleNetworkPlugin {
  constructor(...args) {
    super(...args);
    this.filterList = args[2];
  }

  mockAjax() {
    let _XMLHttpRequest = window.XMLHttpRequest;
    if (!_XMLHttpRequest) {
      return;
    }

    let that = this;
    let _open = window.XMLHttpRequest.prototype.open,
      _send = window.XMLHttpRequest.prototype.send;
    that._open = _open;
    that._send = _send;

    // mock open()
    window.XMLHttpRequest.prototype.open = function () {
      let XMLReq = this;
      let args = [].slice.call(arguments),
        method = args[0],
        url = args[1],
        id = that.getUniqueID();
      let timer = null;

      // may be used by other functions
      XMLReq._requestID = id;
      XMLReq._method = method;
      XMLReq._url = url;

      if (isFilter(that.filterList, url)) {
        return _open.apply(XMLReq, args);
      }

      // mock onreadystatechange
      let _onreadystatechange = XMLReq.onreadystatechange || function () {};
      let onreadystatechange = function () {
        let item = that.reqList[id] || {};

        // update status
        item.readyState = XMLReq.readyState;
        item.status = 0;
        if (XMLReq.readyState > 1) {
          item.status = XMLReq.status;
        }
        item.responseType = XMLReq.responseType;

        if (XMLReq.readyState === 0) {
          // UNSENT
          if (!item.startTime) {
            item.startTime = +new Date();
          }
        } else if (XMLReq.readyState === 1) {
          // OPENED
          if (!item.startTime) {
            item.startTime = +new Date();
          }
        } else if (XMLReq.readyState === 2) {
          // HEADERS_RECEIVED
          item.header = {};
          let header = XMLReq.getAllResponseHeaders() || '',
            headerArr = header.split('\n');
          // extract plain text to key-value format
          for (let i = 0; i < headerArr.length; i++) {
            let line = headerArr[i];
            if (!line) {
              continue;
            }
            let arr = line.split(': ');
            let key = arr[0],
              value = arr.slice(1).join(': ');
            item.header[key] = value;
          }
        } else if (XMLReq.readyState === 3) {
          // LOADING
        } else if (XMLReq.readyState === 4) {
          // DONE
          clearInterval(timer);
          item.endTime = +new Date();
          item.costTime = item.endTime - (item.startTime || item.endTime);
          item.response = XMLReq.response;
        } else {
          clearInterval(timer);
        }

        if (!XMLReq._noVConsole) {
          that.updateRequest(id, item);
        }
        return _onreadystatechange.apply(XMLReq, arguments);
      };
      XMLReq.onreadystatechange = onreadystatechange;

      // some 3rd libraries will change XHR's default function
      // so we use a timer to avoid lost tracking of readyState
      let preState = -1;
      timer = setInterval(function () {
        if (preState !== XMLReq.readyState) {
          preState = XMLReq.readyState;
          onreadystatechange.call(XMLReq);
        }
      }, 10);

      return _open.apply(XMLReq, args);
    };

    // mock send()
    window.XMLHttpRequest.prototype.send = function () {
      let XMLReq = this;
      let args = [].slice.call(arguments),
        data = args[0];

      let item = that.reqList[XMLReq._requestID] || {};
      item.method = XMLReq._method.toUpperCase();

      let query = XMLReq._url.split('?'); // a.php?b=c&d=?e => ['a.php', 'b=c&d=', '?e']
      item.url = query.shift(); // => ['b=c&d=', '?e']

      if (query.length > 0) {
        item.getData = {};
        query = query.join('?'); // => 'b=c&d=?e'
        query = query.split('&'); // => ['b=c', 'd=?e']
        for (let q of query) {
          q = q.split('=');
          item.getData[q[0]] = decodeURIComponent(q[1]);
        }
      }

      if (item.method === 'POST') {
        // save POST data
        if (isString(data)) {
          let arr = data.split('&');
          item.postData = {};
          for (let q of arr) {
            q = q.split('=');
            item.postData[q[0]] = q[1];
          }
        } else if (isPlainObject(data)) {
          item.postData = data;
        }
      }

      if (
        !XMLReq._noVConsole &&
        !isFilter(that.filterList, item.url, that.domList, XMLReq._requestID)
      ) {
        that.updateRequest(XMLReq._requestID, item);
      }

      return _send.apply(XMLReq, args);
    };
  }
}
/**
 *
 * @param {object} vc - VConsole对象
 */
const vconsoleFilterNetwork = vc => {
  let filterList = JSON.parse(window.localStorage.getItem(LOCALSTORA_GENAME));
  if (!filterList) {
    window.localStorage.setItem(
      LOCALSTORA_GENAME,
      JSON.stringify(DEFAULT_FILTER_LIST)
    );
    filterList = DEFAULT_FILTER_LIST;
  }
  fixIOSForm();
  vc.removePlugin('network');
  vc.addPlugin(
    new VConsoleNetworkPluginFilter(
      'network',
      'Network',
      filterList.filter(item => item.disable).map(item => item.url)
    )
  );
  vc.addPlugin(vconsoleFilterNetworkPlugin(VConsole, filterList));
};

export default vconsoleFilterNetwork;
