const axios = require("axios");

const axiosInstance = axios.create({
  baseURL:
    "https://3000-violet-mite-o5697y0d.ws-us17.gitpod.io/",
});

module.exports = axiosInstance;