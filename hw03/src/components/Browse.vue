<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="../assets/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img class="avatar">
        <div class="drop-down-container">
          <span id="user-name">John Doe</span>
          <span id="user-email"></span>
          <span class="separator"></span>
          <span>
              <a v-on:click="moveToIndex()">Home</a>
            </span>
          <span class="separator"></span>
          <span>
              <a v-on:click="moveToLogin()">Log Out</a>
            </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import router from "@/router";

export default {
  name: "Browse",
  methods: {
    moveToLogin: function () {
      router.push('/login')
    },
    moveToIndex: function() {
      router.push('/')
    }
  },
}
</script>

<style scoped>

</style>