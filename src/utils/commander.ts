import { templates } from "../config/index";
import { inquirerFunc } from "./inquirer";

const commander = require("commander");
const chalk = require("chalk");

export const commanderFunc = () => {
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
    .action((projectName: string) => {
      inquirerFunc(projectName);
    });

  // 监听 --help 指令
  commander.on("--help", function () {
    // 前后两个空行调整格式，更舒适
    console.log();
    console.log(
      `Run ${chalk.cyan(
        "ckxcli <command> --help"
      )} for detailed usage of given command`
    );
    console.log();
  });

  commander.parse();
};
