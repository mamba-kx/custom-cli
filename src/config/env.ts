import { IConfig } from "@/interface";
import testConfig from "./test";
import tempConfig from "./temp";
import prodConfig from "./prod";

let config: IConfig = {
  baseURL: ""
};

if (process.env.VUE_APP_ENV === "test") {
  config = testConfig;
}

if (process.env.VUE_APP_ENV === "temp") {
  config = tempConfig;
}

if (process.env.VUE_APP_ENV === "prod") {
  config = prodConfig;
}

window.$CONFIG = config;

export default config;
