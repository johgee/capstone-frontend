<script>
import axios from "axios";
export default {
  data: function () {
    return {
      sounds: [],
      newSoundParams: {},
      editSoundParams: {},
      currentSound: {},
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
    createSound: function () {
      axios
        .post("/sounds", this.newSoundParams)
        .then((response) => {
          console.log("sounds create", response);
          this.sounds.push(response.data);
          this.newSoundParams = {};
        })
        .catch((error) => {
          console.log("sounds create error", error.response);
        });
    },
    showSound: function (sound) {
      this.currentSound = sound;
      this.editSoundParams = sound;
      document.querySelector("#sound-details").showModal();
    },
    updateSound: function (sound) {
      axios
        .patch("/sounds/" + sound.id, this.editSoundParams)
        .then((response) => {
          console.log("sounds updatw", response);
          this.currentSound = {};
        })
        .catch((error) => {
          console.log("sounds update error", error.response);
        });
    },
    destroySound: function (sound) {
      axios.delete("/sounds/" + sound.id).then((response) => {
        console.log("sounds destroy", response);
        var index = this.sounds.indexOf(sound);
        this.sounds.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>Welcome to SOUNDS</h1>
    <div>
      name:
      <input type="text" v-model="newSoundParams.name" />
      overall_rating:
      <input type="text" v-model="newSoundParams.overall_rating" />
      <button v-on:click="createSound()">Create Sound</button>
    </div>
    <!-- <h1>All Sounds</h1>
    <div v-for="sound in sounds" v-bind:key="sound.id">
      <h2>{{ sound.name }}</h2>
      <p>overall_rating: {{ sound.overall_rating }}</p>
      <button v-on:click="showSound(sound)">More info</button>
    </div>
    <dialog id="sound-details">
      <form method="dialog">
        <h1>Sound info</h1>
        <p>
          name:
          <input type="text" v-model="editSoundParams.name" />
        </p>
        <p>
          overall_rating:
          <input type="text" v-model="editSoundParams.overall_rating" />
        </p>
        <button v-on:click="updateSound(currentSound)">Update</button>
        <button v-on:click="destroySound(currentSound)">Destroy Sound</button>
        <button>Close</button>
      </form>
    </dialog> -->
  </div>
</template>

<style></style>
