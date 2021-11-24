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

@media only screen and (max-width: 600px) {
      #app {
        padding: 10px
      };
     .form {
         width: 100% !important;
     }
 }

 @media only screen and (max-width: 1024px) {
    #app {
        padding: 20px
      };

     .form {
         width: 80% !important;
     }
 }

.formulate-input .formulate-input-element {
  max-width: none !important;
}
</style>
