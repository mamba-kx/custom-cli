/**
 * 作用：本地调试时使用金管家sdk接口
 * 代理地址：new2.h5no1.com/apg-local-debug/?url=xxx
 * 使用方法：将本地调试地址作为url参数，打开代理页面。
 * 在调用金管家接口前，等待PALocal的init
 */

const TYPES = {
  CONFIRM: 'PALifeOpenReadyConfirm',
  REQUEST: 'PALifeOpenRequst',
  RESPONSE: 'PALifeOpenResponse',
  READY: 'PALifeOpenReady',
  RIGHT_BTN: 'PALifeOpenRightBtn'
};

// 需要改造的接口信息
const API_INFO = {
  getOpenId: {
    argsLen: 3, // 最大传参数
    hasSuccessOrError: true, // 是否有成功失败回调
    success: 1, // 成功回调的参数下标
    error: 2 // 失败回调的参数下标
  },
  getCV: {
    argsLen: 0
  },
  setTitle: {
    argsLen: 1
  },
  setRightBtn: {
    argsLen: 1
  },
  share: {
    argsLen: 3,
    hasSuccessOrError: true,
    success: 1,
    error: 2
  },
  invoke: {
    argsLen: 6,
    hasSuccessOrError: true,
    success: 3,
    error: 4
  },
  setOnFocus: {
    argsLen: 1
  },
  executeUri: {
    argsLen: 3,
    hasSuccessOrError: true,
    success: 1,
    error: 2
  },
  dismiss: {
    argsLen: 3,
    hasSuccessOrError: true,
    success: 1,
    error: 2
  }
};

// 记录已发出的请求
let _list = [];

// 加入列表
const pushList = info => {
  _list.push(info);
};

// 查找信息并离开列表
const findInfo = requestId => {
  let cache = _list.find(item => item.requestId === requestId);
  _list = _list.filter(item => item.requestId !== requestId);
  return cache;
};

const _dc = obj => {
  if (typeof obj !== 'object') return obj;
  let type = Object.prototype.toString.call(obj);
  let res = null;
  if (type === '[object Object]') {
    res = {};
    Object.getOwnPropertyNames(obj).map(key => {
      res[key] = obj[key];
    });
  } else if (type === '[object Array]') {
    res = [];
    for (let index in obj) {
      res[index] = _dc(obj[index]);
    }
  } else if (type === '[object Date]') {
    res = new Date(obj.getTime());
  }

  return res;
};

// 获取请求标识
const getRequestId = () => Date.now();

// 过滤掉参数中的函数
const filterFns = args => {
  return args.map(item => (typeof item !== 'function' ? item : null));
};

// 缓存右上角分享回调
let _rightBtnFn = null;

// 改造PALifeOpen
const formPALifeOpen = () => {
  let PA = window.PALifeOpen;
  if (!PA) {
    return;
  }
  // 无效化config
  PA.config = () => {};

  Object.keys(API_INFO).map(key => {
    if (!PA[key]) {
      return;
    }
    let apiInfo = API_INFO[key];
    PA[key] = function (...args) {
      // 保留原始参数
      let originArgs = args;
      args = _dc(originArgs);
      args = filterFns(args);
      // 右上角按钮需特殊处理
      if (key === 'setRightBtn') {
        _rightBtnFn = args[0].onCallFunction;
        args[0].onCallFunction = null;
      }
      let requestId = getRequestId();
      let info = {
        api: key,
        args,
        apiInfo,
        requestId
      };
      pushList({ api: info.api, originArgs, requestId });
      sendRequest(info);
    };
  });
};

// 检测是否在iframe中
const isWorking = () => {
  return window.self !== window.top;
};

let _inited = false;
// 初始化
let init = () => {
  if (_inited) {
    return console.warn('PALocal: 重复init');
  }
  if (!isWorking()) {
    console.warn('PALocal: 未生效，不在iframe中');
    return Promise.resolve();
  }
  return new Promise(resolve => {
    formPALifeOpen();
    window.addEventListener('message', e => {
      let data = e.data;
      if (data.type === TYPES.RESPONSE && data.info) {
        let { info } = data;
        onResult(info);
        return;
      } else if (
        data.type === TYPES.RIGHT_BTN &&
        typeof _rightBtnFn === 'function'
      ) {
        _rightBtnFn();
      } else if (data.type === TYPES.READY) {
        resolve();
        return;
      }
    });
    postMessage(
      {
        type: TYPES.CONFIRM
      },
      '*'
    );
  });
};

// 发出请求
const sendRequest = info => {
  postMessage(
    {
      info,
      type: TYPES.REQUEST
    },
    '*'
  );
};

// 处理结果
const onResult = info => {
  let cache = findInfo(info.requestId);
  if (!cache) {
    return;
  }

  // 有成功/失败回调
  if (API_INFO[cache.api].hasSuccessOrError) {
    let apiInfo = API_INFO[cache.api];
    if (info.err) {
      cache.originArgs[apiInfo.error](info.err);
    } else {
      cache.originArgs[apiInfo.success](info.res);
    }
  }
};

const postMessage = (...args) => {
  if (!window.parent) {
    return;
  }
  window.parent.postMessage(...args);
};

export default {
  init
};
