import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { Toast } from "vant";

const app = createApp(App);

console.log("当前为 vue3-" + process.env.VUE_APP_ENV + " 环境");

app.use(router);
app.use(Toast);

app.mount("#app");
