<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log("users create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="users-new">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/sounds">Our sounds</router-link>
      |
      <router-link to="/users/new">New user</router-link>
      |
      <router-link to="/login">Login</router-link>
    </div>
    <h1>New User</h1>
    <form v-on:submit.prevent="submit()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      name:
      <input type="text" v-model="newUserParams.name" />
      email:
      <input type="text" v-model="newUserParams.email" />
      password_confirmation:
      <input type="text" v-model="newUserParams.password_confirmation" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
