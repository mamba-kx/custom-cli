import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import config from "@/config/env";
import "normalize.css";
import "@/style/vant";

Vue.config.productionTip = false;
console.log(`${process.env.VUE_APP_ENV}环境-配置信息`, config);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
