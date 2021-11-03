const customAxios = require("../../../utils/customAxios");

const state = {
  cart: null,
  checkout: null,
};

const getters = {
  getCart() {
    return state.cart;
  },
  getCheckoutInfo() {
    return state.checkout;
  },
};

const mutations = {
  setCart(state, payload) {
    state.cart = payload;
  },
  setCheckout(state, payload) {
    state.checkout = payload;
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
    await customAxios.get("/api/cart/remove", {
      headers: {
        authorization: "Bearer " + context.getters.getCustomer.accessToken,
      },
      params: {
        customer_id: context.getters.getCustomer.id,
        book_id: payload.book_id,
      },
    });
  },
  async updateQty(context, payload) {
    console.log(payload);
    await customAxios.post(
      "/api/cart/quantity/update",
      {
        customer_id: context.getters.getCustomer.id,
        book_id: payload.book_id,
        new_quantity: parseInt(payload.new_quantity),
      },
      {
        headers: {
          authorization: "Bearer " + context.getters.getCustomer.accessToken,
        },
      }
    );
  },
  async checkoutCart(context) {
    console.log("Checkout");
    let result = await customAxios.get("/api/checkout", {
      headers: {
        authorization: "Bearer " + context.getters.getCustomer.accessToken,
      },
      params: {
        customer_id: context.getters.getCustomer.id,
      },
    });
    console.log("Checkout Info result")
    context.commit("setCheckout", result.data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
