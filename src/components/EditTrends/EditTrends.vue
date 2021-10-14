<template>
  <div class="EditTrendsWrapper">
    <div class="guideNav">
      <div
        class="guide-item"
        @click="activated = 1"
        :class="{ active: activated == 1 }"
      >
        <Icon icon="yingfengdongtai"></Icon>
        <span>动态</span>
      </div>
      <div
        class="guide-item"
        @click="activated = 2"
        :class="{ active: activated == 2 }"
      >
        <Icon icon="tiezi"></Icon>
        <span>帖子</span>
      </div>
      <div
        class="guide-item"
        @click="activated = 3"
        :class="{ active: activated == 3 }"
      >
        <Icon icon="shipin"></Icon>
        <span>视屏</span>
      </div>
    </div>
    <div class="editWr">
      <textarea class="edit" placeholder="分享点什么..."></textarea>
      <span class="textNum">998 / 1000</span>
    </div>

    <div class="footer">
      <div class="opction">
        <Icon icon="xiangji1" @click.native="menuActive=1" :class="{active:menuActive==1}"></Icon>
        <Icon icon="ren" @click.native="menuActive=2" :class="{active:menuActive==2}"></Icon>
        <Icon icon="ren" @click.native="menuActive=3" :class="{active:menuActive==3}"></Icon>
        <Icon icon="ren" @click.native="menuActive=4" :class="{active:menuActive==4}"></Icon>
      </div>
      <div class="action">
        <span class="more">更多设置</span>
        <div class="btn">发布</div>
      </div>
      <div class="picture">照片</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      activated: 1,
       menuActive:1
    };
  },
};
</script>

<style lang='scss' >
.EditTrendsWrapper {
  width: 580px;
  height: 310px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;

  .guideNav {
    display: flex;
    width: 100%;
    height: 65px;
    font-size: 20px;
    border-bottom: #eeeef0 1px solid;
    // background-color:pink;

    .guide-item {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: #999;
      cursor: pointer;
      border-bottom: transparent 5px solid;
      .icon {
        margin-right: 10px;

        & + span {
          font-size: 14px;
        }
      }

      &:not(:nth-child(3))::after {
        content: " ";
        width: 2px;
        height: 30px;
        background-color: #999;
        position: absolute;
        right: 0;
      }

      &.active {
        border-bottom: #2c74ea 5px solid;
      }
    }
  }

  .editWr {
    width: 100%;
    height: 160px;
    padding: 23px 32px 16px 32px;
    position: relative;
   
    .edit {
      width: 100%;
      height: 100%;
      resize: none;
      color: #000;
    }

    .textNum {
      position: absolute;
      bottom: 20px;
      right: 30px;
      color: #999;
    }
  }

  .footer {
    padding: 0px 30px 0px 20px;
    font-size: 20px;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eeeef0;
    position: relative;

    .opction {
      color: #999;
      font-size: 30px;
      display: flex;
      align-items: flex-end;
      .icon {
        margin-right: 12px;

        &.active{
          color: #2c74ea;
        }
      }
    }
    .action{
      display: flex;
      cursor: pointer;
      .more{
        line-height: 40px;
        margin-right: 20px;
      }
    }
    .btn {
      width: 85px;
      height: 40px;
      border-radius: 10px;
      background-color: #2c74ea;
      text-align: center;
      line-height: 40px;
    }

    .more {
      color: #b8b8b8;
      font-size: 14px;
    }

    .picture {
      width: 45px;
      height: 22px;
      border-radius: 10px;
      background-color: #2c74ea;
      position: absolute;
      top: 0;
      left: 20px;
      font-size: 12px;
      line-height: 22px;
      text-align: center;
    }
  }
}
</style>
