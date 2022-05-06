<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sound: {},
    };
  },
  created: function () {
    axios.get("/sounds/" + this.$route.params.id).then((response) => {
      console.log("sounds show", response);
      this.sound = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="sounds-show">
    <h2>{{ sound.name }}</h2>
    <p>{{ sound.overall_rating }}</p>
    <router-link to="/sounds">Back to all sounds</router-link>
  </div>
</template>
