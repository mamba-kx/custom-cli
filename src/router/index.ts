import { createRouter, createWebHashHistory } from "vue-router";

const HomePage = () => import("@/views/HomePage.vue");
const MoreActivity = () => import("@/views/MoreActivity.vue");
const ConvertCenter = () => import("@/views/ConvertCenter.vue");
const MyGranary = () => import("@/views/MyGranary.vue");
const MyRight = () => import("@/views/MyRight.vue");
const ProductsExchange = () => import("@/views/ProductsExchange.vue");
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/moreActivity",
    name: "moreActivity",
    component: MoreActivity
  },
  {
    path: "/convertCenter",
    name: "convertCenter",
    component: ConvertCenter
  },
  {
    path: "/myGranary",
    name: "myGranary",
    component: MyGranary
  },
  {
    path: "/myRight",
    name: "myRight",
    component: MyRight
  },
  {
    path: "/productsExchange",
    name: "productsExchange",
    component: ProductsExchange
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
