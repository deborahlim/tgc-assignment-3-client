<template>
  <div class="about">
    <h1>The Book Corner</h1>
    <p class="m-4 lead">To continue, log into your account</p>
    <div class="form">
      <FormulateForm name="login" v-model="formValues" @submit="login">
        <FormulateInput type="email" name="email" label="Your email" />
        <FormulateInput type="password" name="password" label="Your Password" />
        <FormulateErrors />
        <FormulateInput input-class="btn bg-info" type="submit" label="Log In" />
        <div class="mt-2">
          <p>Dont have an account?</p>
          <a class="btn btn-outline-info" @click="goToRegister">Register</a>
        </div>
        
      </FormulateForm>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formValues: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login(data) {
      try {
        await this.$store.dispatch("login", data);
        await this.$store.dispatch("showCart");
        this.$router.replace({
          name: "Home",
        });
      } catch (err) {
        console.log(err.message);
        const errors = {
          formErrors:
            err.response === undefined
              ? err.message
              : err.response.data.error.message,
        };
        this.$formulate.handle(errors, "login");
      }
    },
    goToRegister() { this.$router.replace({
          name: "Register",
        });}

  },
};
</script>
<style>
.form {
  width: 50% !important;
  margin: 0 auto !important;
}

.formulate-input .formulate-input-element {
  max-width: none !important;
}
</style>
