<template>
  <div>
    <h1>Your Checkout is successful</h1>
    <router-link
      class="btn btn-info"
      active-class="active"
      exact
      :to="{ name: 'Orders' }"
      >My Orders</router-link
    >
  </div>
</template>