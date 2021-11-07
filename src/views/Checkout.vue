<template>
  <div>
    <h1>Checkout</h1>
    <div class="cart">
    <Cart></Cart>
    </div>
    <StripeCheckout
     v-if="this.$store.getters.getCheckoutInfo"
      ref="checkoutRef"
      :pk="getPublishableKey"
      :session-id="getSessionId"
    />
    <button @click="submit">Checkout!</button>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import Cart from "../components/Cart.vue"
export default {
  components: {
    StripeCheckout,
    Cart
  },
 created() {
    this.getCheckoutInfo();
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    getPublishableKey() {
      return this.$store.getters.getCheckoutInfo.publishableKey;
    },
    getSessionId() {
      return this.$store.getters.getCheckoutInfo.sessionId; // session id from backend
    },
  },
  methods: {
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
  width:70%;
  margin: 0 auto
}
</style>