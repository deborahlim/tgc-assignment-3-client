<template>
  <div class="home">
  <div class="height-50">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >

      <b-carousel-slide
        :img-src="require('../assets/carousel-1.jpg')"
      >
      <h1>First slide</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
      </b-carousel-slide>

      <b-carousel-slide :img-src="require('../assets/carousel-2.webp')"
>
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <b-carousel-slide :img-src="require('../assets/carousel-3.png')">
      <h1>Third slide</h1>
      </b-carousel-slide>
    </b-carousel>
         <router-link
       v-if=!this.$store.getters.isLoggedIn
      class="btn btn-primary"
      active-class="active"
      exact
      :to="{ name: 'Register' }"
      >Create an account</router-link
    >
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
   
 

      </div>
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

<style scoped>

</style>
