import { spinnerErr, spinnerSuccess } from "./chalk";
const download = require("download-git-repo");

// 下载模板
export const downloadFunc = (downloadUrl: string, projectName: string) => {
  return new Promise((resolve) => {
    download(downloadUrl, projectName, function (err: any) {
      if (err) {
        return spinnerErr(err);
      }
      spinnerSuccess();
      resolve(true);
    });
  });
};
