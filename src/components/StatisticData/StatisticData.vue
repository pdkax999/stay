<template>
  <div class="statisticData-warp">
    <div class="head">
      <span class="title">统计</span>
      <div class="handle">
        <Icon icon="left" class="active"></Icon>
        <Icon icon="right"></Icon>
      </div>
    </div>
    <div class="container-data">
      <ul class="list-data">
        <li class="item">
          <div class="total">
             <span class="val">87.365</span><Icon icon="zengjia"></Icon><span class="percentum">3.2%</span>
          </div>
          <div class="info">
            <span>发布数</span><span>过去的的一个月</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  
  }

</script>

<style lang='scss'>
// 7BABF7
.statisticData-warp{
  padding: 25px;
  .head{
    color: #fff;
    display: flex;
    font-size: 18px;
    height: 25px;
    justify-content: space-between;
    .handle{
      font-size: 15px;
      .icon:nth-child(1){
        margin-right: 5px;
      }
      .icon{

        &.active{
          color: #eee;
        }
      }
    }
  }

  .container-data{
    
    padding-top:40px;

    .item{

      .total{
        display: flex;
        align-items: center;
        .val{
          font-size: 30px;
        }
        .icon{
          color: #42EFFF;
          font-size: 18px;
          // transform: translateY(-5px);
        }
      }

      .info{
        display: flex;
        flex-direction: column;

        &>span:first-child{
          font-size: 18px;
        }
      }

    }

  }

}
 
</style>
