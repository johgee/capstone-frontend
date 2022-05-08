import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SoundsIndex from "../views/SoundsIndex.vue";
import SoundsShow from "../views/SoundsShow.vue";
import UsersNew from "../views/UsersNew.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { path: "/sounds", name: "sounds-index", component: SoundsIndex },
  { path: "/sounds/:id", name: "sounds-show", component: SoundsShow },
  { path: "/users/:new", name: "users-new", component: UsersNew },
  { path: "/login", name: "login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
