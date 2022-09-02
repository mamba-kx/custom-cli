import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import config from "@/config/env";
import { Toast } from "vant";
import "normalize.css";
import { createPinia } from "pinia"

const store = createPinia()
const app = createApp(App);

console.log(`${process.env.VUE_APP_ENV}环境-配置信息`, config);

app.use(router);
app.use(store)
app.use(Toast);

app.mount("#app");
