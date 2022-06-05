// 读写文件
var fs = require("fs");
var handlebars = require("handlebars");
// 修改package.json文件
var modifyPackageJson = function (projectName, answers) {
    var packagePath = projectName + "/package.json";
    // 读取文件
    var packageContent = fs.readFileSync(packagePath, "utf8");
    console.log("packageContent", packageContent);
    // 编译文件
    var packageResult = handlebars.compile(packageContent)(answers);
    console.log("packageResult", packageResult);
    // 重新文件
    fs.writeFileSync(packagePath, packageResult);
};
