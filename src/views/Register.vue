<template>
  <div class="about">
    <h1 class="m-4">Register</h1>
    <div class="form">
      <FormulateForm name="register" @submit="register" v-model="formValues">
        <FormulateInput
          type="text"
          name="username"
          label="Your Name"
          validation="required"
          validation-behavior="live"
        />
        <FormulateInput
          type="email"
          name="email"
          label="Your Email"
          validation="required|email"
          validation-behavior="live"
        />
        <FormulateInput
          type="text"
          name="address"
          label="Your Address"
          validation="required"
          validation-behavior="live"
        />
        <FormulateInput
          type="text"
          name="contactNumber"
          label="Your Contact Number"
          validation="required|number"
          validation-name="Contact Number"
          validation-behavior="live"
        />
        <FormulateInput
          label="New password"
          type="password"
          name="password"
          validation="required"
        />
        <FormulateInput
          label="Confirm password"
          type="password"
          name="password_confirm"
          validation="required|confirm"
          validation-name="Password confirmation"
        />
        <FormulateErrors />
        <FormulateInput type="submit" label="Register Account" />
        <FormulateInput
          type="button"
          label="Reset Form"
          data-ghost
          @click="reset"
        />

          <p>Have an account? <a class="link text-info font-weight-bold" @click="goToLogin">Log In</a></p>
       
        
      </FormulateForm>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      formValues: {
        username: "",
        email: "",
        address: "",
        contactNumber: "",
        password: "",
        password_confirm: "",
      },
    };
  },
  methods: {
    goToLogin() {
 this.$router.replace({
          name: "Login",
        });
    },
    async register(data) {
      try {
        let { confirmPassword, ...formData } = data;
        console.log(confirmPassword, formData);

        await this.$store.dispatch("register", formData);
       this.goToLogin();
      } catch (err) {
        const errors = { 
          formErrors: err.response === undefined
            ? err.message
            : err.response.data.error.message,
        };
        this.$formulate.handle(errors, "register");
      }
    },
    reset() {
      this.$formulate.reset("register");
    },
  },
};
</script>

<style>
.form {
  width: 50% !important;
  margin: 0 auto !important;
}
</style>
