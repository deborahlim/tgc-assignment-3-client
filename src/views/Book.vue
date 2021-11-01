<template>
  <div class="about" v-if="selectedBook">
    <h1>{{selectedBook.title}}</h1>
    <div>
  <b-img :src="selectedBook.photoURL" fluid alt="Responsive image"></b-img>
  <p>{{selectedBook.cost}}</p>
  <p>{{selectedBook.description}}</p>
  <p>{{selectedBook.formats.name}}</p>
<p>{{selectedBook.publishers.name}}</p>
<p>{{selectedBook.genres.name}}</p>
<p v-for="tag in selectedBook.tags" v-bind:key="tag.id">{{tag.name}}</p>
  <p v-for="author in selectedBook.authors" v-bind:key="author.id">{{author.name}}</p>
    <b-button v-b-toggle.sidebar-right variant="outline-primary">Add To Cart</b-button>
  
<Cart></Cart>


  </div>
</div>


</template>
<script>
// @ is an alias to /src
import Cart from "@/components/Cart.vue";

export default {
  name: "Book",
  components: {
      Cart
  },
  data() {
      return {
          selectedBook: null
      }
  },
  props: ["book_id"], 
  created() {
      this.getBook(this.book_id);
  },
  methods: {
    async getBook(book_id) {
        let books = await this.$store.getters.getBooks;
        // console.log(books);
        
        this.selectedBook = await books.find((book) => book.id === parseInt(book_id) )
        // console.log(this.selectedBook)
      },
    getCart() {
      
    }
  }
}
</script>