<template>
  <div class="home">
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://static01.nyt.com/images/2020/12/04/books/04CRITICSPICKS-COMBO/00BOOKCOMBO-superJumbo.jpg?quality=75&auto=webp"
      >
      <h1>First slide</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://sm.mashable.com/t/mashable_sea/article/j/just-10-ne/just-10-new-books-youll-probably-love_wg6d.1248.jpg
">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://scontent.fsin10-1.fna.fbcdn.net/v/t39.30808-6/234780125_6326336824107031_1766314122609467646_n.png?_nc_cat=111&ccb=1-5&_nc_sid=6e5ad9&_nc_ohc=eEmeGLWIVcYAX_IbGkl&_nc_ht=scontent.fsin10-1.fna&oh=618cadf927362605253668a74aa0aa0d&oe=618F9B4B"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://static01.nyt.com/images/2021/03/26/books/00APRIL-BOOKS-COMBO/00APRIL-BOOKS-COMBO-superJumbo.jpg?quality=75&auto=webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->
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
  methods: {
  }
};
</script>

<style scoped>

</style>
