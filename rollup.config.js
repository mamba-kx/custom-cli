import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import hashbang from "rollup-plugin-hashbang";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default {
  input: "src/main.ts",
  output: {
    name: "index",
    file: "./dist/index.js",
    format: "cjs"
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"],
      modulesOnly: true
    }),
    hashbang(),
    typescript(),
    commonjs(),
    json()
  ]
};
