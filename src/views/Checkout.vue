
<template>
  <div v-if="publishableKey!==null">
      <h1>Checkout</h1>
    <stripe-checkout
      ref="checkoutRef"
      :pk="publishableKey"
      :session-id="sessionId"
    />
    <button @click="submit">Checkout!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  created() {
this.getCheckoutInfo();
  },
  data () {
    this.publishableKey = this.$store.getters.getCheckoutInfo.publishableKey;
    return {
      loading: false,
      sessionId: this.$store.getters.getCheckoutInfo.sessionId, // session id from backend
    };
  },
  methods: {
   async getCheckoutInfo() {
    let checkOutInfo = await this.$store.dispatch("checkoutCart")
    console.log(checkOutInfo)
    },
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>