<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sounds: [],
      // newSoundParams: {},
      // editSoundParams: {},
      // currentSound: {},
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

    showSound: function (sound) {
      this.currentSound = sound;
      this.editSoundParams = sound;
      document.querySelector("#sound-details").showModal();
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>Welcome to SOUNDS</h1>
    <div>
      Search sounds:
      <!-- <input type="text" v-model="" /> -->
      <a href="/youtube/search" class="button">Search for your sounds</a>
      <a href="/sounds" class="button">Check out our sounds</a>
      <a href="/" class="button">Login</a>
      <a href="/users" class="button">Create</a>
    </div>
  </div>
</template>

<style>
.button {
  font: bold 11px Arial;
  text-decoration: none;
  background-color: #eeeeee;
  color: #333333;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid #cccccc;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #cccccc;
}
</style>
