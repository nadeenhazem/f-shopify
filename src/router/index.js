import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomePage.vue";
import LoginView from "@/views/LoginPage.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";

import SignUp from "@/views/SignUp.vue";
// console.log(loginUser);
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,

    beforeEnter: (to, from, next) => {
      const loginUser = JSON.parse(localStorage.getItem("loggedIn"));

      loginUser === null ? next("/login") : next();
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const loginUser = JSON.parse(localStorage.getItem("loggedIn"));
      loginUser !== null ? next("/") : next();
    },
  },

  {
    path: "/forgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    beforeEnter: (to, from, next) => {
      const loginUser = JSON.parse(localStorage.getItem("loggedIn"));

      loginUser !== null ? next("/") : next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
