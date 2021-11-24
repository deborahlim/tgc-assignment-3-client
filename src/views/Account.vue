<template>
    <div class="">
        <h1 class="display-3 m-5">My Account</h1>
<div class="card border-info mb-3 form">
  <div class="card-header lead">{{getCustomerInfo.username}}</div>
  <div class="card-body">
    <p class="card-text"><span class="font-weight-bold">Address: </span>{{getCustomerInfo.address}}</p>
    <p class="card-text"><span class="font-weight-bold">Contact Number: </span>{{getCustomerInfo.contact_number}}</p>
    <p class="card-text"><span class="font-weight-bold">Email: </span>{{getCustomerInfo.email}}</p>
    <b-button class="mt-3" variant="info">Update Details</b-button>
  </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {};
  },
  computed: {
    getCustomerInfo() {
      return this.$store.getters.getCustomer;
    },
  },
  methods: {},
};
</script>