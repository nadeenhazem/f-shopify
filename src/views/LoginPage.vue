<template>
  <div class="AuthPage">
    <div class="card login-card">
      <h1 class="login-header">Login</h1>

      <form action="" @submit="checkForm" class="login-form">
        <div class="form-group">
          <input
            type="text"
            v-model="LoginData.e_mail"
            placeholder="E-Mail"
            class="login-input"
            ref="emailFocus"
            v-on:focus="InputFocus($refs.emailFocus)"
            v-on:blur="InputBlur($refs.emailFocus, 'E-Mail')"
          />
          <label for="e-mail" class="login-label">E-Mail</label>
        </div>
        <div class="form-group">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="LoginData.password"
            placeholder="password"
            class="login-input"
            ref="passwordFocus"
            v-on:focus="InputFocus($refs.passwordFocus)"
            v-on:blur="InputBlur($refs.passwordFocus, 'password')"
          />
          <label for="password" class="login-label">Password</label>

          <font-awesome-icon
            class="password-eye"
            :icon="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
            @click="passwordShow"
          />
        </div>

        <p class="text-danger text-start">{{ errors }}</p>
        <div class="text-start mb-2 ms-1">
          <router-link :to="{ name: 'ForgetPassword' }"
            >ForgetPassword</router-link
          >
        </div>

        <button class="login-btn">Login</button>

        <div class="my-2 ms-1">
          <router-link to="/signup" class="text-muted"
            >Create New Account</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faEyeSlash);
import axios from "axios";
import AllMixins from "@/mixins/AllMixins";
export default {
  data() {
    return {
      LoginData: {
        e_mail: null,
        password: null,
      },
      errors: "",
      showPassword: false,
      labelShow: false,
      getUsers: [],
      emailArr: [],
      passArr: [],
    };
  },
  mixins: [AllMixins],
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errors = "";
      if (!this.LoginData.e_mail) {
        this.errors = "Email required.";
      } else if (!this.validEmail(this.LoginData.e_mail)) {
        this.errors = "email not valid.";
      } else if (!this.LoginData.password) {
        this.errors = "password required.";
      } else if (this.LoginData.password.length < 8) {
        this.errors = "password less than 8 character";
      } else if (
        this.emailArr.includes(this.LoginData.e_mail) &&
        this.passArr.includes(this.LoginData.password) &&
        this.passArr.indexOf(this.LoginData.password) ==
          this.emailArr.indexOf(this.LoginData.e_mail)
      ) {
        localStorage.setItem("loggedIn", JSON.stringify(this.LoginData));
        this.$router.push("/");
      } else {
        this.errors = "Email or Password is incorrect";
      }
    },

    passwordShow() {
      this.showPassword = !this.showPassword;
    },
  },
  mounted() {
    axios.get("https://family-market-app.onrender.com/signup").then((res) => {
      res.data.map((newData) => {
        this.emailArr.push(newData.e_mail);
        this.passArr.push(newData.password);
      });
    });
  },
};
</script>

<style scoped>
@import "@/assets/style/Auth.css";
</style>
