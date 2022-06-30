const $crypto = require("crypto");
const secret = "123456";

const _crypto = (val) => {
  return $crypto.createHmac("sha256", secret).update(val).digest("hex");
};

export { _crypto };
