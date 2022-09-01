import Vue from "vue";
import App from "./App.vue";
import { router } from "@/router/index";
import "@/style/vant";
import config from "@/config/env";

console.log(`${process.env.VUE_APP_ENV}环境-配置信息`, config);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
