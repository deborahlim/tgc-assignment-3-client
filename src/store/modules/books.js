const customAxios = require("../../../utils/customAxios");

const state = {
  books: null,
};

const getters = {
  getBooks() {
    return state.books;
  },
};

const mutations = {
  showBooks(state, payload) {
    state.books = payload;
  },
};

const actions = {
  async displayBooks(context) {
    let response = await customAxios.get("/api/books");
    context.commit("showBooks", response.data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
