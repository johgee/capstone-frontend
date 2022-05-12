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
  <div class="playlists-index">
    <h1>My Playlist</h1>
    <div v-for="playlist in playlists" v-bind:key="playlist.id">
      <h2>{{ playlist.name }}</h2>
      <iframe width="420" height="315" v-bind:src="`https://www.youtube.com/embed/${playlist.youtube_code}`"></iframe>

      <div class="row"><button v-on:click="deletePlaylists(playlist)">Delete Sound</button></div>
      <!-- <p>{{ playlist.overall_rating }}</p> -->
    </div>
  </div>
</template>
