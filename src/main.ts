import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import {
  Tab,
  Tabs,
  PullRefresh,
  Divider,
  Overlay,
  Sidebar,
  SidebarItem,
  List,
  Switch,
  Toast
} from "vant";

const app = createApp(App);

app.use(router);
app.mount("#app");
app
  .use(Tab)
  .use(Tabs)
  .use(PullRefresh)
  .use(Divider)
  .use(Overlay)
  .use(Sidebar)
  .use(SidebarItem)
  .use(List)
  .use(Switch)
  .use(Toast);
