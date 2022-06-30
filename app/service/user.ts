import { Service } from "egg";
import { _crypto } from "../extend/utils";
interface IParams {
  name: string;
  phone: string;
}

export default class registerService extends Service {
  public async register(params: IParams): Promise<any> {
    return { params };
    // const { name, phone } = params;
    // // 查询数据库
    // const selectRes = await this.app.mysql.select("user", {
    //   where: { name, phone },
    //   columns: ["name", "phone"] // 要查询的表字段
    // });

    // // 插入数据库
    // if (!selectRes.length) {
    //   try {
    //     // 生成token
    //     const token = await this.app.jwt.sign(name, this.app.config.secret);
    //     const insertRes = await this.app.mysql.insert("user", {
    //       name,
    //       phone: _crypto(phone),
    //       token
    //     });
    //     console.log("insertRes", insertRes);
    //     // @ts-ignore
    //     if (insertRes.affectedRows === 1) {
    //       return await this.ctx.helper.successModule("注册成功");
    //     }
    //     return;
    //   } catch (error) {
    //     console.log("insert error", error);
    //   }
    // }

    // enum USERINFO {
    //   name = "用户名",
    //   phone = "手机号"
    // }

    // // 打印结果：selectRes [ RowDataPacket { name: '1', phone: '18851820252' } ]

    // const selectResObj = selectRes[0];
    // for (const key in selectResObj) {
    //   if (selectResObj[key] === params[key]) {
    //     return {
    //       message: `${USERINFO[key]}已存在`
    //     };
    //   }
    // }
  }
}
