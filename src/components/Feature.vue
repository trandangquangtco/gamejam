<template>
  <div class="feature container">
    <h4>FEATURED JAMS</h4>
    <div class="feature-list">
      <div class="feature-item" v-for="(item, i) in featureData" :key="i">
        <img :src="item.thumbnailImageUrl" alt="thumbnail">
        <div class="info">
          <h3>{{item.name}}</h3>
          <h5 class="hosted">Hosted by {{item.hostProfiles[0].username}}</h5>
          <p style="margin-bottom: 8px">Start in {{item.startTime | formatDate}}</p>
          <div class="myprogress">
            <div class="bar" :style="{width:barWidth}"></div>
          </div>
          <span>{{item.joinedCount}} Joined</span>
          <span>{{item.submissionCount}} Submissions</span>
        </div>
      </div>
    </div>
    <button>VIEW MORE</button>
  </div>
</template>

<style lang="scss" scoped>
  p, span {
    color: white;
    margin-right: 5%;
    font-style: italic;
  }
  h4 {
    color: white;
  }
  .myprogress {
    width: 100%;
    background: #ddd;
    border-radius: 20px;
    .bar {
      height: 20px;
      border-radius: 20px;
      background: purple;
    }
  }
  .feature {
    margin-bottom: 60px;
  }
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
      background: #6c757d;
    }
  }
  @media screen and (max-width: 1300px) {
    .feature-list {
      .feature-item {
        width: 30%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 40px;
    }
    p, span {
      font-size: 32px;
    }
    .feature-list {
      display: unset;
      .feature-item {
        width: 100%;
        margin-bottom: 32px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    h3 {
      font-size: unset;
    }
    p, span {
      font-size: unset;
    }
  }
</style>

<script>
import jamData from '../../jam'
export default {
  name: "Feature",
  data() {
    return {
      feature: jamData.jams,
      width: 40,
    }
  },
  computed: {
    featureData: {
      get () {
        return this.feature.slice(0, 3)
      }
    },
    barWidth() {
      return `${this.width + 20}%`
    }
  },
  mounted() {
    console.log(this.feature)
  },
}
</script>