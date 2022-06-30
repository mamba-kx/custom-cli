const successModule = (message, data?) => {
  return { code: 200, message, data };
};
const notFoundModule = (data, message) => {
  return { code: 404, data, message };
};
const lackModule = (arg) => {
  return { code: 5001, message: `缺少${arg}参数` };
};
const errorModule = (arg?) => {
  return { code: 5002, message: `请检查${arg}参数格式` };
};

const handleParamsError = (error) => {
  console.log("handleParamsError", error);
  const { code, field } = error.errors[0];
  return new Promise((resolve) => {
    if (code === "missing_field") {
      resolve(lackModule(field));
    }
    resolve(errorModule(field));
  });
};

const handleMysqlError = (error) => {
  console.log("handleMysqlError", error);
};

module.exports = {
  handleParamsError,
  successModule,
  errorModule,
  lackModule,
  notFoundModule,
  handleMysqlError
};
