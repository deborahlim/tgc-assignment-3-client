const customAxios = require("../../../utils/customAxios");
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
    const expirationDate = new Date().getTime() + expireBy
    sessionStorage.setItem("customerInfo", JSON.stringify(response.data));
    sessionStorage.setItem("accessTokenExpiration", expirationDate);
   
    
    timer = setTimeout(function() {
      const customerInfo = JSON.parse(sessionStorage.getItem("customerInfo")) ;
      context.dispatch("refresh", {refreshToken: customerInfo.refreshToken});
    }, expireBy)

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
    // console.log(accessTokenExpiration);
  const expiresIn = +accessTokenExpiration - new Date().getTime();
  if(expiresIn < 0) {
    return;
  }
  timer = setTimeout(function() {
    context.dispatch("refresh", {refreshToken: customerInfo.refreshToken})}, expiresIn
  )
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
    const expirationDate = new Date().getTime() + expireBy
    sessionStorage.setItem("accessTokenExpiration", expirationDate);
    let customerInfo = JSON.parse(sessionStorage.getItem("customerInfo"));
    customerInfo.accessToken = response.data.accessToken; 
    sessionStorage.setItem("customerInfo", JSON.stringify(customerInfo));
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

  async logOut(context, payload) {
    let error;
    let response = await customAxios.post("api/customers/logout", payload).catch((err) => {
      console.dir(err);
      error = err;
      throw error;
    });
    if (response.data) {
      sessionStorage.removeItem("customerInfo");
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
