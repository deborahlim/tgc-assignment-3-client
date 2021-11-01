<template>
        <b-card
        @click="goToBookDetails"
          class="m-3"
          :title="title"
          :img-src="photoURL"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            {{ description }}
          </b-card-text>
          <template #footer>
            <small v-for="author in authors" v-bind:key="author.id"
              class="text-muted"
              >By {{ author.name }}</small
            >
          </template>
        </b-card>
</template>
<script>
export default {
  name: "Books",
  data() {
return {

}
  },
  props: {
    id: Number, title: String, photoURL: String, description: String, authors: Array
  },

  methods: {
    async goToBookDetails() {
     this.$router.push("/book/" + this.id)
    }
  }
};
</script>
