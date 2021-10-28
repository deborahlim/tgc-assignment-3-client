import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./router";
import store from "./store";
import VueFormulate from '@braid/vue-formulate'
import '@braid/vue-formulate/dist/snow.min.css'
Vue.use(VueFormulate)
Vue.use(BootstrapVue)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BootstrapVue,
  render: (h) => h(App),
}).$mount("#app");
