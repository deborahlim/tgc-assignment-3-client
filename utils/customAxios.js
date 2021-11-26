const axios = require("axios");

const axiosInstance = axios.create({
  baseURL:
    "https://tgc-dl-the-book-corner.herokuapp.com/",
});

module.exports = axiosInstance;