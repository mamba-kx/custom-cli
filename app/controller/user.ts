import { Controller } from "egg";

export default class RegisterController extends Controller {
  public async register() {
    const params = this.ctx.request.body;
    const options = {
      name: { type: "string" },
      phone: "phone"
    };

    if (Object.keys(params).length !== Object.keys(options).length) {
      return (this.ctx.body = this.ctx.helper.errorModule(""));
    }
    try {
      this.ctx.validate(options);
      this.ctx.body = await this.ctx.service.user.register(params);
    } catch (error) {
      this.ctx.body = await this.ctx.helper.handleParamsError(error);
    }
  }
}
