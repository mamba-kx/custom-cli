import { spinnerErr, spinnerSuccess } from "./chalk";
const download = require("download-git-repo");
// import { download } from "download-git-repo";

export const downloadFunc = (downloadUrl: string, projectName: string) => {
  return new Promise((resolve) => {
    download(downloadUrl, projectName, { clone: true }, function (err: any) {
      if (err) {
        return spinnerErr(err);
      }
      spinnerSuccess();
      resolve(true);
    });
  });
};
