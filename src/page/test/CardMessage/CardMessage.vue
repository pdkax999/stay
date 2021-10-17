<template>
  <div class="CardMessage" v-if="info.user">
    <div class="ranking" v-if="tag"><Icon icon="jiangbei"></Icon> 最受欢迎</div>
    <header>
      <div class="userinfo">
        <div class="card-avatar">
          <Avatars :url="info.user.avatar"></Avatars>
        </div>
        <div class="info">
          <span>{{ info.user.nickname }}<Icon icon="vip"></Icon></span>
          <span>{{ info.create_time }}</span>
        </div>
      </div>
      <Icon icon="gengduosangedian"></Icon>
    </header>

    <div class="body">
      <h3 class="title" v-if="info.title">{{ info.title }}</h3>
      <p
        v-for="(text, i) in info.summary
          .split('\n')
          .filter((text) => text.trim())"
        :key="i"
      >
        {{ text }}
      </p>

      <div class="soleImg" v-if="info.cover">
        <img :src="info.cover" alt="图片" />
      </div>
      
      <div
        class="picture"
        v-else-if="info.image_pc_much.length > 0"
      >
        <div class="img-item" v-for="(img, i) in info.image_pc_much.slice(0,3)" :key="i">
          <img :src="img.image" alt="帖子图片" />
        </div>
      </div>
      
    </div>

    <footer>
      <div class="read">
        <div class="like">
          <Icon icon="dianzan"></Icon>
          <span>22</span>
        </div>
        <div class="comment-info">
          <span>{{ info.reply_count }}条评论</span
          ><span class="browse">{{ info.view_count }}浏览</span>
        </div>
      </div>
      <div class="tips">
        <div class="like">
          <Icon icon="dianzan"></Icon>
          <span class="name">点赞</span>
        </div>
        <div class="common">
          <Icon icon="pinglun"></Icon>
          <span class="name">评论</span>
        </div>
        <div class="share">
          <Icon icon="fenxiang"></Icon>
          <span class="name">分享</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
import Avatars from "../Avatar/Avatar.vue";
export default {
  props: {
    tag: {
      type: Boolean,
      default: false,
    },
    info:{
      type:Object,
       default: function () {
        return { }
      }
    }
  },
  mounted() {
    
    console.log(this.info);
    
  },
  components: {
    Avatars,
  },
};
</script>

<style lang='scss'>
.CardMessage {
  background-color: #fff;
  padding: 21px 28px 0px 28px;
  color: #000;
  width: 580px;
  margin-bottom: 15px;
  border-radius: 10px;
  position: relative;
  .card-avatar {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
  // 最受欢迎
  .ranking {
    width: 120px;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    position: absolute;
    left: 345px;
    top: -12px;
    z-index: 10;
    box-shadow: 5px 5px 100px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    .icon {
      font-size: 20px;
      margin-right: 12px;
      transform: translateY(-1px);
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .icon {
      font-size: 30px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    line-height: 1;
    justify-content: center;
    span:first-child {
      position: relative;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: bold;
    }
    span:last-child {
      color: #999;
    }
    .icon {
      position: absolute;
      font-size: 30px;
      color: #0052d4;
      transform: translateY(-8px);
    }
  }

  .userinfo {
    display: flex;
  }

  .body {
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: .8em;
      
    }
    p {
        font-size: 18px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }

    .picture {
      height: 160px;
      display: flex;
      // justify-content: space-between;
      .img-item {
        height: 100%;
        width: calc(calc(100% - 10px) / 3);
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
        }

        &:not(:last-child){
          margin-right: 5px;
        }

      }
    }

    .soleImg {
      width: 300px;
      height: 300px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }

    


  }
  footer {
    height: 119px;
    .read {
      display: flex;
      height: 55px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1.5px solid #eee;
      border-top: 1.5px solid #eee;
      .like {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          font-size: 30px;
          color: #fff;
          background-color: #22d1e2;
          border-radius: 50%;
          margin-right: 10px;
        }
      }

      .comment-info {
        span:first-child {
          margin-right: 35px;
        }
      }
    }
  }

  .tips {
    display: flex;
    height: 64px;
    & > div {
      width: 33.3%;
      display: flex;
      height: 64px;
      justify-content: center;
      align-items: center;
      color: #999;
      font-size: 15px;

      .icon {
        font-size: 30px;
        margin-right: 10px;
      }
    }
  }

  .body {
    padding-bottom: 30px;
  }
}
</style>
