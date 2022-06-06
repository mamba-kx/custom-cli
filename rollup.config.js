import commonjs from "rollup-plugin-commonjs";
// import nodeResolve from "rollup-plugin-node-resolve";
import hashbang from "rollup-plugin-hashbang";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  plugins: [
    commonjs(),
    // nodeResolve({
    //   browser: true,
    //   extensions: [".js", ".ts"],
    //   // modulesOnly: true
    // }),
    nodeResolve(),
    hashbang(),
    typescript(),
    json()
  ],
  external: ["ora"]
};
