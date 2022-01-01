<template>
  <div class="games container">
    <h4>FEATURED GAMES</h4>
    <div class="games-list">
      <div class="game-item" v-for="(item, i) in games" :key="i">
        <img :src="item.thumbnailImageUrl || 'https://picsum.photos/600/300'" alt="thumbnail">
        <div class="info">
          <div class="title">
            <h3 class="overtext">{{item.name}}</h3>
            <span class="price">3.99$</span>
          </div>
          <p>#Action</p>
          <p class="descript">{{item.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quam animi, perferendis, quisquam nobis natus, dolorum suscipit nemo velit possimus perspiciatis nisi hic repellat ipsam esse sed temporibus illum cupiditate dignissimos? Unde labore earum sint autem, dignissimos maiores eaque nostrum quia necessitatibus id odit aspernatur tempora voluptatibus libero corporis aperiam eius nam? Numquam quae modi quidem consectetur iure perferendis delectus dolorum est maxime omnis quisquam id debitis nihil iste, natus quaerat? Enim illum explicabo sed deserunt repudiandae expedita impedit quis itaque a molestias, adipisci corrupti et sapiente, dolorum illo amet excepturi cumque vero consequatur."}}</p>
        </div>
      </div>
    </div>
    <button>VIEW MORE</button>
  </div>
</template>

<style lang="scss" scoped>
  .games {
    margin-bottom: 80px;
  }
  h4 {
    color: white;
  }
  p {
    color: white;
  }
  .games-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .game-item {
      img {
        width: 100%;
        height: 320px;
        border-radius: 30px;
        padding: 0;
      }
      border-radius: 30px;
      width: 400px;
      background: #6c757d;
      .overtext {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50%;
      }
      .descript {
        height: 72px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .info {
        padding: 10px;
        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .games-list {
      .game-item {
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
    .games-list {
      display: unset;
      .game-item {
        width: 100%;
        margin-bottom: 32px;
        .descript {
          -webkit-line-clamp: 1;
          height: unset;
        }
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
    .games-list .game-item .descript {
      height: unset;
      -webkit-line-clamp: 1;
    }
  }
</style>

<script>
import jamData from '../../jam'

export default {
  name: "Games",
  data() {
    return {
      games: jamData.games[0].data
    }
  },  
}
</script>