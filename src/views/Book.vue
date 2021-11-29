<template>
  <div class="book my-4" v-if="selectedBook">
    <h1 class="p-4">{{ selectedBook.title }}</h1>
    <div>
      <b-row gutters-2>
        <b-col md="6">
      <b-img :src="selectedBook.imageUrl" fluid alt="Responsive image"></b-img>
      </b-col>
      <b-col md="6" class="mt-4">
      <p> <span class="font-weight-bold">Price: </span> ${{ (selectedBook.cost).toFixed(2) }}</p>
      <p> <span class="font-weight-bold">Description: </span> {{ selectedBook.description }}</p>
      <p> <span class="font-weight-bold">Format: </span>{{ selectedBook.formats.name }}</p>
      <p> <span class="font-weight-bold">Publisher: </span>{{ selectedBook.publishers.name }}</p>
      <p> <span class="font-weight-bold">Genre: </span>{{ selectedBook.genres.name }}</p>
      <p> <span class="font-weight-bold">Tag(s): </span> <b-badge  v-for="tag in selectedBook.tags" v-bind:key="tag.id" variant="primary" class="mr-2">{{ tag.name }}</b-badge></p>
      <p v-for="author in selectedBook.authors" v-bind:key="author.id">
       <span class="font-weight-bold"> Author(s):</span>  {{ author.name }} 
      </p>
      </b-col>
      
      </b-row>
            <b-button v-if="inStock" @click="submitAddToCart" class="my-5" variant="outline-primary"
        >Add To Cart</b-button>
        <b-button @click="goToHome" class="my-5 ml-2" variant="outline-danger"
        >Back to Books</b-button
      >
      <b-sidebar
        :visible="isCartVisible"
        id="sidebar-right"
        @hidden="hideCart"
        title="My Cart"
        right
        shadow
      >
        <BaseCart :key="addOne"></BaseCart>
      <router-link
              exact
              :to="{ name: 'Checkout' }"
              class="btn btn-outline-info m-4"
              >My Cart</router-link
            >
      </b-sidebar>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import BaseCart from "@/components/BaseCart.vue";

export default {
  name: "Book",
  components: {
    BaseCart,
  },
  data() {
    return {
      selectedBook: null,
      isCartVisible: false,
      addOne: 0
    };
  },
  computed: {
    inStock() {
      return this.selectedBook.stock !== 0 
    }
  },
  props: { book_id: String },
  created() {
    this.getBook(this.book_id);
  },
  methods: {
    hideCart() {
      this.isCartVisible = false;
    },
    checkCartVisibility() {
      if (!this.isCartVisible) {
        this.isCartVisible = true;
      }
    },
    async getBook(book_id) {
      await this.$store.dispatch("displayBooks");
      let books = await this.$store.getters.getBooks;
      // console.log(books);

      this.selectedBook = await books.find(
        (book) => book.id === parseInt(book_id)
      );
      // console.log(this.selectedBook)
    },
    async submitAddToCart() {
      this.checkCartVisibility();
      await this.$store.dispatch("addToCart", { book_id: this.book_id });
      await this.$store.dispatch("showCart");
      this.addOne += 1
    },
    goToHome() {
      this.$router.push({name: "Home"});
    }
  },
};
</script>

<style scoped>
.book {
  height: fit-content;
}
</style>