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
    <h1 class="page-title text-center">Welcome to sleep ASMR</h1>
    <div class="text-center">
      <form class="form-inline" align="center">
        <label class="form-label" for="form1">Search sound:</label>
        <input id="form1" class="form-control" type="text" v-model="search" />
      </form>
      <button class="purple-button" v-on:click="searchSounds()">Search for your sounds</button>
      <div class="row">
        <a href="/sounds">
          <button class="purple-button">Check out our sounds</button>
        </a>
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
.form-label {
  color: #fff5ee;
  font: bold 15px Arial;
  font-weight: bold;
}
.purple-button {
  font: bold 13px Arial;
  text-decoration: none;
  background-color: #800080;
  color: #fff5ee;
  padding: 12px 16px;
  width: 250px;
  margin: 15px;
}
.home {
  margin-left: 100px;
}
.page-title {
  color: #800080;
}
</style>
