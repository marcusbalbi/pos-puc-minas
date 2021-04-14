import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Repositories from "@/views/Repositories.vue";
import Stars from "@/views/Stars.vue";

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
  {
    path: "/stars",
    name: "Estrelas",
    component: Stars,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
