<template>
  <div class="home">
    <div class="top-bar">
      <h1>GAMEJAM</h1>
      <h5>Browser Game</h5>
      <h5 id="upload">UPLOAD GAME</h5>
      <h5>COMMUNITY</h5>
      <h5>SUPPORT</h5>
      <h5 id="signup">Sign Up</h5>
      <h5>Log in</h5>
    </div>
    <slide-banner />
    <feature />
    <games/>
  </div>
</template>

<style lang="scss">
.home {
  background: #1E1F35;
  height: 100%;
}
.top-bar {
  h1, h5 {
    color: white;
    margin-right: 24px;
    margin-left: 20px;
  }
  display: flex;
  align-items: center;
  #upload {
    margin-left: 120px; 
  }
  #signup {
    margin-left: 320px;
  }
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SlideBanner from '@/components/SlideBanner.vue'
import Feature from '@/components/Feature.vue'
import Games from '../components/Games.vue'

export default {
  name: 'Home',
  components: {
    SlideBanner,
    Feature,
    Games,
  }
}
</script>
