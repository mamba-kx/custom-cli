/* globals PALifeOpenH5 fiboSDK */
import asyncLoadJS from './asyncLoadJS';
import filterQuery from './filterQuery';
import urlInserter from './urlInserter';
import qs from 'qs';

function validateTrack(xhr, cb) {
  if (xhr.status === 200) {
    let data = xhr.requestSendBody;
    data = JSON.parse(data);
    data.data = decodeURIComponent(data.data);
    console.log('\x1b[32m 内部统一方法：apg外部埋点 \x1b[0m', data);
  } else {
    console.error('\x1b[32m 内部统一方法：apg外部埋点上报失败 \x1b[0m');
  }
  if (typeof cb === 'function') cb();
}

async function TZPAExternalSdk({
  aid,
  url,
  selector = '.jump-btn',
  eventId,
  labelId,
  backflowUrl,
  noJumpToApg = false,
  fiboBtnId,
  fiboBtnName,
  planB = {
    eventId: '',
    labelId: '',
    fiboBtnId: '',
    fiboBtnName: ''
  },
  offiAccount = {
    eventId: '',
    labelId: '',
    fiboBtnId: '',
    fiboBtnName: '',
    channelKey: 'channel'
  }
}) {
  console.log(
    '\x1b[32m 内部统一方法：TZPAExternalSdk apg wx落地页统一sdk \x1b[0m'
  );
  if (typeof aid !== 'string') {
    throw Error('aid is required and should be string');
  }
  if (typeof url !== 'string') {
    throw Error('url is required and should be string');
  }
  if (selector && typeof selector !== 'string') {
    throw Error('selector should be string');
  }
  if (eventId && typeof eventId !== 'string') {
    throw Error('eventId should be string');
  }
  if (labelId && typeof labelId !== 'string') {
    throw Error('labelId should be string');
  }
  if (backflowUrl && typeof backflowUrl !== 'string') {
    throw Error('backflowUrl should be string');
  }
  if (fiboBtnId && typeof fiboBtnId !== 'string') {
    throw Error('fiboBtnId should be string');
  }
  if (fiboBtnName && typeof fiboBtnName !== 'string') {
    throw Error('fiboBtnName should be string');
  }
  if ((planB.eventId && !planB.labelId) || (!planB.eventId && planB.labelId)) {
    throw Error('planB.eventId  和 planB.labelId 必须同时存在');
  }
  if (
    (planB.fiboBtnId && !planB.fiboBtnName) ||
    (!planB.fiboBtnId && planB.fiboBtnName)
  ) {
    throw Error('planB.fiboBtnId  和 planB.fiboBtnName 必须同时存在');
  }
  if (
    (offiAccount.eventId && !offiAccount.labelId) ||
    (!offiAccount.eventId && offiAccount.labelId)
  ) {
    throw Error('offiAccount.eventId  和 offiAccount.labelId 必须同时存在');
  }
  if (
    (offiAccount.fiboBtnId && !offiAccount.fiboBtnName) ||
    (!offiAccount.fiboBtnId && offiAccount.fiboBtnName)
  ) {
    throw Error(
      'offiAccount.fiboBtnId  和 offiAccount.fiboBtnName 必须同时存在'
    );
  }

  if (!window.PALifeOpenH5)
    await asyncLoadJS(
      'https://elis-ecocdn.pingan.com.cn/m/cdn/PALifeOpenH5/1.2/PALifeOpenH5.min.js'
    );

  const _addRecord = PALifeOpenH5.addRecord;
  PALifeOpenH5.addRecord = function () {
    return _addRecord(...arguments).then(xhr => {
      validateTrack(xhr);
      return Promise.resolve(xhr);
    });
  };

  PALifeOpenH5.config();
  const { openid, openToken } = PALifeOpenH5.wxAuthInit();
  if (!openid && !openToken) {
    return Promise.reject(new Error('未获取⾦管家微信授权'));
  }

  const channelKey = offiAccount.channelKey || 'channel';

  let ext = {
    act_action: 'read'
  };
  if (planB.eventId && planB.eventId) {
    PALifeOpenH5.addRecord(planB.eventId, planB.labelId, ext);
  }
  if (planB.fiboBtnId && planB.fiboBtnName) {
    try {
      window.fiboSDK.btnClick(planB.fiboBtnId, planB.fiboBtnName);
    } catch (error) {
      //
    }
  }

  const channel = qs.parse(window.location.search, { ignoreQueryPrefix: true })[
    channelKey
  ];
  if (channel) Object.assign(ext, { channel });

  //公众号埋点
  if (channel && offiAccount.eventId && offiAccount.labelId) {
    PALifeOpenH5.addRecord(offiAccount.eventId, offiAccount.labelId, ext);
  }
  if (offiAccount.fiboBtnId && offiAccount.fiboBtnName) {
    try {
      window.fiboSDK.btnClick(offiAccount.fiboBtnId, offiAccount.fiboBtnName);
    } catch (error) {
      //
    }
  }

  PALifeOpenH5.addReadRecord(aid, ext).then(xhr => {
    validateTrack(xhr);
  });

  url = filterQuery(
    url,
    [],
    qs.parse(window.location.search, { ignoreQueryPrefix: true })
  );
  url = filterQuery(url, [channelKey]);

  let query = qs.parse(url.split('?')[1], { ignoreQueryPrefix: true });
  if (!('s_oid' in query)) console.error('当前链接缺少s_oid查询参数');

  if (selector) {
    document.querySelector(selector).addEventListener(
      'click',
      async function () {
        const jumpToPAlife = () => {
          if (noJumpToApg)
            return console.error(
              `apg外部埋点测试埋点模式，不跳转金管家唤起链接;
              aid:${aid};  \n
              eventId:${eventId};labelId:${labelId};
              \n
              跳转url:${url}`
            );
          if (backflowUrl) {
            window.location.replace(
              urlInserter({
                origin: backflowUrl,
                url: url
              })
            );
          } else {
            PALifeOpenH5.openApp(aid, url);
          }
        };
        if (eventId && labelId) await PALifeOpenH5.addRecord(eventId, labelId);

        if (fiboBtnId && fiboBtnName) {
          const wait = (time = 100) => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve();
              }, time);
            });
          };

          try {
            window.fiboSDK.btnClick(fiboBtnId, fiboBtnName);
            await wait();
          } catch (error) {
            //
          }
        }
        jumpToPAlife();
      },
      false
    );
  }

  let wxShareUrl = PALifeOpenH5.createWXShare(
    window.fiboSDK ? fiboSDK.dealUrl(url) : url
  );
  return Promise.resolve(wxShareUrl);
}
export default TZPAExternalSdk;
