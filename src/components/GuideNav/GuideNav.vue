<template>
  <div class="nav-guide">
    <div class="left go"  :class="{ active: moveDistance > 0 }" @click="showRight">
      <Icon icon="left"></Icon>
    </div>
    <div class="container-nav">
      <ol class="guides" :style="moveLeft">
        <li class="guide-item" v-for="(menu,index) in menuList" :key="index">
          <Icon :icon="menu"></Icon>
        </li>
      </ol>
    </div>
    <div class="right go" @click="showLeft"
     :class="{active: menuList.length - showMenuItem > moveDistance }">
      <Icon icon="right"></Icon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      moveDistance: 0,
      menuList: [
        "xiangqing",
        "50",
        "gerentouxiang",
        "tupian",
        "yinpin",
        "tupian",
        "yinpin",
        "tupian",
        "yinpin",
        "yinpin",
        "yinpin",
      ],
      showMenuItem:9
    }
  },
  computed:{
    moveLeft(){

      const {moveDistance} = this

      let distance = moveDistance * -120
      
      return {transform:` translateX(${distance}px)`}
    }
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
  },
};
// 2C74EA
</script>

<style lang='scss'>
@mixin TextCenter($height) {
  height: $height;
  line-height: $height;
}
@mixin FlexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-guide {
  width: 100%;
  height: 83px;
  background-color: #fff;
  border-radius: 10px;
  color: #999999;
  display: flex;
  font-size: 40px;
  cursor: pointer;
  

  .go {
    width: 50px;
    font-size: 25px;
    @include FlexCenter();
    position: relative;
    &::after {
      position: absolute;
      content: " ";
      width: 1.5px;
      height: 21px;
      background-color: #eeeeee;
      right: 0;
      top: 50%;
      transform: translateY(-45%);
    }
    &:last-child::after {
      left: 0;
    }

    &.active {
      color: #000;
    }
  }

  .container-nav {
    width: calc(100% - 100px);
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .guides {
    position: absolute;
    height: 100%;
    display: flex;
    transition: all .5s;
    .guide-item {
      width: 120px;
      text-align: center;
      height: 100%;
      font-size: 30px;
      flex: none;
      @include FlexCenter();
      position: relative;

      &:not(:last-child)::after {
        position: absolute;
        content: " ";
        width: 1.5px;
        height: 21px;
        background-color: #eeeeee;
        right: 0;
        top: 50%;
        transform: translateY(-45%);
      }

      &:nth-child(9)::after {
        width: 0px;
      }
    }
  }
}
</style>
