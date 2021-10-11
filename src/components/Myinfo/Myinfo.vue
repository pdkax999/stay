<template>
  <div class="myInfo-wrap">
    <div class="head">
      <div class="bg"></div>
      <div class="avatar-warp">
        <Avatar></Avatar>
      </div>
    </div>
    <div class="content-warp">
      <div class="issue info">
        <Icon icon="fabu"></Icon>
         <span class="num">28.5</span>

        <div class="my">
          <span>我的发布</span>
          <span class="month">月平均</span>
        </div>
      </div>
      <div class="comment info">
         <Icon icon="pinglun"></Icon>
         <span class="num">28.5</span>

        <div class="my">
          <span>我的发布</span>
          <span class="month">月平均</span>
        </div>
      </div>

      <div class="chart">
        <div class="progress">
          <span>87%</span>
        </div>
         <div class="my">
          <span>我的发布</span>
          <span class="month">点赞率</span>
        </div>
      </div>
      <div class="chart">
        <div class="progress">
          <span>42%</span>
        </div>
         <div class="my">
          <span>我的发布</span>
          <span class="month">收藏率</span>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang='scss'>
.myInfo-wrap {
  width: 284px;
  height: 562px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;

  .head {
    position: relative;
    .bg {
      width: 100%;
      height: 163px;
      background-color: pink;
    }
    .avatar-warp {
      width: 125px;
      height: 125px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .content-warp {
    width: 100%;
    height: 399px;
    background-color: #fff;
    padding-top: 72.5px;
    display: flex;
    flex-wrap: wrap;
    .info,.chart{
      width: 50%;
      height: 50%;
      color: #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .my{
         display: flex;
         flex-direction: column;
         text-align: center;

         .month{
           font-size: 12px;
           color: #999;
         }
      }
      .icon{
        font-size: 25px;
        color: #000;
      }
      .num{
        font-size: 20px;
        font-weight: bold;
        line-height: 45px;
        
      }

      &:not(.info:nth-child(2n)):after{
        content: " ";
        position: absolute;
        width: 2px;
        height: 40px;
        background-color: #eee;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .progress{
      width: 85px;
      height: 85px;
      text-align: center;
      line-height: 75px;
      border-radius: 50%;
      border: 5px solid #ff6700;
      margin-bottom: 20px;
      span{
        font-size: 30px;
      }
    }

    
  }

  .chart{
    justify-content: flex-start !important;
  }
}
</style>
