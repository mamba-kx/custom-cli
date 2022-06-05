import { downloadFunc } from "./download";
import { choices, projectInfo, projectInquirer } from "../config/index";
import { templates } from "../config/index";
import { modifyPackageJson } from "./fs";
const inquirer = require("inquirer");
let projectName: string;
let templateName: string;

// 选择模板
const selectTemplate = (value: string) => {
  if (value === "Vue2H5" || value === "Vue3H5") {
    selectFeatures("Vant");
  }
  if (value === "Vue2Web" || value === "Vue3Web") {
    selectFeatures("ElementUI");
  }
};

// 选择功能
const selectFeatures = (features: string) => {
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
    .then((res: Object) => {
      // console.log("templateName", templateName);
      // console.log("projectName", projectName);
      // console.log("templates", templates);
      // downloadFunc(
      //   templates[templateName as keyof typeof templates].downloadUrl,
      //   projectName
      // ).then(() => {
      // 下载模板后输入模板信息
      inputProjectInfo();
      // });
    })
    .catch((err: any) => {
      console.log("selectFeaturesErr", err);
    });
};

// 选择项目模板
export const inquirerFunc = (customProjectName: string) => {
  inquirer
    .prompt(projectInquirer)
    .then((answer: any) => {
      console.log("inquirerFuncAnswer", answer);
      // 项目名
      projectName = customProjectName;
      // 模板名
      templateName = answer.preset;
      selectTemplate(answer.preset);
    })
    .catch((err: any) => {
      console.log("inquirerFuncErr", err);
    });
};

// 输入项目信息
export const inputProjectInfo = () => {
  return inquirer
    .prompt(projectInfo)
    .then((res: any) => {
      console.log("inputProjectInfoRes", res);
      // 修改package.json文件
      modifyPackageJson(projectName, res);
    })
    .catch((err: any) => {
      console.log("inputProjectInfoErr", err);
    });
};
