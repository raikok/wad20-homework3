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
          <img src="../assets/logo.png" class="avatar" alt="Me" v-on:click="toggleDropdown">
          <div class="drop-down-container" ref="container">
            <div class = "dropdown-item-data" id="name">{{login.firstname}} {{login.lastname}}</div>
            <div class = "dropdown-item-data" id="email">{{login.email}}</div>
            <div @click="moveToIndex" class="dropdown-item">Home</div>
            <div @click="moveToBrowse" class="dropdown-item">Profiles</div>
            <div @click="moveToLogin" class="dropdown-item">Log out</div>
          </div>
        </div>
    </nav>
  </header>
</template>

<script>
import router from "@/router";

export default {
  name: "Header",
  methods: {
    moveToIndex: function() {
      router.push('/')
    },
    moveToLogin: function () {
      router.push('/login')
    },
    moveToBrowse: function() {
      router.push('/browse')
    },
    toggleDropdown : function() {
      let dropdown = this.$refs.container
      if (dropdown.style.display === "none") dropdown.style.display = "block";
      else dropdown.style.display = "none";
    }
  },
  computed: {
    login() {
      return this.$store.state.login
    }
  },
  mounted() {
    this.$store.dispatch("getLogin");
  },

}
</script>

<style scoped>

</style>