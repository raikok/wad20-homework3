<template>
  <section class="login-page">
    <section id="login-container">
      <div>
        <h1>Welcome to postIt!</h1>
      </div>
      <div>
        <h4>
          <a href="#">Create an Account</a>
        </h4>
      </div>
      <div>
        <h4>Or</h4>
      </div>
      <div>
        <h3>Please Log In</h3>
        <form action="index.html" method="post">
          <div>
            <input v-model="capitalize" type="text" name="email" placeholder="Email">
          </div>
          <div>
            <input type="password" name="password" placeholder="Password">
          </div>
          <div>
            <button v-on:click="moveToIndex()" class="button" type="submit" name="login">Log In</button>
          </div>
          <div>
            <small>
              <a href="#">Forgot password?</a>
            </small>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import router from "../router"
import capitalize from "../filter.js"

export default {
  name: "Login",
  methods: {
    moveToIndex: function () {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>