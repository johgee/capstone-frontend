<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createUser: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log("/users create", response);
          this.$router.push("/users");
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
  <div class="users=new">
    <h1>New User</h1>
    <form v-on:submit.prevent="createUser()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      name:
      <input type="text" v-model="newUserParams.name" />
      email:
      <input type="text" v-model="newUserParams.email" />
      password_digest:
      <input type="text" v-model="newUserParams.password_digest" />
      image_url:
      <input type="text" v-model="newUserParams.image_url" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
