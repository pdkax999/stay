<template>
  <div class="info-category">
    <div
      class="left go"
      @click="showRight"
      :class="{ active: moveDistance > 0 }"
    >
      <Icon icon="left"></Icon>
    </div>
    <div class="container-nav">
      <ul class="guides" :style="{ left: moveLeft }">
        <li
          :class="{ active: actived === index }"
          v-for="(menu, index) in menuList"
          :key="index"
          @click="selectMenu(index)"
        >
          {{ menu }}
        </li>
      </ul>
    </div>
    <div
      class="right go"
      @click="showLeft"
      :class="{ active: menuList.length - showMenuItem > moveDistance }"
    >
      <Icon icon="right"></Icon>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      menuList: [
        "全部",
        "热门",
        "精华",
        "设计经验",
        "素材分析",
        "分析",
        "打架",
      ],
      // 选中标识
      actived: 0,
      // 移动多少
      moveDistance: 0,
      // 展示多少个菜单
      showMenuItem: 5,
    };
  },
  computed: {
    moveLeft() {
      const { moveDistance } = this;

      let result = moveDistance * -20 + "%";

      return result;
    },
  },
  methods: {
    showLeft() {
      const { menuList, showMenuItem, moveDistance } = this;

      let maxMoove = menuList.length - showMenuItem;

      if (maxMoove > moveDistance) {
        this.moveDistance++;
      }
    },
    showRight() {
      let { moveDistance } = this;
      if (moveDistance > 0) {
        this.moveDistance--;
      }
    },
    selectMenu(i) {
      this.actived = i;

      const { menuList, showMenuItem } = this;

      let maxMoove = menuList.length - showMenuItem;

      if (maxMoove >= i) {
        this.moveDistance = i;
      } else {
        this.moveDistance = maxMoove;
      }
    },
  },
};
</script>

<style lang='scss'>
@mixin FlexCenter($jcont: center) {
  display: flex;
  justify-content: $jcont;
  align-items: center;
}

.info-category {
  width: 100%;
  height: 82px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  .go {
    width: 40px;
    height: 100%;
    color: #999;
    font-size: 20px;
    @include FlexCenter();

    &.active {
      color: #000;
    }
  }

  .container-nav {
    color: #999;
    width: 500px;
    position: relative;
    overflow: hidden;
    .guides {
      display: flex;
      width: 100%;
      font-size: 18px;
      @include FlexCenter(space-between);
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      transition: all 0.5s;
      li {
        height: 100%;
        width: (100% / 5);
        flex: none;
        @include FlexCenter();
        &.active {
          font-weight: bold;
          border-bottom: 2px solid #2c74ea;
        }
      }
    }
  }
}
</style>
