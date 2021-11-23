<template><div class="">
    <h1>Your checkout session has been cancelled.</h1>
    <router-link
              class="btn btn-info"
              active-class="active"
              exact
              :to="{ name: 'Orders' }"
              >Go to Orders</router-link
            >
            </div>
</template>

<script>

export default {
  name: "CheckoutError",
  created() {
  },
computed: {
}
};
</script>