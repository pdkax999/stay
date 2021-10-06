<template>
  <!-- 关注| 圈子 -->
  <div class="UserList">
    <div class="title">
      <span v-if="type">关注 <span class="num">99</span></span>
      <span v-else>圈子</span>
    </div>

    <div class="guides">
      <div class="item"  v-if="type">最近加入</div>
      <div class="item" v-else>最近创建</div>
      <div class="item active">最近欢迎</div>
      <div class="item">最近活跃</div>
    </div>

    <div class="userList">
      <li class="user">
        <div class="avatarWr">
          <Avatar></Avatar>
        </div>
        <div class="info">
          <span class="name">派大星</span>
          <span>产品经理</span>
        </div>
        <div class="iconWr">
          <div class="Wricon">
            <Icon icon="xiaolianmanyifuwu"></Icon>
          </div>
        </div>
      </li>
      <li class="user">
        <div class="avatarWr">
          <Avatar></Avatar>
        </div>
        <div class="info">
          <span class="name">派大星</span>
          <span>产品经理</span>
        </div>
        <div class="iconWr">
          <div class="Wricon">
            <Icon icon="xiaolianmanyifuwu"></Icon>
          </div>
        </div>
      </li>
      <li class="user">
        <div class="avatarWr">
          <Avatar></Avatar>
        </div>
        <div class="info">
          <span class="name">派大星</span>
          <span>产品经理</span>
        </div>
        <div class="iconWr">
          <div class="Wricon">
            <Icon icon="xiaolianmanyifuwu"></Icon>
          </div>
        </div>
      </li>
      <li class="user">
        <div class="avatarWr">
          <Avatar></Avatar>
        </div>
        <div class="info">
          <span class="name">派大星</span>
          <span>产品经理</span>
        </div>
        <div class="iconWr">
          <div class="Wricon">
            <Icon icon="xiaolianmanyifuwu"></Icon>
          </div>
        </div>
      </li>
      <li class="user">
        <div class="avatarWr">
          <Avatar></Avatar>
        </div>
        <div class="info">
          <span class="name"
            >派大星
            <span class="vip">
              <Icon icon="vip"></Icon>
            </span>
          </span>
          <span>产品经理</span>
        </div>
        <div class="iconWr">
          <div class="Wricon">
            <Icon icon="xiaolianmanyifuwu"></Icon>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    type: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang='scss'>
.UserList {
  width: 285px;
  // height: 466px;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 27px;
  color: #000;
  overflow: hidden;

  .title {
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 32px;
    .num {
      color: #4070c4;
    }
  }

  // 导航
  .guides {
    display: flex;
    color: #b8b8b8;
    justify-content: space-between;

    .active {
      color: #000;
      border-bottom: 3px solid #4070c4;
    }
  }

  // 用户列表
  .userList {
    margin-top: 27px;
    li.user {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .avatarWr {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 12px;
        color: #999;

        .name {
          font-size: 14px;
          color: #000;
          position: relative;
          //  display: flex;
          .vip {
            font-size: 30px;
            position: absolute;
            color: #4070c4;
            top: -5px;
            transform: translateX(5px);
          }
        }
      }

      .iconWr {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        .Wricon {
          width: 45px;
          height: 45px;
          font-size: 30px;
          display: flex;
          //  justify-content: center;
          //  align-items: center;
          color: #c2c2c2;
          border: 1px solid #999;
          border-radius: 10px;

          .icon {
            margin: auto;
            transform: translate(1px, -1px);
          }
        }
      }
    }
  }
}
</style>
