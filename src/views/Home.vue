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
          <b-form-input
            v-model="title"
            id="inline-form-input-name"
            class="my-5 search"
            placeholder="Find a book"
          ></b-form-input>
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
    selectedBooks() {
      let selected = [];
      let books = this.$store.getters.getBooks;
      if (books) {
        books.forEach((book) => {
          if (book.title.toLowerCase().includes(this.title.toLowerCase())) {
            selected.push(book);
          }
        });
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

.search {
width: 50% !important;
 margin: 0 auto; 
}

.books {
  height: fit-content;
}
</style>
