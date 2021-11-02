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
      headers: {
        authorization: "Bearer " + context.getters.getCustomer.accessToken,
      },
      params: {
        customer_id: context.getters.getCustomer.id,
      },
    });
    context.commit("setCart", response.data);
  },
  async addToCart(context, payload) {
    await customAxios.get("/api/cart/add", {
      headers: {
        authorization: "Bearer " + context.getters.getCustomer.accessToken,
      },
      params: {
        customer_id: context.getters.getCustomer.id,
        book_id: payload.book_id,
      },
    });
  },

  async deleteFromCart(context, payload) {
    let response = await customAxios.get("/api/cart/remove", {
      headers: {
        authorization: "Bearer " + context.getters.getCustomer.accessToken,
      },
      params: {
        customer_id: context.getters.getCustomer.id,
        book_id: payload.book_id,
      },
    });
    console.log("AFTEER REQUEST");
    console.log("RESPONSE", response.data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
