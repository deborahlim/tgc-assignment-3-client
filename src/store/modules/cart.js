const customAxios = require("../../../utils/customAxios");

const state = {
  cart: null,
};

const getters = {
  getCart() {
    return state.cart;
  },
};

const mutations = {
  setCart(state, payload) {
    state.cart = payload;
  },
};

const actions = {
  async showCart(context) {
    let response = await customAxios.get("/api/cart", {
        params: {
            customer_id: this.$store.getters.getCustomer.id
        }
    });
    context.commit("setCart", response.data);
  },
  async addToCart(context) {
      console.log(context)
        await customAxios.get("/api/cart/add", {
          params: {
              customer_id: this.$store.getters.getCustomer.id
            
          }
      })
  }

};

export default {
  state,
  getters,
  actions,
  mutations,
};
