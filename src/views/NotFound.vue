<template>
<div class="">
  <h1>PAGE NOT FOUND</h1>
  <b-button><router-link
              class="btn"
              active-class="active"
              exact
              :to="{ name: 'Home' }"
              >Back to Home Page</router-link
            ></b-button>
  </div>
</template>