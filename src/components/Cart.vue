<template>
  <b-sidebar
    :visible="visibility"
    id="sidebar-right"
    @hidden="hideCart"
    title="My Cart"
    right
    shadow
  >
    <div class="px-3 py-2">
      <b-card
        v-for="item in this.$store.getters.getCart"
        v-bind:key="item.id"
        no-body
        class="overflow-hidden"
        style="max-width: 540px"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="https://picsum.photos/400/400/?image=20"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="item.books.title">
              <b-card-text>
                <p>Cost: ${{ item.books.cost }}</p>
<b-form-select v-model="chosenQty" :options="qtyOptions"></b-form-select>
  <b-button @click=updateQty  size="sm">Update Qty</b-button>
                
                <b-icon-trash
                  @click="removeFromCart(item.book_id)"
                  icon="trash"
                  class="h4 trash"
                ></b-icon-trash>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </b-sidebar>
</template>

<script>
import { BIconTrash } from "bootstrap-vue";
export default {
  name: "Home",
  async created() {
    this.getCart();
  },
  components: { BIconTrash },
  data() {
    return {
      update: false,
      qtyOptions: [1,2,3,4,5,6,7,8,9,"10+"],
      chosenQty: null
    }
  },
  props: {
    visibility: Boolean,
  },
  methods: {
    updateQty() {
      this.update = true
    },
    hideCart() {
      this.$emit("cart-hidden");
    },
    async getCart() {
      await this.$store.dispatch("showCart");
    },
    async removeFromCart(book_id) {
      await this.$store.dispatch("deleteFromCart", { book_id: book_id });
      await this.$store.dispatch("showCart");
    },
  },
};
</script>

<style scoped>
.trash:hover {
  color: brown;
}

.trash:active {
  transform: translateY(0.5px);
}
</style>
