<template>
  <nav class="navbar navbar-light" style="background-color: #9370db">
    <div>
      <a class="navbar-brand" href="#">sleep ASMR</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/sounds">Our sounds</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!loggedOut" href="/playlists">My playlist</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="loggedOut" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!loggedOut" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/sounds">Our sounds</router-link>
      |
      <router-link v-if="!loggedOut" to="/playlists">My playlist</router-link>
      |
      <router-link v-if="loggedOut" to="/users/new">New user</router-link>
      |
      <router-link v-if="loggedOut" to="/login">Login</router-link>
      |
      <router-link v-if="!loggedOut" to="/logout">Logout</router-link>
    </div> -->
  <router-view />
  <!-- </div> -->
</template>

<script>
export default {
  data: function () {
    return {
      loggedOut: true,
    };
  },
  watch: {
    $route: function () {
      this.loggedOut = !localStorage.jwt;
      console.log(this.loggedOut);
    },
  },
};
</script>

<style>
body {
  background-image: url("https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  font-family: "Karla", sans-serif;
}
</style>
