const createFeatures = require("./index.js");

// 添加router
module.exports = function createRouter() {
	const routerTemplate = `
  import Vue from 'vue';
  import VueRouter from 'vue-router';

  Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
  ];
  const router = new VueRouter({
    routes
  });
  export default router;
  `;

	return createFeatures(routerTemplate, "router");
};
