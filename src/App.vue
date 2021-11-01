<template>
  <div id="app">
    <div id="nav">
      <TheNavbar :isLoggedIn=!!this.$store.getters.isLoggedIn ></TheNavbar>
    </div>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  components: {
    TheNavbar
  },
  data() {
    return {};
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
