import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.post("/login", controller.user.register);

  // 配置需要校验的路由
  // router.post("/test", app.middleware.checkToken(), controller.test.index);
};
