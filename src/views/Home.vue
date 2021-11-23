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
        <b-carousel-slide :img-src="require('../assets/carousel-2.jpg')">
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/carousel-3.png')">
        </b-carousel-slide>
      </b-carousel>

      <div class="mt-5 p-5 register" v-if="!this.$store.getters.isLoggedIn">
        <h1 class="display-3">Create Your Account</h1>
        <router-link active-class="active" exact :to="{ name: 'Register' }">
          <b-button class="btn btn-info mt-3" size="lg"> Register </b-button>
        </router-link>
      </div>

      <div class="books mt-5 p-5">
        <h2 class="display-4">Our Books</h2>
        <div>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-form-input
            v-model="title"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Enter title"
          ></b-form-input>

          <b-button variant="primary">Search</b-button>
        </div>
        <b-card-group deck class="m-3">
          <BaseBookCard
            v-for="book in selectedBooks"
            v-bind:key="book.id"
            :id="book.id"
            :title="book.title"
            :photoURL="book.imageUrl"
            :cost="book.cost"
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
  data() {
    return { title: "" };
  },
  created() {
    this.loadBooks();
  },
  computed: {
    getBooks() {
      return this.$store.getters.getBooks;
    },
    selectedBooks() {
      let selected = [];
      for (let book of this.getBooks) {
        console.log(book);
        // if (book.title.includes(this.title)) {
        //   selected.push(book);
        // }
      }
      return selected;
    },
  },
  methods: {
    async loadBooks() {
      await this.$store.dispatch("displayBooks");
    },
  },
};
</script>

<style scoped>
.register {
  height: fit-content;
  /* background: wheat; */
}

.books {
  height: fit-content;
}
</style>
