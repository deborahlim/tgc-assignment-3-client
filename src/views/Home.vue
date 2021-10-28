<template>
  <div class="home">
    <Books msg="Welcome to Book Shop" />
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
