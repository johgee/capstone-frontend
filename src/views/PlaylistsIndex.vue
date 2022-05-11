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
    deletePlaylists: function (id) {
      axios.delete("/playlists/id").then((response) => {
        console.log("playlists delete", response);
        this.playlists = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="playlists-index">
    <h1>All Playlists</h1>
    <div v-for="playlist in playlists" v-bind:key="playlist.id">
      <h2>{{ playlist.name }}</h2>
      <div class="row"><button v-on:click="deletePlaylists(playlist.id)">Delete Sound</button></div>
      <!-- <p>{{ playlist.overall_rating }}</p> -->
    </div>
  </div>
</template>
