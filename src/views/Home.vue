<template>
  <div class="home">
     <h1>All Books</h1>
        <b-card-group deck class="m-3">
         
    <BaseBookCard
v-for="book in this.$store.getters.getBooks"
v-bind:key="book.id"
:id="book.id"
:title="book.title"
:photoURL="book.photoURL"
:description="book.description"
:authors=book.authors
    ></BaseBookCard>
    </b-card-group>
      <router-link
      v-if="this.$store.getters.isLoggedIn"
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
import BaseBookCard from "@/components/BaseBookCard.vue";

export default {
  name: "Home",
  components: {
    BaseBookCard,
  },
    async created() {
    await this.$store.dispatch("displayBooks");
  },
};
</script>
