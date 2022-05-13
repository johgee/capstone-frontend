// remove sounds // rate sounds
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      playlists: [],
    };
  },
  created: function () {
    this.indexPlaylists();
  },
  methods: {
    indexPlaylists: function () {
      axios.get("/playlists").then((response) => {
        console.log("playlists index", response);
        this.playlists = response.data;
      });
    },
    deletePlaylists: function (playlist) {
      axios.delete("/playlists/" + playlist.id).then((response) => {
        console.log("playlists delete", response);
        this.$router.push("/playlists");
      });
    },
  },
};
</script>

<template>
  <div class="container text-center">
    <h1 class="page-title">My Playlist</h1>
    <div v-for="playlist in playlists" v-bind:key="playlist.id">
      <h2 class="page-title">{{ playlist.name }}</h2>
      <iframe width="420" height="315" v-bind:src="`https://www.youtube.com/embed/${playlist.youtube_code}`"></iframe>

      <div class="row">
        <button class="gray-button m-auto" v-on:click="deletePlaylists(playlist)">Delete Sound</button>
      </div>
      <!-- <p>{{ playlist.overall_rating }}</p> -->
    </div>
  </div>
</template>

<style>
.page-title {
  color: #b0e0e6;
}
.gray-button {
  font: bold 11px Arial;
  text-decoration: none;
  background-color: #b0e0e6;
  color: #000000;
  padding: 12px 16px;
  width: 250px;
}
</style>
