import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth"
import books from "./modules/books"
import cart from "./modules/cart"
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    books,
    cart,
    router
  }
})
