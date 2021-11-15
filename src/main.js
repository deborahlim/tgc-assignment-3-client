import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./router";
import store from "./store";
import VueFormulate from '@braid/vue-formulate'
import '@braid/vue-formulate/dist/snow.min.css'
// import FormErrorHandler from "./../utils/formErrorHandler"
Vue.use(VueFormulate, {
  // errorHandler: FormErrorHandler
})
Vue.use(BootstrapVue)
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    next('/login')
  } else if (to.meta.requiresUnAuth && store.getters.isLoggedIn) {
    next("/home")
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  BootstrapVue,
  render: (h) => h(App),
}).$mount("#app");