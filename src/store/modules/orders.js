const customAxios = require("../../../utils/customAxios");

const state = {
  orders: null,
};

const getters = {
  getOrders() {
      return state.orders
  }
};

const mutations = {
    setOrders(state, payload) {
        state.orders = payload
    }
  };
  
  const actions = {
    async displayOrders(context) {
        console.log("get orders");
        let response = await customAxios.get("/api/orders", {
            headers: {
                authorization: "Bearer " + sessionStorage.getItem("accessToken"),
              },
            params: {
                customer_id: context.getters.getCustomer.id
            }
        })
        console.log(response.data)
        context.commit("setOrders", response.data)
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  