<template>
  <div class="p-lg-5 checkout form">
    <h1 class="display-3 mb-5">My Cart</h1>
    <div class="checkout-cart" v-if="retrieveCart">
      <BaseCart></BaseCart>
    <div v-if="!!retrieveCheckoutInfo">
      <StripeCheckout
        ref="checkoutRef"
        :pk="getPublishableKey"
        :session-id="getSessionId"
      />
    </div>
    <b-button
      class="btn btn-info m-3 btn-lg"
      @click="submit"
    >
      Checkout!
    </b-button>
     </div>
    <div v-if="!retrieveCart">
      <h3 class="m-3">Add Items to your Cart!</h3>
      <b-button variant="info" @click="goToHome">Go to Books</b-button>
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import BaseCart from "../components/BaseCart.vue";
export default {
  components: {
    StripeCheckout,
    BaseCart,
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