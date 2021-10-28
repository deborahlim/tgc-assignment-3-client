<template>
  <div class="about">
    <h1 class="m-4" >This is a Login page</h1>
        <div class="form">
      <FormulateForm :values="formValues" >
        <FormulateInput element-class="" type="email" name="email" label="Your email" />
         <FormulateInput element-class="" type="password" name="password" label="Your Password" />
        <FormulateInput element-class="" type="submit" label="Log In" />
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
        email: "",
        password: "",

      },
    };
  },
};
</script>