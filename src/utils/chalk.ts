import ora from "ora";
const chalk = require("chalk");
const spinner = ora(chalk.yellow("初始化项目模板..."));

// loading加载
export const spinnerStart = () => {
  spinner.start();
};

// loading加载成功
export const spinnerSuccess = () => {
  spinner.text = chalk.green("初始化模板成功");
  spinner.succeed();
};

// loading加载失败
export const spinnerErr = (err: any) => {
  spinner.text = chalk.red("下载失败", err);
  spinner.fail();
};
