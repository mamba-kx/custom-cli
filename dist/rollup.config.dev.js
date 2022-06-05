"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rollupPluginCommonjs = _interopRequireDefault(require("rollup-plugin-commonjs"));

var _rollupPluginNodeResolve = _interopRequireDefault(require("rollup-plugin-node-resolve"));

var _rollupPluginHashbang = _interopRequireDefault(require("rollup-plugin-hashbang"));

var _pluginTypescript = _interopRequireDefault(require("@rollup/plugin-typescript"));

var _pluginJson = _interopRequireDefault(require("@rollup/plugin-json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  input: "src/main.ts",
  output: {
    name: "index",
    file: "./dist/index.js",
    format: "cjs"
  },
  plugins: [(0, _rollupPluginNodeResolve["default"])({
    extensions: [".js", ".ts"],
    modulesOnly: true
  }), (0, _rollupPluginHashbang["default"])(), (0, _pluginTypescript["default"])(), (0, _rollupPluginCommonjs["default"])(), (0, _pluginJson["default"])()]
};
exports["default"] = _default;