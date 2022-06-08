import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import { getCurrentInstance } from "@vue/composition-api";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/Demo",
    name: "Demo",
    component: () => import("@/views/Demo.vue")
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

export const useRouter = () => {
  const vm = getCurrentInstance();
  return vm?.proxy?.$router;
};

export const useRoute = () => {
  const vm = getCurrentInstance();
  return vm?.proxy?.$route;
};
