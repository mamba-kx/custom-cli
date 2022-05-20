import qs from 'qs';
import filterQuery from './filterQuery';
import isPARS from './isPARS';
async function getApgOpenId(apgAppId) {
  return new Promise((resolve, reject) => {
    window.PALifeOpen.getOpenId(
      {
        appId: apgAppId
      },
      function (rsp) {
        if (rsp.ret === '0') {
          resolve(rsp.data.openId);
        } else {
          reject(rsp);
        }
      },
      function (e) {
        reject(e);
      }
    );
  });
}
export default async function getApgShareUrl({
  apgAppId,
  url,
  omitQuery = [],
  mergeQuery = {},
  nextHash
}) {
  console.log(
    '\x1b[32m 内部统一方法：获取apg分享链接,自动携带了斐波和apg的业务参数   \x1b[0m'
  );
  if (!isPARS()) {
    throw Error('当前不是apg环境');
  }
  if (typeof url !== 'string') {
    throw Error('url参数是必须的,且必须是短链');
  }
  if (typeof apgAppId !== 'string') {
    throw Error('apgAppId参数必须是字符串');
  }
  if (!window.PALifeOpen) {
    throw Error('缺少PALifeOpen SDK');
  }
  if (!window.fiboSDK) {
    throw Error('缺少fiboSDK');
  }

  let apgOpenid;
  try {
    apgOpenid = await getApgOpenId(apgAppId);
  } catch (error) {
    throw Error(error.message);
  }
  let link = filterQuery(
    url,
    [],
    {
      ...qs.parse(window.location.search, { ignoreQueryPrefix: true }),
      ...mergeQuery,
      s_oid: apgOpenid
    },
    nextHash
  );
  link = filterQuery(link, omitQuery);
  link = window.fiboSDK.dealUrl(link);

  if (!/^http/.test(link)) {
    throw new Error('link参数不合法：没有协议头:' + link);
  }

  return link;
}
