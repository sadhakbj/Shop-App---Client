<template>
  <div class="hello">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6" style="border: 1px solid #dadada; padding: 40px">
        <div>
        <b-alert show dismissible v-if="message" :variant="variant">
          {{ message}}
        </b-alert>
      </div>
       <form class="form-signin" @submit.prevent="processLogin">
        <h2 class="form-signin-heading text-center">Please sign in</h2> <hr>
       <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" required autofocus v-model="email">
       </div>

       <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" class="form-control" placeholder="Password" required v-model="password">
        </div>
        <button class="btn btn-lg btn-info btn-block" type="submit">Sign in</button> <br>   
      </form>
  </div>
  </div>
  </div>
</template>

<script>
import auth from "../auth/index";

const baseUrl = "http://localhost:8081/users/login";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      variant: ""
    };
  },
  methods: {
    processLogin() {
      var credentials = {
        email: this.email,
        password: this.password
      };

      auth.login(this, credentials, "admin");
    }
  }
};
</script>
