import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue"
// import Cart from '../views/Cart.vue'
// import Contact from '../views/Contact.vue'
// import FAQ from '../views/FAQ.vue'
// import Login from '../views/Login.vue'
// import Register from '../views/Register.vue'
// import Book from "../views/Book.vue";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import( /* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/FAQ",
    name: "FAQ",
    // route level code-splitting
    // this generates a separate chunk (FAQ.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "FAQ" */ "../views/FAQ.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      requiresUnAuth: true
    }
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "register" */ "../views/Register.vue"),
    meta: {
      requiresUnAuth: true
    }
  },
  {
    path: "/orders",
    name: "Orders",
    // route level code-splitting
    // this generates a separate chunk (orders.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "orders" */ "../views/Orders.vue"),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/book/:book_id",
    component: () =>
      import( /* webpackChunkName: "book" */ "../views/Book.vue"),
    name: "Book",
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/checkout",
    component: () =>
      import( /* webpackChunkName: "checkout" */ "../views/Checkout.vue"),
    name: "Checkout",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/checkout/success/",
    component: () =>
      import( /* webpackChunkName: "checkoutSuccess" */ "../views/CheckoutSuccess.vue"),
    name: "CheckoutSuccess",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/checkout/error",
    component: () =>
      import( /* webpackChunkName: "checkoutError" */ "../views/CheckoutError.vue"),
    name: "CheckoutError",
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/:notFound(.*)",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;