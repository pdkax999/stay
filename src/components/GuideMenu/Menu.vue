<template>
  <div class="guide-container" ref="guideCon" :class="{ showLine: showLine }">

    <div
      class="left go splitLine"
      :style="{ width: `${moreWidth}px` }"
      :class="{ active: moveDistance > 0 }"
      @click="showRight"
    >
      <Icon icon="left"></Icon>
    </div>

    <div class="container" :style="{ width: `${showWidth}px` }">
      <ol class="guideList" :style="moveLeft">
        <li
          class="guide-item"
          v-for="(menu, index) in guideList"
          :key="index"
          :style="{ width: `${guideWid}px` }"
          :class="{ active: index === activated }"
          @click="pitchGuide && onActivated(index)"
        >
          <Icon v-if="type == 'icon'" :icon="menu"></Icon>
          <span v-else-if="menu.title" class="info">
            <span>{{ menu.count }}</span>
            <span>{{ menu.title }}</span>
          </span>
          <span v-else class="title">{{ menu }}</span>

        </li>
      </ol>
      <!-- 分割线 -->
      <ol class="splitLines">
        <li
          class="line"
          v-for="line in showLIneNum"
          :key="line"
          :style="{ left: `${line * guideWid}px` }"
        ></li>
      </ol>
    </div>

    <div
      class="right go splitLine"
      :style="{ width: `${moreWidth}px` }"
      @click="showLeft"
      :class="{ active: guideList.length - showMenuItem > moveDistance }"
    >
      <Icon icon="right"></Icon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    // 切换按钮宽度
    moreWidth: {
      type: Number,
      default: 50,
    },
    guideList: {
      type: Array,
      default() {
        return [];
      },
    },
    //菜单默认显示多少个菜单
    showMenuItem: {
      type: Number,
      default: 9,
    },

    type: {
      type: String,
      default: "icon",
    },

    pitchGuide: {
      type: Boolean,
      default: false,
    },
    showLine: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 展示容器宽度
      showWidth: 0,
      // 移动多少
      moveDistance: 0,
      // 当前选中菜单
      activated: false,

      guideWid: 0,
    };
  },
  mounted() {
    this._initInfo();
  },
  computed: {
    moveLeft() {
      const { moveDistance, showMenuItem, showWidth } = this;

      let width = showWidth / showMenuItem;

      let result = moveDistance * -width;

      return {transform:`translateX(${result}px)`};
    },

    showLIneNum() {
      const { guideList, showMenuItem } = this;

      return guideList.length > showMenuItem
        ? showMenuItem - 1
        : guideList.length;
    },
  },
  methods: {
    _initInfo() {
      const { moreWidth, pitchGuide, showMenuItem } = this;

      let allWidth = this.$refs.guideCon.offsetWidth;
      // 如果为true则点击切换菜单
      this.activated = pitchGuide ? 0 : false;
      
      //计算容器宽度
      this.showWidth = allWidth - 2 * moreWidth;

      this.guideWid = this.showWidth / showMenuItem;
    },
    showLeft() {
      const { guideList, showMenuItem, moveDistance } = this;

      let maxMoove = guideList.length - showMenuItem;

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

    onActivated(i) {

      const { guideList, showMenuItem } = this;

      this.activated = i;

      let maxMoove = guideList.length - showMenuItem;
      // 移动菜单如果小于最大值 则移动到哪 ，大于最大值则移动到最大值
      if (i > maxMoove) {
        this.moveDistance = maxMoove;
      } else {
        this.moveDistance = i;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@mixin FlexCenter() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.guide-container {
  width: 100%;
  height: 83px;
  display: flex;
  border-radius: 10px;
  cursor: pointer;
   background-color: #fff;
  .go {
    font-size: 25px;
    height: 100%;
    color: #999;
    position: relative;
    @include FlexCenter();

    &.active {
      color: #000;
    }
  
  }

  .container {
    height: 100%;
    position: relative;
    overflow: hidden;
    .guideList {
      position: absolute;
      height: 100%;
      display: flex;
      transition: all 0.5s;
      color: #999;
      z-index: 999;
      .guide-item {
        text-align: center;
        height: 100%;
        user-select: none;
        font-size: 30px;
        flex: none;
        @include FlexCenter();
        border-bottom: 3px transparent solid;

        .title {
          font-size: 18px;
        }

        &.active {
          border-bottom: 3px #2c74ea solid;

          .icon {
            color: #2c74ea;
          }

          .title {
            font-weight: bold;
          }
        }

        .info {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;

          span:first-child {
            font-size: 25px;
            color: #000;
          }
          span:last-child{
            font-size: 14px;
            color:#b8b8b8;
          }
        }
      }
    }
    .splitLines {
      transform: scale(0);
    }
  }

  // 是否显示分割线
  &.showLine {
    
    .splitLines {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
      transform: scale(1);
      .line {
        position: absolute;
        height: 20px;
        width: 2px;
        background-color: #eee;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .go {
      &.splitLine {
        &::after {
          content: " ";
          position: absolute;
          height: 20px;
          width: 2px;
          background-color: #eee;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &:last-child::after {
          left: 0;
        }
      }
    }
  }
}
</style>
