<template>
  <div class="col-sm-12 col-md-6 col-xl-4 mb-4" v-b-hover="handleHover">
    <b-card
      style="cursor: pointer; height: 500px"
      @click="goToBookDetails"
      class="m-3"
      :class="isHovered ? 'book-card' : ''"
      img-alt="Image"
      img-top
    >
      <div style="min-height: 50px" class="mb-2" >
        <p class="fs-6" :class="isHovered ? 'font-weight-bold' : ''">{{ title }}</p>
      </div>

      <b-img height="300px" alt="image" :src="photoURL"> </b-img>
      <b-card-text>
        <p class="lead mt-3">${{ cost.toFixed(2) }}</p>
      </b-card-text>
      <template #footer>
        <small v-for="author in authors" v-bind:key="author.id" class="fw-bold"
          >By {{ author.name }}</small
        >
      </template>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Books",
  data() {
    return {
      isHovered: false,
    };
  },
  props: {
    id: Number,
    title: String,
    photoURL: String,
    cost: Number,
    authors: Array,
  },

  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    async goToBookDetails() {
      this.$router.push("/book/" + this.id);
    },
  },
};
</script>

<style scoped>
.book-card {
  background: rgba(238, 238, 238, 0.445);
  transition-duration: 0.3s;
  box-shadow: 5px 5px #b9b9b9;
  transform: translateY(-3px);
}
</style>