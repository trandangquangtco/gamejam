<template>
  <div class="slide-banner">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="detail">
            <img :src="banner.thumbnailImageUrl" alt="banner">
            <div class="content">
              <div id="content">
                <h1>THE FIRST GAMEJAM</h1>
                <p id="hosted">Hosted by GameJam</p>
                <p>Starts in</p>
                <div class="clock">
                  <div class="days">
                    <p>00</p>
                    <p>days</p>
                  </div>
                  <div class="hours">
                    <p>00</p>
                    <p>hours</p>
                  </div>
                  <div class="minutes">
                    <p>00</p>
                    <p>minutes</p>
                  </div>
                  <div class="joined">
                    <p>{{banner.joinedCount}}</p>
                    <p>Joined</p>
                  </div>
                  <div class="submissions">
                    <p>{{banner.submissionCount}}</p>
                    <p>Submissions</p>
                  </div>
                </div>
                <div class="join-now"><button>JOIN NOW</button></div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="detail">
            <img :src="banner.thumbnailImageUrl" alt="banner">
            <div class="content">
              <div id="content">
                <h1>THE FIRST GAMEJAM</h1>
                <p id="hosted">Hosted by GameJam</p>
                <p>Starts in</p>
                <div class="clock">
                  <div class="days">
                    <p>00</p>
                    <p>days</p>
                  </div>
                  <div class="hours">
                    <p>00</p>
                    <p>hours</p>
                  </div>
                  <div class="minutes">
                    <p>00</p>
                    <p>minutes</p>
                  </div>
                  <div class="joined">
                    <p>{{banner.joinedCount}}</p>
                    <p>Joined</p>
                  </div>
                  <div class="submissions">
                    <p>{{banner.submissionCount}}</p>
                    <p>Submissions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .slide-banner {
    width: 100%;
    height: 400px;
    margin-bottom: 40px;
    #hosted {
      color: purple;
    }
    .carousel {
      .detail {
        display: flex;
        justify-content: center;
        img {
          width: 50%;
          height: 400px;
        }
      }
    }
    .content {
      width: 50%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      background: gray;
      .clock {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .join-now {
        text-align: center;
      }
      button {
        margin: 0 auto;
        float: unset;
        background: purple;
      }
    }
  }
</style>

<script>
import jamData from '../../jam'

export default {
  name: "SlideBanner",
  data() {
    return {
      banner: jamData.bigFeaturedJam
    }
  },  
}
</script>