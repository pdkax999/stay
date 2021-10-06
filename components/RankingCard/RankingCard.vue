<template>
  <div class="RankingLists">
    <div class="head">
      <div class="bg"></div>
      <span class="info">
        <span class="title">点赞最多</span>
        <span>上个月</span>
      </span>
      <div class="avatar-wrap">
        <Avatar></Avatar>
      </div>
    </div>
    <div class="body">
      <div class="info">
        <span class="name">小周</span>
        <span class="linke">
          <span>345</span>
          <span>点赞</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang='scss'>
.RankingLists {
  width: 285px;
  height: 255px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-flow: wrap;

  .head {
    width: 100%;
    color: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 125px;
    .info {
      position: absolute;
      top: 25px;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 25px;
      }
    }
  }

  .bg {
    width: 100%;
    height: 125px;
    background-color: pink;
  }
  .avatar-wrap {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    bottom: -30px;
    .icon {
      margin: auto;
    }
  }

  .body {
    padding-top: 30px;
    width: 100%;
    height: 134px;
    color: #000;
    display: flex;
    justify-content: center;

    .info{
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }
    .name{
      font-size: 18px;
      color: #000;
    }
    .linke{
      display: flex;
      flex-direction: column;
      text-align: center;
      span:first-child{
          font-size: 20px;
      }
      span:last-child{
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>
