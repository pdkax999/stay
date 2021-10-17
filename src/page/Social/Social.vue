<template>
  <div class="social-wrapper">
    <div class="personal-head">
      <div class="bg">
        <!-- <img src="" alt=""> -->
      </div>

      <div class="user">
        <div class="info">
          <h4 class="title">运营研究院</h4>
          <span class="mottom">不理解人，就无法理解什么是设计</span>
        </div>

        <div class="detail-user">
          <ul class="dataInfo">
            <li>
              <Icon icon="diqiu"></Icon>
              <span class="title">发布</span>
            </li>
            <li class="line">|</li>
            <li>
              <span>930</span>
              <span class="title">发布</span>
            </li>
            <li class="line">|</li>
            <li>
              <span>82</span>
              <span class="title">粉丝</span>
            </li>
            <li class="line">|</li>
            <li>
              <span>5.7K</span>
              <span class="title">关注</span>
            </li>
          </ul>
          <div class="face">
            <Icon icon="xiaolianmanyifuwu"></Icon>
          </div>
        </div>
      </div>

      <div class="avatar-wrapper">
        <div class="bg"></div>
        <!-- <img src="" alt=""> -->
      </div>
    </div>

    <Menu class="nav" showLine :guideList="menuList" pitchGuide></Menu>

    <div class="dashboard">
      <div class="leftGuide">
        <div class="wra-brief">
          <Brief></Brief>
        </div>
        <div class="wra-userList">
          <UserList></UserList>
        </div>
        <div class="wra-videos">
          <Videos></Videos>
        </div>
      </div>

      <div
        class="centerGudie"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      >
        <div class="wra-editTrends">
          <EditTrends></EditTrends>
        </div>

        <Menu :guideList="List" pitchGuide type="text" :showMenuItem="5">
        </Menu>

        <div class="newMessage-wra">
          <span>最新发布</span>
          <span class="direction">
            <Icon icon="jiantou_liebiaozhankai"></Icon>
          </span>
        </div>

        <CardMessage v-for="info in channelDataList" :info="info" :key="info.id">
        </CardMessage>

        <!--       <CardMessage>
          <div class="content-wap">
            <p>
              经过了前，接下来就需要设计师根据获得线框图，制作高保真设计稿了.动手
              前需要先浏览所有页面功能点，和开发人员沟通确认，这样可以减少交付时不必要麻烦。
            </p>
          
            <div class="prices">
              <div class="bg big"></div>
              <div class="bg big"></div>
              <div class="bg"></div>
              <div class="bg"></div>
              <div class="bg lastBg">
                <div class="mask">+22</div>
              </div>
            </div>

            <div class="btn">设计研究学院</div>
          </div>
        </CardMessage> -->

        <!-- <CardMessage>
          <div class="content-wap">
            <p>
              经过了前，接下来就需要设计师根据获得线框图，制作高保真设计稿了.动手
              前需要先浏览所有页面功能点，和开发人员沟通确认，这样可以减少交付时不必要麻烦。
            </p>
            <div class="btn">设计研究学院</div>
          </div>
        </CardMessage> -->

        <div class="loadding" v-if="busy">
          <img src="../../assets/loading-spinning-bubbles.svg" alt="" />
        </div>
      </div>

      <div class="right-gudie">
        <Recommend></Recommend>

        <Brief class="brief-wrap"></Brief>

        <Picture></Picture>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import Brief from "@/components/Brief/Brief.vue";
import UserList from "@/components/UserList/UserList.vue";
import Videos from "@/components/Videos/Videos.vue";
import EditTrends from "@/components/EditTrends/EditTrends.vue";
import CardMessage from "../test/CardMessage/CardMessage.vue";
import Recommend from "@/components/Recommend/Recommend.vue";
import Picture from "@/components/Picture/Picture.vue";
import Menu from "@/components/GuideMenu/Menu.vue";

