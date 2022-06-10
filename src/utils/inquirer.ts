import { downloadFunc } from "./download";
import { projectInfo, projectInquirer } from "../config/index";
import { templates } from "../config/index";
import { modifyPackageJson } from "./fs";
import { spinnerStart, initSuccess } from "./chalk";

const inquirer = require("inquirer");
let projectName: string;
let templateName: string;

// 选择模板
const selectTemplate = (value: string) => {
  spinnerStart();
  downloadFunc(templates[templateName].downloadUrl, projectName).then(() => {
    // 下载模板后输入模板信息
    inputProjectInfo();
  });
};

// 选择功能(后续添加)
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
      downloadFunc(templates[templateName].downloadUrl, projectName).then(
        () => {
          // 下载模板后输入模板信息
          inputProjectInfo();
        }
      );
    })
    .catch((err: any) => {
      console.error("selectFeaturesErr", err);
    });
};

// 选择项目模板
export const inquirerFunc = (customProjectName: string) => {
  inquirer
    .prompt(projectInquirer)
    .then((answer: any) => {
      // 项目名
      projectName = customProjectName;
      // 模板名
      templateName = answer.preset;
      selectTemplate(answer.preset);
    })
    .catch((err: any) => {
      console.error("inquirerFuncErr", err);
    });
};

// 输入项目信息
export const inputProjectInfo = () => {
  return inquirer
    .prompt(projectInfo)
    .then((res: any) => {
      res.name = projectName;
      initSuccess(projectName);
      // 修改package.json文件
      modifyPackageJson(projectName, res);
    })
    .catch((err: any) => {
      console.error("inputProjectInfoErr", err);
    });
};
