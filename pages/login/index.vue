<template>
  <div class="">
    <app-login-heading></app-login-heading>
    <app-login-form></app-login-form>
  </div>
</template>

<script>
import AppLoginForm from "../../components/login/AppLoginForm.vue";
import AppLoginHeading from "../../components/login/AppLoginHeading.vue";
export default {
  middleware: ["guest"],
  components: { AppLoginHeading, AppLoginForm },
  name: "Login",
};
</script>

<style></style>
