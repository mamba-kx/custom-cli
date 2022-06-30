import { Context } from "egg";

export const checkToken = () => {
  return async function (ctx: Context, next: () => Promise<any>) {
    try {
      console.log(ctx.request.header);

      // 获取authorization
      const { authorization } = ctx.request.header;

      // 校验authorization
      const res = ctx.app.jwt.verify(
        authorization as string,
        ctx.app.config.secret
      );

      console.log("检验结果", res);

      if (res) {
        await next();
      } else {
        ctx.body = {
          message: "用户校验失败"
        };
      }
    } catch (error) {
      ctx.body = {
        message: "authorization未通过校验"
      };
    }
  };
};
