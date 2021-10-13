<template>
  <div class="CardMessage">
    <div class="ranking" v-if="tag"><Icon icon="jiangbei"></Icon> 最受欢迎</div>
    <header>
      <div class="userinfo">
        <div class="card-avatar">
          <Avatar></Avatar>
        </div>
        <div class="info">
          <span>前端工程师 <Icon icon="vip"></Icon></span>
          <span>17小时前 * 产品经理</span>
        </div>
      </div>
      <Icon icon="gengduosangedian"></Icon>
    </header>
    <div class="body">
      <slot></slot>
    </div>
    <footer>
      <div class="read">
        <div class="like">
          <Icon icon="dianzan"></Icon>
          <span>22</span>
        </div>
        <div class="comment-info">
          <span>12条评论</span> <span class="browse">199浏览</span>
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
export default {
  props:{
    tag:{
      type:Boolean,
      default:false
    }
  }
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
  .ranking{
    width: 120px;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    position: absolute;
    left: 345px;
    top: -12px;
    z-index: 10;
    box-shadow: 5px 5px 100px  rgba(0, 0, 0, .1);
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: #fff;
     .icon{
       font-size: 20px;
       margin-right: 12px;
       transform: translateY(-1px);
     }
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
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

      .comment-info{
        span:first-child{
          margin-right: 35px;
        }
      }
    }
  }

  .tips{
    display: flex;
    height: 64px;
    &>div{
      width: 33.3%;
      display: flex;
      height: 64px;
      justify-content: center;
      align-items: center;
      color: #999;
      font-size: 15px;

      .icon{
        font-size: 30px;
        margin-right: 10px;
      }
    }
  }

  .body{
    padding-bottom: 30px;
  }
}
</style>
