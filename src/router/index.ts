import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/dashboard.vue"),
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("../views/statistics.vue"),
  },
  {
    path: "/options",
    name: "Options",
    component: () => import("../views/options.vue"),
  },
  {
    path: "/options/favorites",
    name: "OptionFavorites",
    component: () => import("../views/optionFavorites.vue"),
  },
  {
    path: "/options/:category",
    name: "OptionItems",
    component: () => import("../views/optionItems.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/friday-schedule/"),
  routes,
});

export default router;