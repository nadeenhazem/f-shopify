<template>
  <div class="AuthPage">
    <div class="card signup-card">
      <h1 class="login-header signup-header">Signup</h1>
      <form action="" @submit="checkForm" class="login-form me-4">
        <div class="form-group">
          <input
            type="text"
            v-model="SignUpData.name"
            placeholder="Name"
            class="login-input"
            ref="InputName"
            v-on:focus="InputFocus($refs.InputName)"
            v-on:blur="InputBlur($refs.InputName, 'Name')"
          />
          <label for="name" class="login-label">Name</label>
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="SignUpData.e_mail"
            placeholder="E-mail"
            class="login-input"
            ref="InputEmail"
            v-on:focus="InputFocus($refs.InputEmail)"
            v-on:blur="InputBlur($refs.InputEmail, 'E-Mail')"
          />
          <label for="e-mail" class="login-label">E-mail</label>
        </div>

        <div class="form-group">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="SignUpData.password"
            placeholder="Password"
            class="login-input"
            ref="InputPassword"
            v-on:focus="InputFocus($refs.InputPassword)"
            v-on:blur="InputBlur($refs.InputPassword, 'password')"
          />

          <label for="password" class="login-label">Password</label>
          <font-awesome-icon
            class="password-eye"
            :icon="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
            @click="passwordShow"
          />
        </div>

        <p class="text-danger text-start">{{ errors }}</p>
        <button class="login-btn">SignUp</button>
        <div class="my-2 ms-1">
          <router-link to="/login" class="text-muted">Login Page</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);
import AllMixins from "@/mixins/AllMixins";

export default {
  data() {
    return {
      SignUpData: {
        name: null,
        e_mail: null,
        password: null,
      },
      errors: "",
      showPassword: false,
    };
  },
  mixins: [AllMixins],

  methods: {
    passwordShow() {
      this.showPassword = !this.showPassword;
    },

    checkForm(e) {
      e.preventDefault();
      this.errors = "";
      if (!this.SignUpData.name) {
        this.errors = "Name required.";
      } else if (!this.SignUpData.e_mail) {
        this.errors = "Email required.";
      } else if (!this.validEmail(this.SignUpData.e_mail)) {
        this.errors = "email not valid.";
      } else if (!this.SignUpData.password) {
        this.errors = "password required.";
      } else if (this.SignUpData.password.length < 8) {
        this.errors = "password less than 8 character";
      } else {
        this.postData();
      }
    },
    postData() {
      axios
        .post("https://family-market-app.onrender.com/signup", this.SignUpData)
        .then(() => this.$router.push("/login"));
    },
  },
};
</script>

<style>
@import "@/assets/style/Auth.css";
</style>
