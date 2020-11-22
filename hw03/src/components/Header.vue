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
        <img src="../assets/logo.png" class="avatar" alt="Me">
        <div class="dropdown dropdown-user">
          <div class = "dropdown-item-data" id="name"></div>
          <div class = "dropdown-item-data" id="email"></div>
          <div class="dropdown-item">Home</div>
          <div class="dropdown-item">Log out</div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

</style>