<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sounds: [],
    };
  },
  created: function () {
    this.indexSounds();
  },
  methods: {
    indexSounds: function () {
      axios.get("/sounds").then((response) => {
        console.log("sounds index", response);
        this.sounds = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="sounds-index">
    <h1>Our Sounds</h1>
    <div v-for="sound in sounds" v-bind:key="sound.id">
      <h2>{{ sound.name }}</h2>
      <p>overall_rating: {{ sound.overall_rating }}</p>
      <router-link v-bind:to="`/sounds/${sound.id}`">More details</router-link>
    </div>
  </div>
</template>
