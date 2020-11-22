

<template>
  <div>
    <Header></Header>
    <div class="post">
      <div class="hello">
          <div v-for='post in posts' :key='post.id'>
            <div class="post-author">
                    <span class="post-author-info">
                      <img v-bind:src="post.author.avatar" alt="Post author">
                      <small>{{post.author.firstname}} {{post.author.lastname}}</small>
                    </span>
              <small>{{post.createTime}}</small>
            </div>
            <div v-if="post.media !== null">
              <div v-if="post.media.type === 'image'">
                <div class="post-image">
                  <img v-bind:src="post.media.url" alt="">
                </div>
              </div>
              <div v-if="post.media.type === 'video'">
                <div class="post-video">
                  <video width="320" height="240" controls>
                    <source v-bind:src="post.media.url" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div class="post-title">
              {{post.text}}
            </div>
            <div class="post-actions">
              <button v-bind:class="{'liked': !clicked, 'liked': clicked}" @click="clicked = !clicked" type="button" name="like" class="like-button">{{post.likes}}</button>
            </div>

          </div>
      </div>
    </div>
  </div>

</template>

<script>
import Header from "./Header";
export default {
  name: 'Index',
  components: {
    'Header':Header,
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  data: {

    clicked: false
  }
  mounted() {
    this.$store.dispatch("getPosts");
  }
}
</script>

