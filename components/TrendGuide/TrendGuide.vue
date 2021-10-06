<template>
  <div class="info-category">
    <div class="left go">
      <Icon icon="left"></Icon>
    </div>
    <div class="container-nav">
      <ul class="guides">
        <li class="active">全部</li>
        <li>热门</li>
        <li>精华</li>
        <li>设计经验</li>
        <li>素材分析</li>
      </ul>
    </div>
    <div class="right go">
      <Icon icon="right"></Icon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang='scss'>

@mixin FlexCenter($jcont:center) {
  display: flex;
  justify-content: $jcont;
  align-items: center;
}

.info-category{
    width: 100%;
    height: 82px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    .go{
      width: 40px;
      height: 100%;
      color: #999;
      font-size: 20px;
      @include FlexCenter();
    }
    
    .container-nav{
      color: #999;
      width: 500px;

      .guides{
      display: flex;
      width: 100%;
      font-size: 18px;
       @include FlexCenter(space-between);
      height: 100%;
       li{
         height: 100%;
         padding: 0 20px;
          @include FlexCenter();

          &.active{ 
            font-weight: bold;
            border-bottom: 2px solid #2C74EA;
          }
       }
    }
    }
  }
</style>
