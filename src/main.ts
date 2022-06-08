import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import VueCompositionAPI from "@vue/composition-api";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

console.log("当前为 vue2-composition" + process.env.VUE_APP_ENV + " 环境");

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
