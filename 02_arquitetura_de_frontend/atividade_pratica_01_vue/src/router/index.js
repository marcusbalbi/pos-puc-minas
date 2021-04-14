import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Repositories from "@/views/Repositories.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repositories",
    name: "Repositories",
    component: Repositories,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
