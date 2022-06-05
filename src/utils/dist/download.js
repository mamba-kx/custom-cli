"use strict";
exports.__esModule = true;
exports.downloadFunc = void 0;
var chalk_1 = require("./chalk");
var download = require("download-git-repo");
// import { download } from "download-git-repo";
exports.downloadFunc = function (downloadUrl, projectName) {
    return new Promise(function (resolve) {
        download(downloadUrl, projectName, { clone: true }, function (err) {
            if (err) {
                return chalk_1.spinnerErr(err);
            }
            chalk_1.spinnerSuccess();
            resolve(true);
        });
    });
};
