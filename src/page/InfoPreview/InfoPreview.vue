<template>
  <div class="infoPreview-wrap">
    <header class="overview"></header>
    <div class="userData-wrap">
      <div class="info">
        <span>小番茄的</span>
        <h4>数据概览</h4>
      </div>
    </div>
    <div class="lastMonthInfo">
      <CardInfo
        v-for="item in lastMonths"
        v-bind="item"
        :key="item.id"
      ></CardInfo>
    </div>
    <div class="dashboard">
      <div class="account-info">
        <Myinfo></Myinfo>
      </div>
      <div class="right">
        <div class="menuNav">
   <Menu  :guideList="List"  :showMenuItem="7"  type="text"  showLine></Menu>

        </div>

        <div class="home-wrap">
          <div class="homeState">
            <h4 class="h-title">主页动态</h4>
            <UserMode v-for="item in 5" :key="item"></UserMode>
          </div>

          <div class="watch">
            <div class="itemCard" v-for="item in 2" :key="item">
              <div class="info">
                <span class="num">33</span>
               <span class="linkes">获赞数 <span class="today">今天</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="RankingList">
      <RankingCard v-for="item in 4" :key="item"></RankingCard>
    </div>
    
    <div class="myDetail">
      <CardMessage>
           <div class="content-wap">

               <p>经过了前，接下来就需要设计师根据获得线框图，制作高保真设计稿了.动手 前需要先浏览所有页面功能点，和开发人员沟通确认，这样可以减少交付时不必要麻烦。</p>
                <!-- 多个图片 -->
                <div class="prices">
                  <div class="bg big"></div>
                  <div class="bg big"></div>
                  <div class="bg"></div>
                  <div class="bg"></div>
                  <div class="bg lastBg">
                    <!-- <div class="mask">
                      +22
                    </div> -->
                  </div>
                </div>

                <div class="btn">设计研究学院</div>
             </div> 
      </CardMessage>
       <div class="homeState">
         <h4 class="h-title">我的动态</h4>
            <UserMode v-for="item in 10" :key="item"></UserMode>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CardInfo from "@/components/CardInfo/CardInfo.vue";
import Myinfo from "@/components/Myinfo/Myinfo.vue";
import Menu from "@/components/GuideMenu/Menu.vue";
import UserMode from "@/components/UserMode/UserMode.vue";
import RankingCard from "@/components/RankingCard/RankingCard.vue";
import CardMessage from "@/components/CardMessage/CardMessage.vue";
export default {
  components: {
    CardInfo,
    Myinfo,
    UserMode,
    RankingCard,
    CardMessage,
    Menu
  },
  data() {
    return {
      lastMonths: [
        {
          id: 1,
          icon: "zengjia",
          title: "新增发布",
          percent: "0.3%",
          total: 87.366,
        },
        {
          id: 2,
          icon: "zengjia",
          title: "新增发布",
          percent: "0.3%",
          total: 87.366,
        },
        {
          id: 3,
          icon: "zengjia",
          title: "新增发布",
          percent: "0.3%",
          total: 87.366,
        },
        {
          id: 4,
          icon: "zengjia",
          title: "新增发布",
          percent: "0.3%",
          total: 87.366,
        },
      ],
         List: [
        {
          count: "930",
          title: "发布",
          id: 1,
        },
        {
          count: "82",
          title: "浏览",
          id: 2,
        },
        {
          count: "5.7k",
          title: "粉丝",
          id: 3,
        },
        {
          count: "13",
          title: "关注",
          id: 4,
        },
        {
          count: "74",
          title: "照片",
          id: 5,
        },
        {
          count: "10.6K",
          title: "获赞",
          id: 6,
        },
        {
          count: "8.4K",
          title: "收到评论",
          id: 7,
        },
        {
          count: "34",
          title: "人生",
          id: 8,
        },

        {
          count: "24",
          title: "如戏",
          id: 9,
        },
        {
          count: "29",
          title: "种树",
          id: 10,
        },
        {
          count: "67",
          title: "不付此生",
          id: 11,
        },
      ],
    };
  },
};
</script>

<style lang='scss'>
.infoPreview-wrap {
  .overview {
    width: 100%;
    background-color: pink;
    height: 162px;
    border-radius: 10px;
  }

  .userData-wrap {
    height: 135px;
    padding: 60px 0px 25px 0px;
    color: #000;
    .info {
      span {
        color: #b5b5b5;
      }

      h4 {
        font-size: 25px;
      }
    }
  }
  .lastMonthInfo {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }

  .right {
    width: 885px;
  }

  .dashboard {
    display: flex;
    justify-content: space-between;
     margin-bottom: 15px;
    .menuNav {
      margin-bottom: 15px;
    }
  }

  .homeState {
    width: 585px;
    // height: 435px;
    border-radius: 10px;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    overflow: hidden;
    padding-left: 20px;
    padding-right: 25px;
    .h-title {
      margin-top: 20px;
      margin-bottom: 35px;
    }
  }
  

  .watch {
    width: 287px;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    overflow: hidden;
    .itemCard {
      width: 100%;
      height: 214px;
      background-color: pink;
       border-radius: 10px;
      .info{
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        text-align: center;

        .num{
          font-weight: bold;
          font-size: 33px;
          color: #000;
        }

        .linkes{
            display: flex;
        flex-direction: column;

         .today{
           font-size: 12px;
           color: #999;
         }
        }
      }
    }
  }

  .home-wrap {
    display: flex;
    height: 445px;
    justify-content: space-between;
  }

  .RankingList{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    
  }
}

 .content-wap{
    .prices
    {
      margin-top: 25px;

      .bg{
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

    .prices{
      width: 530px;
      height: 420px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-content: space-between;
      .bg{
        border-radius: 10px;
        width: 173px;
        height: 166px;
        background-color: #bfa;
      }
      .big{
        width: 260px;
        height: 245px;
      }

      .lastBg{
        position: relative;
        .mask{
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 166px;
          font-size: 30px;
          color: #fff;
          background-color: rgba($color: #000000, $alpha: .5);
        }
      }
    }
  }

  .myDetail{
    display: flex;
    justify-content: space-between;
  }

   .homeState{
    width: 585px;
    // height: 435px;
    border-radius: 10px;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    // overflow: hidden;
    padding-left: 20px;
    padding-right: 25px;
    .h-title {
      margin-top: 20px;
      margin-bottom: 35px;
    }
  }
</style>
