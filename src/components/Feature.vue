<template>
  <div class="feature container">
    <h4>FEATURED JAMS</h4>
    <div class="feature-list">
      <div class="feature-item" v-for="(item, i) in featureData" :key="i">
        <img :src="item.thumbnailImageUrl" alt="thumbnail">
        <div class="info">
          <h3>{{item.name}}</h3>
          <p class="hosted">Hosted by {{item.hostProfiles[0].username}}</p>
          <p>Start in {{item.startTime}}</p>
          <progress id="file" value="32" max="100"> 32% </progress>
          <br/>
          <span>{{item.joinedCount}} Joined</span>
          <span>{{item.submissionCount}} Submissions</span>
        </div>
      </div>
    </div>
    <button>VIEW MORE</button>
  </div>
</template>

<style lang="scss">
  .feature-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .feature-item {
      img {
        width: 100%;
        border-radius: 30px;
        padding: 0;
      }
      .hosted {
        color: purple;
      }
      .info {
        padding: 10px;
      }
      border-radius: 30px;
      width: 400px;
      height: 380px;
      background: #6c757d;
    }
  }
  button {
    float: right;
    margin-top: 20px;
    background: none;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
  }
</style>

<script>
import jamData from '../../jam'
export default {
  name: "Feature",
  data() {
    return {
      feature: jamData.jams
    }
  },
  computed: {
    featureData: {
      get () {
        return this.feature.slice(0, 3)
      }
    }
  },
  mounted() {
    console.log(this.feature)
  },
}
</script>