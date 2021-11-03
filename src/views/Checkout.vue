<template>
  <div>
    <h1>Checkout</h1>
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
export default {
  components: {
    StripeCheckout,
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
