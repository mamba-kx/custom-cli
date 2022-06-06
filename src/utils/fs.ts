// 读写文件
const fs = require("fs");
const handlebars = require("handlebars");

// 修改package.json文件
export const modifyPackageJson = (projectName: string, answers: Object) => {
  const packagePath = `${projectName}/package.json`;
  // 读取文件
  const packageContent = fs.readFileSync(packagePath, "utf8");
  console.log("packageContent", packageContent);
  // 编译文件
  const packageResult = handlebars.compile(packageContent)(answers);
  console.log("packageResult", packageResult);
  // 重新文件
  fs.writeFileSync(packagePath, packageResult);
};
