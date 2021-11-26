<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">The Book Corner</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link
              class="nav-link"
              active-class="active"
              exact
              :to="{ name: 'Home' }"
              >Home</router-link
            ></b-nav-item
          >

          <b-nav-item
            ><router-link
              class="nav-link"
              active-class="active"
              exact
              :to="{ name: 'Contact' }"
              >Contact Us</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link
              class="nav-link"
              active-class="active"
              exact
              :to="{ name: 'FAQ' }"
              >FAQ</router-link
            ></b-nav-item
          >
          <b-nav-item v-if="isLoggedIn"
            ><router-link
              class="nav-link"
              active-class="active"
              exact
              :to="{ name: 'Orders' }"
              >My Orders</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="my-sm-2 my-lg-0" v-if="isLoggedIn">
            <router-link
              v-b-hover="handleHover"
              exact
              :to="{ name: 'Checkout' }"
              class="cart-icon"
            >
              <b-icon-cart-fill
                v-if="isHovered"
                icon="cart"
                class="h5 mx-3 cart"
              ></b-icon-cart-fill>
              <b-icon-cart
                v-else
                icon="cart"
                class="h5 mx-3 cart"
              ></b-icon-cart>
              <span class="cart-items-count text-center">{{
                cartItemsCount
              }}</span>
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="!isLoggedIn">
            <router-link
              class="nav-link"
              active-class="active"
              exact
              :to="{ name: 'Login' }"
              >Log In</router-link
            >
          </b-nav-item>
          <b-nav-item-dropdown
            :text="displayCustomer"
            class="mb-sm-2 mb-lg-0"
            right
            v-if="isLoggedIn"
          >
            <b-dropdown-item
              ><router-link
                class="nav-link"
                active-class="active"
                exact
                :to="{ name: 'Account' }"
                >Account</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link" @click="logOut"
              >Log Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { BIconCart, BIconCartFill } from "bootstrap-vue";
export default {
  name: "TheNavbar",
  components: { BIconCart, BIconCartFill },
  data() {
    return {
      isHovered: false,
    };
  },
  props: {
    isLoggedIn: Boolean,
    cartItemsCount: Number,
  },
  computed: {
    displayCustomer() {
      return this.$store.getters.getCustomer.username;
    },
  },
  methods: {
    searchBooks() {
      this.$store.dispatch("displayBooks", this.form.name);
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    async logOut() {
        await this.$store.dispatch("logOut", {
          refreshToken: sessionStorage.getItem("refreshToken"),
        });
        this.$router.replace({
          name: "Login",
        });
    },
  },
};
</script>

<style>
#nav {
  padding-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  text-decoration: underline 6.5px;
}
.cart-icon {
  text-decoration: none !important;
}

.cart {
  mask-size: cover;
}

.cart:hover {
  color: #2c3e50 !important;
}

.cart-items-count {
  text-decoration: none !important;
  position: relative;
  background-color: white;
  bottom: 15px;
  left: -25px;
  border-radius: 100%;
  padding: 1px;
  border: 1px solid #000;
  color: #000;
  /* text-align: center; */
  font: 9px Arial, sans-serif;
}
</style>
