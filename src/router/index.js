import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/Home.vue")
  },
  {
    path: "/Demo",
    name: "Demo",
    component: () => import("@/views/Demo/Demo.vue")
  }
];
export const router = new VueRouter({
  routes,
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
