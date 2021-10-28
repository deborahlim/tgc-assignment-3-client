<template>
  <div class="about">
    <h1 class="m-4" >Register</h1>
    <div class="form">
      <FormulateForm :values="formValues" >
        <FormulateInput element-class="" type="text" name="username" label="Your name"/>
        <FormulateInput element-class="" type="email" name="email" label="Your email" />
        <FormulateInput element-class="" type="text" name="address" label="Your Address" />
         <FormulateInput element-class="" type="text" name="contactNumber" label="Your Contact Number" />
         <FormulateInput element-class="" type="password" name="password" label="Your Password" />
        <FormulateInput element-class="" type="password" name="confirmPassword" label="Confirm Your Pasword" />
        <FormulateInput element-class="" type="submit" label="Register Account" />
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
        confirmPassword: ""
      },
    };
  },
};
</script>

<style>
.form {
    width: 50% !important;
    margin: 0 auto !important;

    }


</style>