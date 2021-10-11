<template>
  <!-- 关注| 圈子 -->
  <div class="UserList">
    <div class="title">
      <span>{{userInfo.title}} <span class="num">{{userInfo.message}}</span></span>
    </div>

    <div class="guides">
      <div class="item" 
      :class="{active:index==activated}" v-for="(item,index) in userInfo.menuList" :key="index"
      @click="activated=index">最近欢迎</div>
    </div>

    <div class="userList" v-if="userInfo.categoryUserList">
      <li class="user" v-for="(user,index) in userInfo.categoryUserList[activated]" :key="index">
        <div class="avatarWr">
          <Avatar></Avatar>
        </div>
        <div class="info">
          <span class="name">{{user.name}}</span>
          <span>{{user.trait}}</span>
        </div>
        <div class="iconWr">
          <div class="Wricon" :class="{[user.color]:true}">
            <Icon icon="xiaolian"></Icon>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      activated: 2,
    };
  },
  props: {
    userInfo:{
      type: Object,
      default: function () {
        
        let {categoryUser} = require('@/common/data')
        
        return categoryUser
      }
    },
  }
};
</script>

<style lang='scss'>
.UserList {
  width: 285px;
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
    cursor: pointer;
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
          color: #c2c2c2;
          border: 1px solid #EEEEEE;
          border-radius: 10px;

            &.bg1{
              color: #fff;
              background-color: #FF5B5A;
            }
            &.bg2{
              color: #fff;
              background-color: #2C74EA;
            }

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
