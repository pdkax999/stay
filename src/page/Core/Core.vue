<template>
  <div class="core-container">
    <div class="head"></div>
    <div class="dashboard">
      <div class="left">
        <div class="focusWr">
          <UserList :type="true"></UserList>
        </div>
      </div>

      <div class="cardCenter">
        <div class="edit">
          <EditTrends></EditTrends>
        </div>
        <TrendGuide></TrendGuide>
        <CardMessage>
          <div class="content-wap">
            <p>
              经过了前，接下来就需要设计师根据获得线框图，制作高保真设计稿了.动手
              前需要先浏览所有页面功能点，和开发人员沟通确认，这样可以减少交付时不必要麻烦。
            </p>

            <div class="price">
              <div class="bg"></div>
            </div>

            <div class="btn">设计研究学院</div>
          </div>
        </CardMessage>
        <CardMessage>
          <div class="content-wap">
            <p>
              经过了前，接下来就需要设计师根据获得线框图，制作高保真设计稿了.动手
              前需要先浏览所有页面功能点，和开发人员沟通确认，这样可以减少交付时不必要麻烦。
            </p>
            <!-- 多个图片 -->
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
        </CardMessage>
        <CardMessage>
          <div class="content-wap">
            <p>
              经过了前，接下来就需要设计师根据获得线框图，制作高保真设计稿了.动手
              前需要先浏览所有页面功能点，和开发人员沟通确认，这样可以减少交付时不必要麻烦。
            </p>
            <div class="btn">设计研究学院</div>
          </div>
        </CardMessage>
        <CardMessage>
          <div class="content-wap">
            <!-- <img src="" alt=""> -->
            <div class="big-bg-wrap">
              <!-- <img src="" alt=""> -->
              <div class="big-bg"></div>
              <div class="article">
                <h4>
                  教你避雷!网页设计中常见的17个UI设计错误集锦(附赠设计技巧)
                </h4>
                <p>
                  就像开发一样，规划网站的设计也需要一个适当的策略，您需要UX架构师的帮助。拥有-名优秀的信息架构师将为您提供良好的设计策略。
                  助.. 以下这些设计思维你有吗？有的话是时候改变了！<br/>
                   1.不涉及客户<br/>
                  目前，DevOps和敏捷方法非常受欢迎。从设计到开发,每个步骤都要让客户参
                  目前，DevOps和敏捷方法非常受欢迎。从设计到开发，每个步骤都要让客户参
                  与其中,以便他们可以在遵循最佳UI实践的同时检查应用程序,以及他们的UX<br/>
                  2.不理解要求<br/>
                  设计人员通常在没有完全通过需求规范的情况下开始工作。根据最佳UI实践，
                  设计人员通常在没有完全通过需求规范的情况下开始工作.根据最佳UI实践
                  这根本不是一个好的工作方法。即使在开发了功能齐全的站点之后，这样做也
                  这根本不是一个好的工作方法.即使在开发了功能齐全的站点之后，这样做也
                  可能导致完全或部分返工。
                </p>
                <span class="ar-tips">点击查看全文</span>
              </div>
              
            </div>
            <div class="btn">设计研究学院</div>
          </div>
        </CardMessage>
      </div>
       <div class="right-gudie">
        <div class="stat-wra">

        </div>
        <UserList :type="true"></UserList>
        
       </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import UserList from "@/components/UserList/UserList.vue";
import EditTrends from "@/components/EditTrends/EditTrends.vue";
import TrendGuide from "@/components/TrendGuide/TrendGuide.vue";
import CardMessage from "@/components/CardMessage/CardMessage.vue";
export default {
  components: {
    UserList,
    EditTrends,
    TrendGuide,
    CardMessage,
  },
};
</script>

<style lang='scss'>
.core-container {
  width: 100%;
  .head {
    height: 162px;
    border-radius: 10px;
    background-color: pink;
    margin-bottom: 30px;
  }
  .dashboard {
    display: flex;
    justify-content: space-between;
  }
}

.cardCenter {
  .edit {
    margin-bottom: 15px;
  }
}

.content-wap {
  position: relative;
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
  .big-bg-wrap {
    height: 640px;
  }
  .big-bg {
    position: relative;
    width: 580px;
    height: 320px;
    background-color: pink;
    transform: translateX(-30px);
  }
  // 文章
  .article {
    width: 100%;
    position: relative;
    // height: 320px;
    padding: 30px 30px 60px 30px;
   
    border-radius: 10px;
    background-color: #bfa;
    transform: translateY(-140px);
    h4 {
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 28px;
    }
    .ar-tips{
      position: absolute;
      bottom: 30px;
      color: #0052D4;
    }
  }

}

  .stat-wra{
    width: 100%;
    height: 220px;
    background-color: pink;
    border-radius: 10px;
    margin-bottom: 15px;
  }
</style>
