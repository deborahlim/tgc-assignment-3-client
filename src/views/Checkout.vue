<template>
  <div>
    <h1>Checkout</h1>
    <div class="cart">
      <Cart></Cart>
    </div>
    <div class="" v-if="!!retrieveCheckoutInfo && retrieveCart">
       <StripeCheckout
      ref="checkoutRef"
      :pk="getPublishableKey"
      :session-id="getSessionId"
    />
    <button @click="submit">
      Checkout!
    </button>
    </div>
    <div class="" v-else>
    <p >Add Items to your Cart!</p>
    <b-button>Go to Books</b-button>
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
    this.getCheckoutInfo();
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
      if (this.$store.getters.getCart.length === 0) {
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
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<style>
.cart {
  width: 70%;
  margin: 0 auto;
}
</style>