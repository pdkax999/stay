<template>
  <div class="menuNav-wrap">
    <div class="go left">
      <Icon icon="left"></Icon>
    </div>
    <div class="container">
      <ul class="guides">
        <li>
          <span>930</span>
          <span>发布</span>
        </li>
        <li>
          <span>82</span>
          <span>浏览</span>
        </li>
        <li>
          <span>5.7K</span>
          <span>粉丝</span>
        </li>
        <li>
          <span>13</span>
          <span>关注</span>
        </li>
        <li>
          <span>74</span>
          <span>照片</span>
        </li>
        <li>
          <span>10.6K</span>
          <span>获赞</span>
        </li>
        <li>
          <span>8.4K</span>
          <span>收到评论</span>
        </li>
      </ul>
    </div>
     <div class="go rights">
      <Icon icon="right"></Icon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='scss'>
.menuNav-wrap{
width: 100%;
height: 104px;
border-radius: 10px;
background-color: #fff;
font-size:25px;
color: #B8B8B8;
display: flex;
 .go{
   width: 50px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
 }
 .container{
   width: calc(100% - 100px);
   height: 100%;
   position: relative;
   overflow: hidden;
   .guides{
     position: absolute;
     width: 100%;
     display: flex;
     height: 100%;
     li{
       width: 17%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
        font-size: 14px;
       span:first-child{
         font-size: 25px;
         color: #000;
       }
     }
   }
 }
}
</style>
