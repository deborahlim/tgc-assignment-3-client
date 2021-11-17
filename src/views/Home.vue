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
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide :img-src="require('../assets/carousel-1.jpg')">
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/carousel-2.webp')">
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/carousel-3.png')">
        </b-carousel-slide>
      </b-carousel>

      <div class="mt-5 p-5 register">
        <h1 class="display-3">Create Your Account</h1>
       
          <router-link
            v-if="!this.$store.getters.isLoggedIn"
            active-class="active"
            exact
            :to="{ name: 'Register' }"
          > <b-button class="mt-3" size="lg">
          Register
        </b-button>
        </router-link>
      </div>

      <div class="books mt-5 p-5">
        <h2 class="display-4">Bestselling Books</h2>
        <b-card-group deck class="m-3">
          <BaseBookCard
            v-for="book in this.$store.getters.getBooks"
            v-bind:key="book.id"
            :id="book.id"
            :title="book.title"
            :photoURL="book.photoURL"
            :description="book.description"
            :authors="book.authors"
          ></BaseBookCard>
        </b-card-group>
      </div>
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
.register {
  height: fit-content;
  background: wheat;
}

.books {
  height: fit-content;
  background: yellowgreen;
}
</style>
