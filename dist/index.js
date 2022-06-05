#!/usr/bin/env node
'use strict';

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

const inquirer = require("inquirer");
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
        // downloadFunc(
        //   templates[templateName as keyof typeof templates].downloadUrl,
        //   projectName
        // ).then(() => {
        // 下载模板后输入模板信息
        inputProjectInfo();
        // });
    })
        .catch((err) => {
        console.log("selectFeaturesErr", err);
    });
};
// 选择项目模板
const inquirerFunc = (customProjectName) => {
    inquirer
        .prompt(projectInquirer)
        .then((answer) => {
        console.log("inquirerFuncAnswer", answer);
        selectTemplate(answer.preset);
    })
        .catch((err) => {
        console.log("inquirerFuncErr", err);
    });
};
// 输入项目信息
const inputProjectInfo = () => {
    return inquirer
        .prompt(projectInfo)
        .then((res) => {
        console.log("inputProjectInfoRes", res);
    })
        .catch((err) => {
        console.log("inputProjectInfoErr", err);
    });
};

const commander = require("commander");
const chalk = require("chalk");
const commanderFunc = () => {
    // version
    commander.version("1.0.0");
    // list
    // commander
    //   .command("list")
    //   .description("查看所有可用模板")
    //   .action(() => {
    //     for (let key in templates) {
    //       console.log(`
    //         ${key}   ${templates[key].description}
    //     `);
    //     }
    //   });
    // create
    commander
        .command("create <projectName>")
        .description("create a new project powered by ckxcli")
        .action((projectName) => {
        inquirerFunc();
    });
    // 监听 --help 指令
    commander.on("--help", function () {
        // 前后两个空行调整格式，更舒适
        console.log();
        console.log(`Run ${chalk.cyan("ckxcli <command> --help")} for detailed usage of given command`);
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
