<template>
  <div class="pt-sm-2 pt-md-5">
    <b-card
      style="cursor: pointer"
      v-for="item in displayCart"
      v-bind:key="item.id"
      no-body
      class="overflow-hidden text-wrap cart-item"
      :class="{ overlay : isActive}"
    >
      <b-spinner v-if="isLoading" style="position: absolute; left:50%; top:50%" variant="light" type="grow" label="Spinning"></b-spinner>
      <p class="pt-2 lead font-weight-bold">{{ item.books.title }}</p>
      <b-row no-gutters style="height: 100%">
        <b-col md="6" class="d-flex align-items-center justify-content-center">
          <b-card-img
            :src="item.books.imageUrl"
            alt="Image"
            class="rounded-0"
            style="height: 200px; width: auto"
          ></b-card-img>
        </b-col>
        <b-col md="6" class="d-flex align-items-center">
          <b-card-body class="pb-0">
            <b-card-text>
              <p>
                <span class="font-weight-bold">Price: </span>${{
                  item.books.cost
                }}
              </p>
              <FormulateForm id="item.id" @submit="updateQuantity">
                <FormulateInput
                  :value="item.book_id"
                  name="bookId"
                  type="hidden"
                  style="display: none"
                />
                <FormulateInput
                  style="padding-right: 20px"
                  :id="item.quantity"
                  type="number"
                  name="quantity"
                  label="Quantity: "
                  :value="parseInt(item.quantity)"
                  min="1"
                  :max="`${item.books.stock}`"
                  :validation="[
                    ['required'],
                    ['number'],
                    ['between', 0, item.books.stock + 1],
                  ]"
                  :help="`Remaining Stock: ${item.books.stock}`"
                  error-behavior="live"
                />
                <div class="d-inline-flex">
                  <FormulateInput
                    input-class="btn bg-info"
                    type="submit"
                    label="Update"
                  />
                  <b-icon-trash
                    @click="removeFromCart(item.book_id)"
                    icon="trash"
                    class="h4 mx-4 mt-2 trash"
                  ></b-icon-trash>
                </div>
              </FormulateForm>
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
      isLoading: false,
      isActive: false,
    };
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
      this.isLoading = true;
      this.isActive = true;
      await this.$store.dispatch("deleteFromCart", { book_id: book_id });
      await this.$store.dispatch("showCart");
      this.isLoading = false;
      this.isActive = false;
    },
    async updateQuantity(data) {
      this.isLoading = true;
      this.isActive = true;
      console.log(data);
      await this.$store.dispatch("updateQty", {
        book_id: data.bookId,
        new_quantity: data.quantity,
      });
      this.isLoading = false;
      this.isActive = false;
      this.getCart();
    },
  },
};
</script>

<style>
.cart-item {
  height: 100%;
  padding: 5%;
}
.trash:hover {
  color: brown;
}

.trash:active {
  transform: translateY(0.5px);
}

.formulate-input .formulate-input-element {
  display: inline-block;
  max-width: 100px !important;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
