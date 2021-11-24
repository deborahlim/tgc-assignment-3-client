<template>
  <div>
    <h1 class="display-5 m-3">Orders</h1>
    <b-tabs>
      <div class="order-card" v-if="!!getOrders">
        <b-tab
          class="mt-5"
          v-for="status in statusesArr"
          :key="status"
          :title="capitalise(status)"
          active
        >
          <b-card
            no-body
            class="mb-5 p-3 card"
            v-for="order in getFilteredOrders(status)"
            v-bind:key="order.id"
          >
            <p class="lead font-weight-bold m-5">Order # {{ order.id }}</p>
            <p class="font-weight-bold">
              Created At: {{ new Date(order.createdAt) }}
            </p>
            <b-row
              v-for="items in order.orderItems"
              v-bind:key="items.id"
              class="d-flex justify-content-center m-sm-2 m-lg-5"
            >
              <b-col md="4">
                <b-img
                  style="height: 300px"
                  thumbnail
                  :src="items.books.imageUrl"
                  alt="Image"
                  class="rounded-0"
                ></b-img>
              </b-col>
              <b-col md="6" class="text-center">
                <div class="pt-4">
                  <a @click="goToBookDetails(items.books.id)" class="book-link"
                    ><p>{{ items.books.title }}</p></a
                  >
                  <p>x{{ items.quantity }}</p>
                </div>
              </b-col>
              <b-col md="2">
                <p class="pt-sm-4">
                  {{ formatCost(items.books.cost * items.quantity) }}
                </p>
              </b-col>
            </b-row>
            <div class="">
              <p class="font-weight-bold lead">Shipping Details</p>
              <p>Address: {{ order.shippingAddress }}</p>
              <p>Cost: {{ formatCost(order.shippingCost) }}</p>
            </div>
            <p class="lead font-weight-bold">Total Amount: S${{ order.amountTotal }}</p>
          </b-card>
        </b-tab>
      </div>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "Orders",
  components: {},
  data() {
    return {
      publishableKey: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY,
      statusesArr: ["cancelled", "paid", "shipped", "completed"],
      checkout: false,
    };
  },
  computed: {
    getOrders() {
      return this.$store.getters.getOrders;
    },
  },
  created() {
    this.loadOrders();
  },
  methods: {
    getFilteredOrders(status) {
      let filtered = [];
      for (let order of this.getOrders) {
        if (order.orderStatuses.name === status) {
          filtered.push(order);
        }
      }
      return filtered;
    },
    capitalise(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    async loadOrders() {
      await this.$store.dispatch("displayOrders");
    },
    formatCost(cost) {
      if (cost) {
        return `S$${Number.parseFloat(cost).toFixed(2)}`;
      }
      return "N/A";
    },
    async goToBookDetails(id) {
      this.$router.push("/book/" + id);
    },
    async submit() {
      // You will be redirected to Stripe's secure checkout page
      this.checkout = true;
    },
  },
};
</script>

<style>
.order-card {
  width: 90%;
  margin: 0 auto;
}

.book-link {
  color: black;
  cursor: pointer;
}
</style>