import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
 
const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
 
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});
 
export default router;
