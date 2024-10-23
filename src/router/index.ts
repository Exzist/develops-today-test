import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import countries from "@/router/route-groups/countries";

const routes: Array<RouteRecordRaw> = [countries];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
