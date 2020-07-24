import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const Login = () => import("@/views/Login.vue")
const Inventory = () => import("@/views/Inventory.vue")

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/inventory",
    name: "inventory",
    component: Inventory
  }
];

const router = new VueRouter({
  routes
});

export default router;
