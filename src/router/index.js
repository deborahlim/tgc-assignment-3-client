import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import About from '../views/About.vue'
// import Contact from '../views/Contact.vue'
// import FAQ from '../views/FAQ.vue'
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/FAQ",
    name: "FAQ",
    // route level code-splitting
    // this generates a separate chunk (FAQ.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FAQ" */ "../views/FAQ.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/books",
    name: "Books",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/Books.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
