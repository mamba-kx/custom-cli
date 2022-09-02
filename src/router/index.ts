import Vue, { getCurrentInstance } from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

// @ts-ignore
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  // @ts-ignore
  return originalPush.call(this, location).catch((err: any) => err);
};

// @ts-ignore
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject);
  }
  // @ts-ignore
  return originalReplace.call(this, location).catch((err: any) => err);
};

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

export const useRouter = () => {
  const vm: any = getCurrentInstance();
  return vm.proxy.$router;
};

export const useRoute = () => {
  const vm = getCurrentInstance();
  if (vm) {
    return vm.proxy.$route;
  }
};
