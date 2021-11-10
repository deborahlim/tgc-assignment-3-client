<template>
  <div class="px-3 py-2">
    <b-card
      v-for="item in displayCart"
      v-bind:key="item.id"
      no-body
      class="overflow-hidden"
      style=""
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="item.books.imageUrl"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="item.books.title">
            <b-card-text>
              <p>Cost: ${{ item.books.cost }}</p>
              <FormulateForm id="item.id" @submit="updateQuantity">
                <FormulateInput
                  style="display: none"
                  type="number"
                  name="bookId"
                  :value="parseInt(item.book_id)"
                />
                <FormulateInput
                 :id="item.quantity"
                  type="number"
                  name="quantity"
                  label="Quantity"
                  :value="parseInt(item.quantity)"
                  :validation="[
                    ['required'],
                    ['number'],
                    ['between', 0, item.books.stock],
                  ]"
                  error-behavior="live"
                />
                <FormulateInput element-class="" type="submit" label="Update" />
              </FormulateForm>
        
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
   cartItems: [{quantity: 5}, {quantity: 6}]
    }
  },
  computed: {
    getQuantity() {
      return this.chosenQty;
    },
        displayCart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {

    updateQty() {
      this.update = true;
    },

    async getCart() {
      await this.$store.dispatch("showCart");
 
    },
    async removeFromCart(book_id) {
      await this.$store.dispatch("deleteFromCart", { book_id: book_id });
      await this.$store.dispatch("showCart");
    },
    async updateQuantity(data) {
      console.log(data);
      await this.$store.dispatch("updateQty", {
        book_id: data.bookId,
        new_quantity: data.quantity,
      });
      this.getCart()
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
