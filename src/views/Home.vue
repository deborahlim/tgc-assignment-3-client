<template>
  <div class="home">
    <Books></Books>
    <router-link
      class="btn btn-primary"
      active-class="active"
      exact
      :to="{ name: 'Register' }"
      >Create an account</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import Books from "@/components/Books.vue";

export default {
  name: "Home",
  components: {
    Books,
  },
};
</script>
