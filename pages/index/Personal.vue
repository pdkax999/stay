<template>
  <div class="personal-container">
    <!-- 背景头像 -->
    <div class="personal-head">
      <div class="bg">
        <!-- <img src="" alt=""> -->
      </div>
      <div class="user">
        <div class="avatar-wrapper">
          <Avatar></Avatar>
        </div>
      </div>
    </div>

    <div class="detail-user">
      <ul class="dataInfo">
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
      <div class="userName">
        <div class="name">
          <span>想天剪辑师</span>
          <span class="vip-icon"><Icon icon="vip"></Icon></span>
        </div>
        <div class="mottom">爱剪辑爱生活</div>
      </div>
    </div>

    <div class="nav-wrapper">
      <GuideNav></GuideNav>
    </div>

    <div class="dashboard">

      <div class="left">
        <Brief></Brief>
        <div class="focus-wrp">
          <UserList :type="true"></UserList>
        </div>

        <div class="videos">
          <Videos></Videos>
        </div>
      </div>

      <div class="cardCenter">
        <div class="edit">
          <EditTrends></EditTrends>
        </div>
        <CardMessage>
          <div>
            <p>
              经过了前期需求分析,接下来就需要设计师根据获得线框图，制作高保真设计稿了。动手
              经过了前期需求分析，接下来就需要设计师根据获得线框图，制作高保真设计稿。
            </p>

            <div class="btn">设计研究学院</div>
          </div>
        </CardMessage>
        <CardMessage>
          <div>
            <p>
              经过了前期需求分析,接下来就需要设计师根据获得线框图，制作高保真设计稿了。动手
              经过了前期需求分析，接下来就需要设计师根据获得线框图，制作高保真设计稿。
            </p>

            <div class="priceS">
              <div class="bg"></div>
              <div class="bg"></div>
              <div class="bg"></div>
            </div>

            <div class="btn">设计研究学院</div>
          </div>
        </CardMessage>
        <CardMessage>
          <div>
            <h4 class="title">
              <span>精</span>
              <span>精</span> 不精教你避雷!网页设计中常见的17个UI设计错误集锦
            </h4>
            <p>
              就像开发一样,规划网站的设计也需要一个适当的策略,您需要UX架构师的帮<br />
              助.拥有一名优秀的信息架构师将为您提供良好的设计策略.<br />
              以下这些设计思维你有吗？有的话是时候改变了！
            </p>

            <div class="video">
              <div class="bg"></div>
              <div class="iconWr">
                <Icon icon="bofang"></Icon>
              </div>
            </div>

            <div class="btn">设计研究学院</div>
          </div>
        </CardMessage>
      </div>

      <div class="right-container">
        <div class="wr-price">
          <Picture></Picture>
        </div>
          <UserList :type="false"></UserList>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import GuideNav from "@/components/GuideNav/GuideNav.vue";
import Brief from "@/components/Brief/Brief.vue";
import UserList from "@/components/UserList/UserList.vue";
import Videos from "@/components/Videos/Videos.vue";
import EditTrends from "@/components/EditTrends/EditTrends.vue";
import CardMessage from "@/components/CardMessage/CardMessage.vue";
import Picture from "@/components/Picture/Picture.vue";
export default {
  components: {
    GuideNav,
    Brief,
    UserList,
    Videos,
    EditTrends,
    CardMessage,
    Picture
  },
};
</script>

<style lang='scss'>
@mixin leCenterP {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
@mixin PoCenter{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}


.personal-container {
  width: 100%;
  .personal-head {
    position: relative;

    .bg {
      width: 100%;
      height: 300px;
      border-radius: 10px;
      background-color: pink;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .user {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      position: absolute;
      z-index: 10;
      bottom: -44px;
      left: 50%;
      transform: translateX(-50%);
    }

    .avatar-wrapper {
      width: 140px;
      height: 140px;
      margin: auto;
    }
  }
}

.detail-user {
  width: 100%;
  height: 130px;
  border-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
  padding-left: 24px;
  color: #000;
  font-size: 20px;
  display: flex;
  align-items: center;
  position: relative;
  .dataInfo {
    width: 336px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > span:first-child {
        font-weight: bold;
      }
      span:last-child {
        font-size: 12px;
        color: #989898;
      }
    }

    .line {
      margin: 0 32px;
      color: #eeeeee;
    }
  }

  .vip-icon {
    font-size: 40px;
    color: #0052d4;
  }

  .userName {
    line-height: 1;
    @include leCenterP();
    text-align: center;
    .name {
      display: flex;
      align-items: center;
      font-weight: bold;

      span.vip-icon {
        .icon {
          margin-top: 6px;
        }
      }
    }
    .mottom {
      font-size: 12px;
      color: #989898;
    }
  }
}

.nav-wrapper {
  margin: 18px 0;
}

.dashboard {
  display: flex;
  justify-content: space-between;
  .focus-wrp{
    margin-top: 15px;
  }
}

.videos {
  margin-top: 17px;
}
// 中间内容
.cardCenter {
  // margin-left: 15px;

  .edit {
    margin-bottom: 15px;
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

  // 帖子组件样式
  .priceS {
    margin-top: 30px;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: space-between;
    .bg {
      width: 173px;
      height: 160px;
      border-radius: 10px;
      background-color: pink;
    }
  }
  .title {
    margin-bottom: 30px;
    font-size: 18px;
    span {
      display: inline-block;
      color: #fff;
      background-color: pink;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      text-align: center;
      line-height: 25px;
    }
  }

  .video {
    width: 100%;
    height: 300px;
    background-color: pink;
    margin-top: 30px;
    border-radius: 10px;
    position: relative;

    .iconWr{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #42EFFF;
         @include leCenterP();
        top: 50%;
        transform: translate(-50%,-50%);
     
        .icon{
         @include PoCenter();
         font-size: 45px;
        }
      }
  }
}

.right-container{

  .wr-price{
    margin-bottom: 15px;
  }
}

</style>
