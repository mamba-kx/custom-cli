"use strict";
exports.__esModule = true;
exports.inputProjectInfo = exports.inquirerFunc = void 0;
var download_1 = require("./download");
var index_1 = require("../config/index");
var index_2 = require("../config/index");
var fs_1 = require("./fs");
var inquirer = require("inquirer");
var projectName;
var templateName;
// 选择模板
var selectTemplate = function (value) {
    if (value === "Vue2H5" || value === "Vue3H5") {
        selectFeatures("Vant");
    }
    if (value === "Vue2Web" || value === "Vue3Web") {
        selectFeatures("ElementUI");
    }
};
// 选择功能
var selectFeatures = function (features) {
    return inquirer
        .prompt([
        {
            name: "features",
            type: "checkbox",
            message: "Check the features needed for your project:",
            choices: [
                {
                    name: "Router"
                },
                {
                    name: "Vuex"
                },
                {
                    name: features
                }
            ]
        }
    ])
        .then(function (res) {
        // console.log("templateName", templateName);
        // console.log("projectName", projectName);
        // console.log("templates", templates);
        download_1.downloadFunc(index_2.templates[templateName].downloadUrl, projectName).then(function () {
            // 下载模板后输入模板信息
            exports.inputProjectInfo();
        });
    })["catch"](function (err) {
        console.error("selectFeaturesErr", err);
    });
};
// 选择项目模板
exports.inquirerFunc = function (customProjectName) {
    inquirer
        .prompt(index_1.projectInquirer)
        .then(function (answer) {
        console.log("inquirerFuncAnswer", answer);
        // 项目名
        projectName = customProjectName;
        // 模板名
        templateName = answer.preset;
        selectTemplate(answer.preset);
    })["catch"](function (err) {
        console.error("inquirerFuncErr", err);
    });
};
// 输入项目信息
exports.inputProjectInfo = function () {
    return inquirer
        .prompt(index_1.projectInfo)
        .then(function (res) {
        console.log("inputProjectInfoRes", res);
        // 修改package.json文件
        fs_1.modifyPackageJson(projectName, res);
    })["catch"](function (err) {
        console.error("inputProjectInfoErr", err);
    });
};