export default {
  components: {
    Menu,
    Brief,
    UserList,
    Videos,
    EditTrends,
    CardMessage,
    Recommend,
    Picture,
  },
  data() {
    return {
      menuList: [
        "yinpin",
        "50",
        "50",
        "tupian",
        "yinpin",
        "tupian",
        "yinpin",
        "tupian",
        "yinpin",
        "yinpin",
        "yinpin",
      ],
      List: ["全部", "热门", "精华", "设计经验", "素材分析", "分析", "排行榜"],
      busy: false,
       page: 1,
      channelDataList: [],
    };
  },
 mounted() {
    this.getChannelDataList();
  },
  methods: {
    async getChannelDataList() {
      const { page } = this;

      let result = await this.$api.reqChannelDataList(page);

      this.channelDataList.push(...result.thread_list)
      this.busy=false
    },
    loadMore(){

      this.busy=true
      this.page++
     this.getChannelDataList();
    
    }
  },

};
</script>

<style lang='scss'>
.brief-wrap {
  margin-bottom: 15px;
}
@mixin FlexCenter($jcont: center) {
  display: flex;
  justify-content: $jcont;
  align-items: center;
}

.social-wrapper {
  width: 100%;
  .personal-head {
    position: relative;
    width: 100%;
    height: 430px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 15px;
    .bg {
      width: 100%;
      height: 300px;
      border-radius: 10px;
      background-color: pink;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .user {
      color: #000;
      font-size: 20px;
      height: 130px;
      // font-weight: bold;
      justify-content: space-between;
      align-items: center;
      display: flex;
      padding: 0px 32px 0px 218px;

      .info {
        .title {
          font-size: 30px;
        }
        .mottom {
          font-size: 14px;
          color: #999;
        }
      }

      .detail-user {
        display: flex;
        justify-content: space-between;

        .dataInfo {
          display: flex;

          li:not(li.line) {
            display: flex;
            flex-direction: column;
            font-weight: bold;
            .title {
              font-size: 14px;
              color: #999;
              font-weight: normal;
            }
          }

          li:first-child {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .icon {
              font-weight: bold;
              margin-top: 4px;
            }
          }
          li.line {
            margin: 6px 40px 0px 30px;
            color: #eeeeee;
          }
        }

        .face {
          width: 70px;
          height: 45px;
          margin-left: 27px;
          background-color: #2c74ea;
          color: #fff;
          border-radius: 10px;
          font-size: 30px;
          text-align: center;
          .icon {
            transform: translateY(4.5px);
          }
        }
      }
    }
  }

  .avatar-wrapper {
    position: absolute;
    bottom: 0;
    width: 145px;
    height: 145px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    bottom: 25px;
    left: 52px;
    .bg {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background-color: #ff6700;
      margin: auto;
    }
  }
  .nav {
    margin-bottom: 15px;
    background-color: #fff;
  }
}
.dashboard {
  display: flex;
  justify-content: space-between;
  .wra-userList {
    margin: 15px 0;
  }

  .wra-editTrends {
    margin-bottom: 15px;
    cursor: pointer;
  }
  // }
  .newMessage-wra {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span:first-child {
      color: #b4b3b8;
      transform: translateX(-20px);
    }
    .direction {
      font-size: 20px;
      color: #b4b3b8;
      display: flex;
      .icon {
        margin: auto;
      }
    }
  }

  .content-wap {
    .price {
      margin-top: 25px;
      .bg {
        width: 300px;
        height: 300px;
        background-color: #ff6700;
        border-radius: 10px;
      }
    }

    .btn {
      margin-top: 27px;
      width: 80px;
      height: 25px;
      font-size: 12px;
      background-color: #0052d4;
      color: #fff;
      text-align: center;
      line-height: 25px;
      border-radius: 10px;
    }

    .prices {
      width: 530px;
      height: 420px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-content: space-between;
      .bg {
        border-radius: 10px;
        width: 173px;
        height: 166px;
        background-color: #bfa;
      }
      .big {
        width: 260px;
        height: 245px;
      }

      .lastBg {
        position: relative;
        .mask {
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 166px;
          font-size: 30px;
          color: #fff;
          background-color: rgba($color: #000000, $alpha: 0.5);
        }
      }
    }
  }

  .right-gudie {
    width: 290px;
  }
 
 .loadding{
   transform: translateY(30px);
   width: 100%;
   height: 170px;
   @include FlexCenter();
   img{
     width: 100px;
     height: 100px;
   }
  }

}
</style>
