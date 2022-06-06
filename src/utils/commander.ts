import { templates } from "../config/index";
import { inquirerFunc } from "./inquirer";
import { cliHelp } from "./chalk";
const commander = require("commander");

// 模板列表信息
const templateList = () => {
  console.table(templates);
};

export const commanderFunc = () => {
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
    .action((projectName: string) => {
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
