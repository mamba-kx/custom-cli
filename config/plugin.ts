import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  validate: {
    enable: true,
    package: "egg-validate"
  },
  cors: {
    enable: true,
    package: "egg-cors"
  },
  mysql: {
    enable: true,
    package: "egg-mysql"
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  }
};

export default plugin;
