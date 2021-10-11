<template>
  <div class="menuNav-wrap">
    <div class="go left" @click="showLeft" :class="{active:current>0}">
      <Icon icon="left"></Icon>
    </div>
    <div class="container">
      <ul class="guides" :style="{ left: left }">
        <li v-for="menu in menuList" :key="menu.id">
          <span>{{ menu.count }}</span>
          <span>{{ menu.title }}</span>
        </li>
      </ul>
    </div>
    <div class="go rights" @click="showRight" :class="{active: menuList.length - 7>current}">
      <Icon icon="right"></Icon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      menuList: [
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
      current: 0,
    };
  },
  computed: {
    left() {
      const { current } = this;
      let result = current * (-100 / 7);
      return result + "%";
    },
    // 是否高亮显示left
  },
  methods: {
    showRight() {
      const { current, menuList } = this;
      // 最大移动多少
      let maxLeft = menuList.length - 7;
      if (current < maxLeft) {
        this.current++;
      }
      return false
    },
    showLeft() {
    const { current} = this;

      if(current>0){
         this.current--;
      }

     return false
    }
  },
};
</script>

<style lang='scss'>
.menuNav-wrap {
  width: 100%;
  height: 104px;
  border-radius: 10px;
  background-color: #fff;
  font-size: 25px;
  color: #b8b8b8;
  display: flex;
  
  .go {
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.active {
      .icon {
        color: #595959;
      }
    }
  }

  .container {
    width: calc(100% - 100px);
    height: 100%;
    position: relative;
    overflow: hidden;
    .guides {
      position: absolute;
      width: 100%;
      display: flex;
      height: 100%;
      top: 0;
      transition: left 0.5s;
      li {
        width: calc(100% / 7);
        display: flex;
        flex: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        span:first-child {
          font-size: 25px;
          color: #000;
        }
      }
    }
  }
}
</style>
