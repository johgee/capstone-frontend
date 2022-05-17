<template>
  <div class="update text-center">
    <h1>{{ userData.name }}'s Profile</h1>
    <form v-on:submit.prevent="submit()">
      <h2>Update your Profile:</h2>
      <div>
        Name:
        <input type="text" v-model="userData.name" />
      </div>
      <div>
        Email:
        <input type="text" v-model="userData.email" />
      </div>
      <div>
        <div><img v-bind:src="userData.image_url" v-if="userData.image_url" /></div>
        <input type="file" v-on:change="setFile($event)" ref="fileInput" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      name: "",
      email: "",
      imageFile: "",
      userData: {},
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.userData = response.data;
    });
  },
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    submit: function () {
      var formData = new FormData();
      formData.append("name", this.userData.name);
      // formData.append("email", this.email);
      formData.append("image_file", this.imageFile);

      axios.patch("/users/" + this.$route.params.id, formData).then((response) => {
        console.log(response);
        this.userData = response.data;
      });
    },
  },
};
</script>

<style>
.update {
  color: #ffc0cb;
}
</style>
