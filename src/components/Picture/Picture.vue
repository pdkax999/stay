<template>
  <div class="picture-container">
    <div class="title">
      <span class="picture">照片 <span>30</span></span>
    </div>
    <div class="pictures">
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img">
        <div class="mask">+18</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='scss'>
.picture-container{
  width: 285px;
  height: 285px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  
  .title{
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 35px;
    .picture{

      span{
        color: #0052d4;
      }
    }
  }

  .pictures{
    width: 230px;
    height: 170px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .img{
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background-color: #ff6700;
      position: relative;
      overflow: hidden;

      .mask{
        font-size: 20px;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        width: 100%;
        background-color: rgba($color: #000000, $alpha: .5);
      }
      
    }
  }

}
 
</style>
