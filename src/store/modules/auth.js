const customAxios = require("../../../utils/customAxios");
let timer;
const state = {
  customer: null,
  // tokenExpiration: null,
};

const getters = {
  getCustomer(state) {
    return state.customer;
  },
  getRefreshToken(state) {
    return state.customer.refreshToken
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
  setAccessToken(state, payload) {
    state.customer.accessToken = payload.accessToken;
  }
};

const actions = {
  async login(context, payload) {
    let error;

    let response = await customAxios
      .post("api/customers/login", {
        email: payload.email,
        password: payload.password,
      })
      .catch((err) => {
        console.dir(err);
        error = err;
        throw error;
      });

    // const expirationDate = new Date().getTime() + (12 * 60000)
    const expirationDate = new Date().getTime() + (5000)
    sessionStorage.setItem("customerInfo", JSON.stringify(response.data));
    sessionStorage.setItem("accessTokenExpiration", expirationDate);
   
    
    timer = setTimeout(function() {
      const customerInfo = JSON.parse(sessionStorage.getItem("customerInfo")) ;
      console.log(customerInfo.refreshToken)
      context.dispatch("refresh", {refreshToken: customerInfo.refreshToken});
    }, (15*60000))

    context.commit(
      "setCustomer",
      response.data
    );

    // return error;
    // }
  },
  autoLogin(context) {
  const customerInfo = JSON.parse(sessionStorage.getItem("customerInfo")) ;
  const accessTokenExpiration = sessionStorage.getItem("accessTokenExpiration");

  const expiresIn = +accessTokenExpiration - new Date().getTime();
console.log("AUTO LOGOUT EXPIRES", expiresIn)
  if(expiresIn < 0) {
    return;
  }
  console.log(customerInfo.refreshToken)
  timer = setTimeout(function() {
    context.dispatch("refresh", {refreshToken: customerInfo.refreshToken})}, expiresIn
  )
  // console.log(customerInfo)
    if(customerInfo.accessToken && customerInfo.refreshToken) {
      context.commit("setCustomer", customerInfo)
    }
  },
  async refresh(context, payload) {
    let error;
    let response = await customAxios.post("api/customers/refresh", payload).catch((err) => {
      console.dir(err);
      error = err;
      throw error
    });
    context.commit("setAccessToken", response.data)

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
    sessionStorage.removeItem("customerInfo");
    sessionStorage.removeItem("accessTokenExpiration");
    clearTimeout(timer);
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
