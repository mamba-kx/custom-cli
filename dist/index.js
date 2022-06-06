#!/usr/bin/env node
'use strict';

const templates = {
    Vue2H5: {
        url: "https://github.com/mamba-kx/custom-cli.git",
        downloadUrl: "http://github.com:mamba-kx/custom-cli#master",
        description: "vue2-h5模板"
    },
    Vue2Web: {
        url: "https://github.com/mamba-kx/vue-cli2.0-h5.git",
        downloadUrl: "http://github.com:mamba-kx/vue-cli2.0-h5#master",
        description: "vue2-web模板"
    },
    Vue3H5: {
        url: "https://github.com/mamba-kx/custom-cli.git",
        downloadUrl: "http://github.com:mamba-kx/custom-cli#master",
        description: "vue3-h5模板"
    },
    Vue3Web: {
        url: "https://github.com/mamba-kx/vue-cli2.0-h5.git",
        downloadUrl: "http://github.com:mamba-kx/vue-cli2.0-h5#master",
        description: "vue3-web模板"
    }
};
// 模板选项
const choices = [
    {
        name: "Vue2H5"
    },
    {
        name: "Vue2Web"
    },
    {
        name: "Vue3H5"
    },
    {
        name: "Vue3Web"
    }
];
// 项目信息
const projectInfo = [
    // {
    //   name: "name",
    //   type: "input",
    //   message: "projectName"
    // },
    {
        name: "desc",
        type: "input",
        message: "projectDesc"
    },
    {
        name: "author",
        type: "input",
        message: "projectAuthor"
    }
];
const projectInquirer = [
    {
        name: "preset",
        type: "list",
        message: "Please pick a preset",
        choices
    }
];

const ora = require("ora");
const chalk = require("chalk");
const spinner = ora(chalk.yellow("初始化项目模板..."));
// loading加载成功
const spinnerSuccess = () => {
    spinner.text = chalk.green("初始化模板成功");
    spinner.succeed();
};
// loading加载失败
const spinnerErr = (err) => {
    spinner.text = chalk.red("下载失败", err);
    spinner.fail();
};
// 脚手架帮助提示
const cliHelp = () => {
    return `Run ${chalk.cyan("ckxcli <command> --help")} for detailed usage of given command`;
};

const download = require("download-git-repo");
// 下载模板
const downloadFunc = (downloadUrl, projectName) => {
    return new Promise((resolve) => {
        download(downloadUrl, projectName, { clone: true }, function (err) {
            if (err) {
                return spinnerErr(err);
            }
            spinnerSuccess();
            resolve(true);
        });
    });
};

// 读写文件
const fs = require("fs");
const handlebars = require("handlebars");
// 修改package.json文件
const modifyPackageJson = (projectName, answers) => {
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

const inquirer = require("inquirer");
let projectName;
let templateName;
// 选择模板
const selectTemplate = (value) => {
    if (value === "Vue2H5" || value === "Vue3H5") {
        selectFeatures("Vant");
    }
    if (value === "Vue2Web" || value === "Vue3Web") {
        selectFeatures("ElementUI");
    }
};
// 选择功能
const selectFeatures = (features) => {
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
        .then((res) => {
        // console.log("templateName", templateName);
        // console.log("projectName", projectName);
        // console.log("templates", templates);
        downloadFunc(
        // templates[templateName as keyof typeof templates].downloadUrl,
        templates[templateName].downloadUrl, projectName).then(() => {
            // 下载模板后输入模板信息
            inputProjectInfo();
        });
    })
        .catch((err) => {
        console.error("selectFeaturesErr", err);
    });
};
// 选择项目模板
const inquirerFunc = (customProjectName) => {
    inquirer
        .prompt(projectInquirer)
        .then((answer) => {
        console.log("inquirerFuncAnswer", answer);
        // 项目名
        projectName = customProjectName;
        // 模板名
        templateName = answer.preset;
        selectTemplate(answer.preset);
    })
        .catch((err) => {
        console.error("inquirerFuncErr", err);
    });
};
// 输入项目信息
const inputProjectInfo = () => {
    return inquirer
        .prompt(projectInfo)
        .then((res) => {
        console.log("inputProjectInfoRes", res);
        // 修改package.json文件
        modifyPackageJson(projectName, res);
    })
        .catch((err) => {
        console.error("inputProjectInfoErr", err);
    });
};

const commander = require("commander");
// 模板列表信息
const templateList = () => {
    console.table(templates);
};
const commanderFunc = () => {
    // version
    commander.version("1.0.0");
    // list
    commander
        .command("list")
        .description("查看所有可用模板")
        .action(() => {
        templateList();
    });
    // create
    commander
        .command("create <projectName>")
        .description("create a new project powered by ckxcli")
        .action((projectName) => {
        inquirerFunc(projectName);
    });
    // 监听 --help 指令
    commander.on("--help", function () {
        // 前后两个空行调整格式，更舒适
        console.log();
        console.log(cliHelp());
        console.log();
    });
    commander.parse();
};

commanderFunc();
// const commander = require("commander");
// const chalk = require("chalk");
// const download = require("download-git-repo");
// const handlebars = require("handlebars");
// const fs = require("fs");
// const inquirer = require("inquirer");
// const spinner = ora(chalk.yellow("初始化项目模板..."));
// const program = new Command();
// program.version("0.1.0");
// console.log("1111", chalk.green("test"));
