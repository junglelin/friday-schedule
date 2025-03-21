import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Cathy",
    name: "Cathy",
    component: () => import("../views/list.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/list.vue"),
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import("../views/chart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/friday-schedule/"),
  routes,
});

export default router;
