<template>
  <div>
    <h1>Checkout</h1>
    <div class="cart">
      <Cart></Cart>
    </div>
    <StripeCheckout
      v-if="!!retrieveCheckoutInfo"
      ref="checkoutRef"
      :pk="getPublishableKey"
      :session-id="getSessionId"
    />
    <button v-if="!!retrieveCart" @click="submit">Checkout!</button>
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
      return this.$store.getters.getCart !== [];
    },
  },
  methods: {
    async getCart() {
      await this.$store.dispatch("showCart");
    },
    async getCheckoutInfo() {
      let checkOutInfo = await this.$store.dispatch("checkoutCart");
      console.log(checkOutInfo);
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