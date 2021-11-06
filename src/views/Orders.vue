<template>
  <div>
    <h1>Orders</h1>
<div class="" v-if="!!getOrders">
    <b-card v-for="order in getOrders" v-bind:key="order.id" :sub-title="'Order Id: ' + order.id" >
      <b-card-text v-for="items in order.orderItems" v-bind:key="items.id" >
        {{items}}
      </b-card-text>
      <a href="#" class="card-link">Invoice</a>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {};
  },
  computed: {
      getOrders() {
          return this.$store.getters.getOrders
      }
  },
  created() {
    this.loadOrders();
  },
  methods: {
    async loadOrders() {
      await this.$store.dispatch("displayOrders");
    },
  },
};
</script>
