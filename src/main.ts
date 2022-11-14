import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia"
import "normalize.css";
import App from "./App.vue";

const store = createPinia()
const app = createApp(App);

// console.log(`${process.env.VUE_APP_ENV}环境-配置信息`);

app.use(router);
app.use(store);
app.mount("#app");
