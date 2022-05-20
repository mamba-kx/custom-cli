const _imgs = require.context(`assets/img`, true, /\.(jpg|png|jpeg)$/);

const getImgsByRegexp = (regexpArr = []) => {
  if (!regexpArr || !Array.isArray(regexpArr)) {
    throw new Error(
      'getImgsByRegexp Error: regexpArr is required and should be array'
    );
  }

  return _imgs.keys().reduce(
    (acc, cur) => {
      const truePath = _imgs(cur).default;
      if (/^data:/.test(truePath)) {
        return acc;
      }
      if (regexpArr.some(reg => reg.test?.(cur))) {
        acc.imgs.push(truePath);
      } else {
        acc.otherImgs.push(truePath);
      }
      return acc;
    },
    {
      imgs: [],
      otherImgs: []
    }
  );
};

export default getImgsByRegexp;
