// 使用场景
// 由于vue-router 使用hash模式下，通过push或者replace跳转路由并带查询参数，window.search获取不到hash问号后面的参数，
// 由于vue-router 使用hash模式下，通过push或者replace跳转路由并带查询参数时候，参数会加到/#后面，使用window.location.search或者是rpf的getQUery都获取不到hash问号后面的参数。
// 所以开发这一个插件用于vue-router 通用插件了获取查询query参数，并同时具有多种通用增删改查的方法，可对参数处理。
// 目前插件会暴露三个方法（getUrlQuery, delUrlQuery, changeUrlQuery），分别用于不同情况来处理链接上的参数

/**
 *@des 返回url上指定的参数，如不指定，则返回所有的参数
 *@param { string } name 指定参数名
 *@param { string } url 指定的链接
 *@return { string | { [key: string]: string } }
 */
function getUrlQuery(name, url = window.location.href) {
  const query = {};
  url.replace(/([^?#*=&]+)=([^?#*=&]+)/g, (...arg) => {
    const [, keyName, value] = arg;
    query[keyName] = window.decodeURIComponent(value);
  });
  return name ? query[name] || '' : query;
}

/**
 *@des 删除url上的指定query参数，返回处理后的url
 *@param { string } name 删除的参数名
 *@param { string } url 路径地址
 *@return { string }
 */
function delUrlQuery(name, url = window.location.href) {
  let baseUrl = '';
  let query = '';
  const tempArray = url.split('?');
  if (tempArray.length > 1) {
    baseUrl = `${tempArray.slice(0, tempArray.length - 1).join('?')}?`;
    query = tempArray[tempArray.length - 1];
  } else {
    baseUrl = `${tempArray[0]}?`;
    const [, val] = tempArray;
    query = val;
  }

  if (query.indexOf(name) > -1) {
    const obj = {};
    const arr = query.split('&');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=');
      const [, arrVal] = arr[i];
      obj[arr[i][0]] = arrVal;
    }
    delete obj[name];
    const updateUrl =
      baseUrl +
      JSON.stringify(obj)
        .replace(/["{}]/g, '')
        .replace(/:/g, '=')
        .replace(/,/g, '&');
    return updateUrl;
  }
  return url;
}

/**
 *@des 替换url指定参数，如果指定参数不存在，则新增该参数
 *@param { string } url 指定路径
 *@param { string } param 需要替换的参数key
 *@param { string } paramVal 替换后的新内容
 *@return { string }
 */
function changeUrlQuery(url = window.location.href, param, paramVal) {
  let newAdditionalURL = '';
  let baseURL = '';
  let additionalURL = '';
  let tempArray = url.split('?');
  if (tempArray.length > 1) {
    baseURL = tempArray.slice(0, tempArray.length - 1).join('?');
    additionalURL = tempArray[tempArray.length - 1];
  } else {
    const [_baseURL] = tempArray;
    const [, _additionalURL] = tempArray;
    additionalURL = _additionalURL;
    baseURL = _baseURL;
  }
  let temp = '';
  if (additionalURL) {
    tempArray = additionalURL.split('&');
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split('=')[0] !== param) {
        newAdditionalURL += temp + tempArray[i];
        temp = '&';
      }
    }
  }
  const rowsTxt = `${temp}${param}=${paramVal}`;
  return `${baseURL}?${newAdditionalURL}${rowsTxt}`;
}

export { getUrlQuery, delUrlQuery, changeUrlQuery };

export default {
  getUrlQuery,
  delUrlQuery,
  changeUrlQuery
};
