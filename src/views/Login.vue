<template>
  <div class="about">
    <h1 class="m-4">This is a Login page</h1>
    <div class="form">
      <FormulateForm name="login" v-model="formValues" @submit="login">
        <FormulateInput type="email" name="email" label="Your email" />
        <FormulateInput type="password" name="password" label="Your Password" />
        <FormulateErrors />
        <FormulateInput element-class="" type="submit" label="Log In" />
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
