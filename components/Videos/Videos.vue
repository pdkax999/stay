<template>
  <div class="viedeWr">
    <div class="title">
      <span class="title">视频 <span class="num">7</span></span>
    </div>
    <div class="videos">
      <div class="video">
        <!-- <img src="" alt=""> -->
        <div class="bg"></div>
        <div class="iconWr">
          <Icon icon="bofang"></Icon>
        </div>
      </div>
      <div class="video">
        <!-- <img src="" alt=""> -->
        <div class="bg"></div>
        <div class="iconWr">
          <Icon icon="bofang"></Icon>
        </div>
      </div>
      <div class="video active">
        <!-- <img src="" alt=""> -->
        <div class="bg"></div>
        <div class="iconWr">
          <Icon icon="bofang"></Icon>
        </div>
        <div class="mask">
         <span class="text">
            <span class="title">动态设计实战教学</span> <br>
          <span class="time">3天前</span>
         </span>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='scss'>
@mixin leCenterP {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

@mixin PoCenter{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}



.viedeWr{
  width: 285px;
  height: 544px;
  background-color: #fff;
  border-radius: 10px;
  padding: 29px 29px 33px 29px;
  color: #000;
  .title{
    font-size:20px;
    font-weight: bold;
    margin-bottom: 40px;
    .num{
      color: #7BB5FF;
    }
  }
  .videos{
   width: 230px;
   height: 430px;
    background-color: #bfa;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
     .video{
      width: 230px;
      height: 130px;
      border-radius: 10px;
      position: relative;

      &.active{

        .iconWr{
          top: 16px !important;
          transform: translate(-50%,0);
        }


      }
      .bg{
       width: 100%;
       height: 100%;
       background-color: #ff6700;
       border-radius: 10px;
      }
      .iconWr{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #42EFFF;
         @include leCenterP();
        top: 50%;
        transform: translate(-50%,-50%);
     
        .icon{
         @include PoCenter();
         font-size: 45px;
        }
      }

      .mask{
        position: absolute;
        background-color: rgba($color: #000000, $alpha: .4);
        width: 100%;
        height: 100%;
        top: 0;
        border-radius: 10px;
        padding-left: 20px;
        padding-bottom: 10px;
        color: #fff;
        display: flex;
        flex-direction: column-reverse;
        .text{
         .title{
            font-size: 14px;
            font-weight: normal;
         }
        }
      }
    }

  }
}
 
</style>
