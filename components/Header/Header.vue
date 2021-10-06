<template>
  <div class="header">
    <nav>
      <div class="logo">
        <!-- <img src="" alt=""> -->
        <div class="img"></div>
        <h3 class="title">想天社区 <Icon icon="caidan"></Icon></h3>
      </div>
      <ul class="guide">
        <li><nuxt-link to="/personal" class="item">首页</nuxt-link></li>
        <!-- <li><span>圈子</span></li> -->
        <li><nuxt-link to="/social" class="item">圈子</nuxt-link></li>
        <!-- <li><router-link to="/core" class="item">榜单</router-link></li> -->
        <li><nuxt-link to="/core" class="item">榜单</nuxt-link></li>
        <li><nuxt-link to="/personal" class="item"><Icon icon="gengduo"></Icon></nuxt-link></li>
        <!-- <li><span>榜单</span></li> -->
      </ul>
    </nav>
     <div class="search">
       <div class="input">
        <input type="text"  placeholder="搜索"/>
        <Icon icon="sousuo" class="search"></Icon>
       </div>

     </div>
      <div class="infoWrapper">
        <div class="info">
         <Icon icon="xiaoxizhongxin"></Icon>
         <span class="line">|</span>
         <Icon icon="setting"></Icon>
       </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang='scss'>
.header {
  height: 82px;
  background-color: #2c74ea;
  padding: 0px 28px 0 21px;
  display: flex;
  & > nav {
    display: flex;

    .logo {
      display: flex;
      align-items: center;
      margin-right: 36px;
      .img {
        width: 61px;
        height: 41px;
        margin-right: 13px;
        background-color: #bfa;
      }

      .title {
        display: flex;
        font-size: 18px;
        font-weight: 100;
        .icon {
          margin-left: 29px;
          transform: translateY(4px);
        }
      }
    }

    .guide {
      display: flex;
      line-height: 82px;
      width: 212px;
      margin-right: 25px;
      justify-content: space-between;

      .item {
        display: inline-block;
        height: 100%;
        color: #fff;
        text-decoration: none;
        //  line-height: 82px;
      }
    }
  }
  .search {
    width: 418px;
    height: 82px;
    display: flex;
    align-items: center;
    .input {
      width: 100%;
      height: 55px;
      background-color: #0051d4;
      border-radius: 10px;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        color: #fff;
        padding: 0 27px;

        &::-webkit-input-placeholder {
          color: #fff;
        }
        &::-moz-input-placeholder {
          color: #fff;
        }
        &::-ms-input-placeholder {
          color: #fff;
        }
      }

      .icon {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 27px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .infoWrapper {
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    .info {
      display: flex;
      align-items: center;
      font-size: 20px;
      width: 109px;
      height: 55px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
