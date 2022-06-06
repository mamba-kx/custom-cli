"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rollupPluginCommonjs = _interopRequireDefault(require("rollup-plugin-commonjs"));

var _rollupPluginHashbang = _interopRequireDefault(require("rollup-plugin-hashbang"));

var _pluginTypescript = _interopRequireDefault(require("@rollup/plugin-typescript"));

var _pluginJson = _interopRequireDefault(require("@rollup/plugin-json"));

var _pluginNodeResolve = require("@rollup/plugin-node-resolve");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import nodeResolve from "rollup-plugin-node-resolve";
var _default = {
  input: "src/main.ts",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  plugins: [(0, _rollupPluginCommonjs["default"])(), // nodeResolve({
  //   browser: true,
  //   extensions: [".js", ".ts"],
  //   // modulesOnly: true
  // }),
  (0, _pluginNodeResolve.nodeResolve)(), (0, _rollupPluginHashbang["default"])(), (0, _pluginTypescript["default"])(), (0, _pluginJson["default"])()],
  external: ["ora"]
};
exports["default"] = _default;