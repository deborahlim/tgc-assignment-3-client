<template>
    <div class="p-5 checkout form">
      <h1 class="display-5">My Cart</h1>
      <div class="checkout-cart">
        <Cart></Cart>
      </div>
      <div v-if="!!retrieveCheckoutInfo">
        <StripeCheckout
          ref="checkoutRef"
          :pk="getPublishableKey"
          :session-id="getSessionId"
        />
      </div>
      <b-button v-if="retrieveCart" class="btn btn-info m-3 btn-lg" @click="submit">
        Checkout!
      </b-button>
      <div v-if="!retrieveCart">
        <p>Add Items to your Cart!</p>
        <b-button @click="goToHome">Go to Books</b-button>
      </div>
    </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import Cart from "../components/Cart.vue";
export default {
  components: {
    StripeCheckout,
    Cart,
  },
  created() {
    this.getCart();
    this.retrieveCart;
  },
  computed: {
    getPublishableKey() {
      return this.$store.getters.getCheckoutInfo.publishableKey;
    },
    getSessionId() {
      return this.$store.getters.getCheckoutInfo.sessionId; // session id from backend
    },
    retrieveCheckoutInfo() {
      return this.$store.getters.getCheckoutInfo;
    },
    retrieveCart() {
      if (this.$store.getters.getCartItemsCount === 0) {
        return false;
      }
      return true;
    },
  },
  methods: {
    async getCart() {
      await this.$store.dispatch("showCart");
    },
    async getCheckoutInfo() {
      await this.$store.dispatch("checkoutCart");
    },
    async submit() {
      // You will be redirected to Stripe's secure checkout page
      await this.getCheckoutInfo();
      await this.$refs.checkoutRef.redirectToCheckout();
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
.checkout-cart {
  /* height: 500px !important; */
  margin: 0 auto;
}

.form {
  width: 80%;
  margin: 0 auto;
}
</style>