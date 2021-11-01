  <template>

    <b-sidebar id="sidebar-right" title="My Cart" right shadow>
      <div class="px-3 py-2">
          <b-card v-for="item in this.$store.getters.getCart" v-bind:key="item.id" no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="item.books.title">
          <b-card-text>
           <p>Cost: ${{item.books.cost}}</p> 
           <p>Quantity: {{item.quantity}}</p> 
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card> 
      </div>
    </b-sidebar>

  </template>

<script>

export default {
  name: "Home",
    async created() {
    this.getCart()
  },
  methods: {
    async getCart() {
      await this.$store.dispatch("showCart")
    }  }
};
</script>