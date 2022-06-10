const ora = require("ora");
const chalk = require("chalk");
const spinner = ora(chalk.yellow("init template..."));

// loading加载
export const spinnerStart = () => {
  spinner.start();
};

// loading加载成功
export const spinnerSuccess = () => {
  spinner.text = chalk.green("init template succeed!!!");
  spinner.succeed();
};

// loading加载失败
export const spinnerErr = (err: any) => {
  spinner.text = chalk.red("下载失败", err);
  spinner.fail();
};

// 脚手架帮助提示
export const cliHelp = () => {
  return `Run ${chalk.cyan(
    "ckxcli <command> --help"
  )} for detailed usage of given command`;
};

export const initSuccess = (projectName: string) => {
  console.log();
  console.log("  $  " + chalk.cyan(`cd ${projectName}`));
  console.log("  $  " + chalk.cyan("npm i"));
  console.log("  $  " + chalk.cyan("npm run serve"));
  console.log();
};
