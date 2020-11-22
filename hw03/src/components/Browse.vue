
<template>
  <div>
    <Header></Header>
    <div class ="inter">
      <div class="post">
        <div class="hello">
          <div v-for='profile in profiles' :key='profile.id'>
            <div class="profile">
              <div class="profile-avatar">
                <img v-bind:src="profile.avatar" alt="Profile picture">
              </div>
              <div class="profile-name">
                <p>{{profile.firstname}} {{profile.lastname}}</p>
              </div>
              <div class="button">
                <button v-bind:class="clicked ? 'blue' : 'white'" @click="clicked = !clicked" type="button" name="Follow" class="follow-button">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Header from "./Header";

export default {
  data: function () {
    return {
      clicked: true
    }
  },
  computed: {
    profiles() {
      return this.$store.state.profiles
    }
  },
  mounted() {
    this.$store.dispatch("getProfiles");
  },
  name: "Browse",
  components: {
    'Header':Header,
  }
}
</script>

<style>

.blue {
  background-color: purple;
}
.white {
  background-color: #01579b;
}


</style>