const customAxios = require("../../../utils/customAxios");

const state = {
  user: null,
  // tokenExpiration: null,
};

const getters = {
  getUser(state) {
    return state.user;
  },
  isLoggedIn(state) {
    return !!state.user;
    // to change to true boolean
  }
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
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
      "setUser",
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
    context.commit("setUser",
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
