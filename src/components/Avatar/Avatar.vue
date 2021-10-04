<template>
  <div class="avatar">
    <div class="wrap-avatar">
      <img src="../../assets/test.jpg" alt="">
    </div>
    <span class="num">
      24
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>
<style lang='scss'>

 .avatar{
   width: 100%;
   height: 100%;
   background-color: #fff;
   border-radius: 50%;
   border: 10px solid #fff;
   border-top-color:#eee;
   border-left-color:#eee;
   border-bottom-color:#ff6700;
   border-right-color:#ff6700;
   display: flex;
   position: relative;
  .wrap-avatar{
   width: 90%;
   height: 90%;
   margin: auto;
  
   img{
    width: 100%;
    height: 100%;
    border-radius:50%;
   }
  }

  .num{
    position: absolute;
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: #0051D4;
    border-radius: 50%;
    right: -10px;
    bottom: -10px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    color: #fff;
  }

    
 }

 
</style>
