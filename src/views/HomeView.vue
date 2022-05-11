<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sounds: [],
      search: "",
      results: [],
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
    searchSounds: function () {
      axios.get("/youtube/search?search=" + this.search).then((response) => {
        console.log("search index", response.data.items);
        this.results = response.data.items;
      });
    },
    addToPlaylist: function (sound) {
      var addPlaylist = {
        user_id: 2,
        name: sound.snippet.title,
        user_rating: 5,
        youtube_code: sound.id.videoId,
      };
      axios
        .post("/playlists", addPlaylist)
        .then((response) => {
          console.log("playlist create", response.data);
          // this.playlsts.push(response.data);
        })
        .catch((error) => {
          console.log("playlists create error", error.response);
        });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>Welcome to SOUNDS</h1>
    <div>
      <div class="row">
        Search sounds:
        <input type="text" v-model="search" />
        <button v-on:click="searchSounds()">Search for your sounds</button>
      </div>
      <div class="row">
        <a href="/sounds" class="button">Check out our sounds</a>
      </div>
      <div class="row">
        <a href="/login" class="button">Login</a>
      </div>
      <div class="row">
        <a href="/users" class="button">Sign Up</a>
      </div>
    </div>
    <div v-for="result in results" v-bind:key="result.etag">
      <h2>{{ result.snippet.title }}</h2>
      <iframe width="420" height="315" v-bind:src="`https://www.youtube.com/embed/${result.id.videoId}`"></iframe>
      <div class="row"><button v-on:click="addToPlaylist(result)">Add to My Playlist</button></div>
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
