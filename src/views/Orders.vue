<template>
  <div>
    <h1>Orders</h1>
    <div class="order-card" v-if="!!getOrders">
      <b-card
        no-body
        class="overflow-hidden mb-5 card"
        v-for="order in getOrders"
        v-bind:key="order.id"
      >
        <p class="lead font-weight-bold m-5">Order # {{ order.id }}</p>
        <b-row
          v-for="items in order.orderItems"
          v-bind:key="items.id"
          class="d-flex justify-content-center m-5"
        >
          <b-col md="4">
            <b-img
              thumbnail
              fluid
              :src="items.books.imageUrl"
              alt="Image"
              class="rounded-0"
            ></b-img>
          </b-col>
          <b-col md="6">
            <div class="text-left">
              <a @click="goToBookDetails(items.books.id)" class="book-link" ><p >{{ items.books.title }}</p></a>
              <p>x{{items.quantity}}</p>
            </div>
              
          </b-col>
          <b-col md="2">
        <p>{{items.books.cost * items.quantity  }}</p>
          </b-col>
        </b-row>
         <p class="lead">Order Total: ${{order.amountTotal}}</p>
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
      return this.$store.getters.getOrders;
    },
  },
  created() {
    this.loadOrders();
  },
  methods: {
    async loadOrders() {
      await this.$store.dispatch("displayOrders");
    },
    formatCost(cost) {
      return `S$${Number.parseFloat(cost /100).toFixed(2)}`
    },
        async goToBookDetails(id) {
     this.$router.push("/book/" + id)
    }
  },
};
</script>

<style>
.order-card {
  width: 70%;
  margin: 0 auto
}
 
.book-link {
  color: black;
  cursor: pointer;
}
</style>