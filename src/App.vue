<template>
  <div id="app">
    <div id="nav">
      <TheNavbar :isLoggedIn=!!this.$store.getters.isLoggedIn :cartItemsCount="retrieveCartItemsCount" ></TheNavbar>
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
  created() {
  },
computed: {
  retrieveCartItemsCount() {
    return this.$store.getters.getCartItemsCount
  }
}
};
</script>


<style>
#app {
  padding: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
