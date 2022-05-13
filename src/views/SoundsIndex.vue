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
        // console.log("sounds index", response);
        this.sounds = response.data;
      });
    },
    addToPlaylist: function (sound) {
      var addPlaylist = {
        user_id: 2,
        name: sound.name,
        user_rating: 5,
        youtube_code: sound.youtube_code,
      };
      axios
        .post("/playlists", addPlaylist)
        .then((response) => {
          console.log("playlist create", response.data);
        })
        .catch((error) => {
          console.log("playlists create error", error.response);
        });
    },
  },
};
</script>

<template>
  <div class="container text-center">
    <h1 class="page-title">Our Sounds</h1>
    <div v-for="sound in sounds" v-bind:key="sound.id">
      <h2 class="page-title">{{ sound.name }}</h2>
      <iframe width="420" height="315" v-bind:src="`https://www.youtube.com/embed/${sound.youtube_code}`"></iframe>
      <div class="row">
        <button class="gray-button m-auto" v-on:click="addToPlaylist(sound)">Add to My Playlist</button>
      </div>
      <p class="rating">overall_rating: {{ sound.overall_rating }}</p>
      <router-link v-bind:to="`/sounds/${sound.id}`">More details</router-link>
    </div>
  </div>
</template>

<style>
.page-title {
  color: #b0e0e6;
  font-weight: bold;
  margin-top: 25px;
}
.gray-button {
  font: bold 11px Arial;
  text-decoration: none;
  background-color: #b0e0e6;
  color: #000000;
  padding: 12px 16px;
  width: 250px;
}
.rating {
  color: #ffc0cb;
}
</style>
