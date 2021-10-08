<template>
  <div class="nav-guide">
   <div class="left go">
      <Icon icon="left"></Icon>
   </div>
   <div class="container-nav">
   <ol class="guides">
     <li class="guide-item">
    <Icon icon="xiangqing"></Icon>
     </li>
     <li class="guide-item">
       <Icon icon="50"></Icon>
     </li>
     <li class="guide-item">
       <Icon icon="gerentouxiang"></Icon>
     </li>
     <li class="guide-item">
       <Icon icon="tupian"></Icon>
     </li>
     <li class="guide-item">
      <Icon icon="yinpin"></Icon>
     </li>
     <li class="guide-item">
      <Icon icon="yinpin"></Icon>
     </li>
     <li class="guide-item">
      <Icon icon="yinpin"></Icon>
     </li>
     <li class="guide-item">
      <Icon icon="yinpin"></Icon>
     </li>
     <li class="guide-item">
      <Icon icon="yinpin"></Icon>
     </li>

   </ol>
   </div>
   <div class="right go">
     <Icon icon="right"></Icon>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
  // 2C74EA
</script>

<style lang='scss'>

@mixin TextCenter($height){
   height: $height;
   line-height:$height;
}
@mixin FlexCenter{
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-guide{
  width: 100%;
  height: 83px;
  background-color: #fff;
  border-radius: 10px;
  color: #999999;
  display: flex;
  font-size: 40px;
  cursor: pointer;
  

  .go{
    width: 50px;
    font-size: 30px;
   @include FlexCenter();
   
  }
  .right{
       flex: 1;
       span{
         float: right;
       }
    }

  .container{
    width: calc(100% - 100px);
    height: 100%;
    position: relative;
    overflow: hidden;
  }

 .guides{
   height: 100%;
   display: flex;
   .guide-item{
     width: 125px;
     text-align: center;
     font-size: 30px;
     @include  FlexCenter();
     
    
     & .icon{
      box-sizing: content-box;
      border: 1.5px solid  transparent;
      border-left-color:#eee ;
      padding-left: 47.5px;
      // border-right-color:#eee;
      // padding: 0 47.5px;
     
     }

     &:last-child{
       
       .icon{
          border-right-color:#eee;
          padding-right: 47.5px;
       }
     }
   }
 }

}
 
</style>
