const customAxios = require("../../../utils/customAxios");
import VueJwtDecode from 'vue-jwt-decode'
let timer;
const expireBy = 600000;
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
      // set future expiration date to 10min from current time
    const expirationDate = new Date().getTime() + expireBy
    // save access token and refresh token in session storage 
    sessionStorage.setItem("accessToken", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
    sessionStorage.setItem("accessTokenExpiration", expirationDate);
   
    // set timer and get provide the access token to get new access token from after 10 min
    timer = setTimeout(function() {
      const refreshToken = sessionStorage.getItem("refreshToken") ;
      context.dispatch("refresh", {refreshToken: refreshToken});
    }, expireBy)

    context.commit(
      "setCustomer",
      response.data
    );

    // return error;
    // }
  },
  autoLogin(context) {
   // check if session storage contains access token and refresh token 
  const refreshToken = sessionStorage.getItem("refreshToken");
  const accessToken = sessionStorage.getItem("accessToken");
  const accessTokenExpiration = sessionStorage.getItem("accessTokenExpiration");
    // console.log(accessTokenExpiration);
    // set new timer to remaining time left
  const expiresIn = +accessTokenExpiration - new Date().getTime();
  if(expiresIn < 0) {
    return;
  }
  timer = setTimeout(function() {
    context.dispatch("refresh", {refreshToken: refreshToken})}, expiresIn
  )
    if(accessToken && refreshToken) {
      const customerInfo = VueJwtDecode.decode(accessToken)
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
    const expirationDate = new Date().getTime() + expireBy
    sessionStorage.setItem("accessTokenExpiration", expirationDate);
    sessionStorage.setItem("accessToken", response.data.accessToken); 
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
      });``
    return response.data;
  },

  async logOut(context, payload) {
    let error;
    let response = await customAxios.post("api/customers/logout", payload).catch((err) => {
      console.dir(err);
      error = err;
      throw error;
    });
    if (response.data) {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessTokenExpiration");
      clearTimeout(timer);
  
      context.commit("setCustomer",
      null,
      );
    }  
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
