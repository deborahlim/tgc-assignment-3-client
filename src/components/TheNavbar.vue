<template>
  <div>

    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Book Shop</b-navbar-brand>

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
                 <b-nav-item
          v-if=isLoggedIn
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
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <router-link
           v-if=isLoggedIn
           v-b-hover="handleHover"
              exact
              :to="{ name: 'Checkout' }"
              class=" cart-icon"
              >  <b-icon-cart-fill
              v-if="isHovered"
                icon="cart"
                class="h4 my-2 mx-3 cart"
              ></b-icon-cart-fill>
              <b-icon-cart
              v-else
                icon="cart"
                class="h4 my-2 mx-3 cart"
              ></b-icon-cart>
              </router-link
            >

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item 
             
              ><router-link
             v-if="!isLoggedIn"
                class="nav-link"
                active-class="active"
                exact
                :to="{ name: 'Login' }"
                >Log In</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item @click="logOut" 
              ><router-link
              v-if="isLoggedIn"
                class="nav-link"
                active-class="active"
                exact
                :to="{ name: 'Home' }"
                >Log Out</router-link
              ></b-dropdown-item
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
        isHovered: false
     }
   },
  props: {
    isLoggedIn : Boolean
  },
  methods: {handleHover(hovered) {
        this.isHovered = hovered
      },
    logOut() {
      this.$store.dispatch("logOut");
    }
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

.cart {
  mask-size: cover;
}

.cart:hover {
color: #2c3e50 !important;
}
</style>
