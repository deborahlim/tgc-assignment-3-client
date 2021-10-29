<template>
  <div class="about">
    <h1>All Books</h1>
    <div>
      <b-card-group deck class="m-3">
        <b-card
          class="m-3"
          v-for="book in this.$store.getters.getBooks"
          v-bind:key="book.id"
          :title="book.title"
          :img-src="book.photoURL"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            {{ book.description }}
          </b-card-text>
          <template #footer>
            <small
              v-for="author in book.authors"
              v-bind:key="author.id"
              class="text-muted"
              >By {{ author.name }}</small
            >
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "Books",
  async created() {
    await this.$store.dispatch("displayBooks");
  },
};
</script>
