#!/usr/bin/env node
'use strict';

const url = "https://github.com/mamba-kx/custom-cli.git";
const templates = {
    egg: {
        url,
        downloadUrl: "github:mamba-kx/custom-cli#egg_template",
        description: "egg模板"
    },
    vue2: {
        url,
        downloadUrl: "github:mamba-kx/custom-cli#vue2_options_template",
        description: "vue2通用模板"
    },
    vuec: {
        url,
        downloadUrl: "github:mamba-kx/custom-cli#vue2_composition_template",
        description: "vue2.7 composition"
    },
    vue3: {
        url,
        downloadUrl: "github:mamba-kx/custom-cli#vue3_composition_template",
        description: "vue3 + typescript"
    },
    vvue3: {
        url,
        downloadUrl: "github:mamba-kx/custom-cli#vvue3_composition_template",
        description: "vite + vue3 + typescript"
    },
    react: {
        url,
        downloadUrl: "github:mamba-kx/custom-cli#react_cli_template",
        description: "react_cli模板"
    }
};
// 模板选项
const choices = [
    {
        name: "egg"
    },
    {
        name: "vue2"
    },
    {
        name: "vuec"
    },
    {
        name: "vue3"
    },
    {
        name: "vvue3"
    },
    {
        name: "react"
    }
];
// 项目信息
const projectInfo = [
    {
        name: "desc",
        type: "input",
        message: "description"
    },
    {
        name: "author",
        type: "input",
        message: "author"
    }
];
const projectInquirer = [
    {
        name: "preset",
        type: "list",
        message: "Please pick a preset:",
        choices
    }
];

const ora = require("ora");
const chalk = require("chalk");
const spinner = ora(chalk.yellow("init template..."));
// loading加载
const spinnerStart = () => {
    spinner.start();
};
// loading加载成功
const spinnerSuccess = () => {
    spinner.text = chalk.green("init template succeed!!!");
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
const initSuccess = (projectName) => {
    console.log();
    console.log("  $  " + chalk.cyan(`cd ${projectName}`));
    console.log("  $  " + chalk.cyan("npm i"));
    console.log("  $  " + chalk.cyan("npm run serve"));
    console.log();
};

const download = require("download-git-repo");
// 下载模板
const downloadFunc = (downloadUrl, projectName) => {
    return new Promise((resolve) => {
        download(downloadUrl, projectName, function (err) {
            if (err)
                return spinnerErr(err);
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
    // 编译文件
    const packageResult = handlebars.compile(packageContent)(answers);
    // 重新文件
    fs.writeFileSync(packagePath, packageResult);
};

const inquirer = require("inquirer");
let projectName;
// 选择模板
const selectTemplate = (value) => {
    spinnerStart();
    downloadFunc(templates[value].downloadUrl, projectName).then(() => {
        // 下载模板后输入模板信息
        inputProjectInfo();
    });
};
// 选择项目模板
const inquirerFunc = (customProjectName) => {
    inquirer
        .prompt(projectInquirer)
        .then((answer) => {
        // 项目名
        projectName = customProjectName;
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
        res.name = projectName;
        initSuccess(projectName);
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
        .description("view all available templates")
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
