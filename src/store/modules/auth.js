const customAxios = require("../../../utils/customAxios");

const state = {
  customer: null,
  // tokenExpiration: null,
};

const getters = {
  getCustomer(state) {
    return state.customer;
  },
  isLoggedIn(state) {
    return !!state.customer;
    // to change to true boolean
  }
};

const mutations = {
  setCustomer(state, payload) {
    state.customer = payload;
    // state.tokenExpiration = payload.tokenExpiration;
  },
};

const actions = {
  async login(context, payload) {
    let error;
    let response = await customAxios
      .post("api/customers/login", {
        email: payload.email,
        password: payload.password,
        // returnSercureToken: true,
      })
      .catch((err) => {
        console.dir(err);
        error = err;
        throw error;
      });

    context.commit(
      "setCustomer",
      response.data
      // tokenExpiration: response.expiresIn,
    );

    return error;
    // }
  },

  async register(context, payload) {
    let error;
    let response = await customAxios
      .post("api/customers/register", payload)
      .catch((err) => {
        console.dir(err);
        error = err;
        throw error;
      });
    return response.data;
  },

  logOut(context) {
    context.commit("setCustomer",
    null,
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
