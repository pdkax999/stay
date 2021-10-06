<template>
  <div class="Recommend-Wrap">
    <h4 class="title">推荐圈子</h4>
    <div class="list">
      <div class="item">
       <div class="avatar-wrap">
          <Avatar></Avatar>
       </div>
       <div class="info">
         <span class="title">运营学院  <Icon icon="vip"></Icon></span>
         <span>产品经理</span>
       </div>
      </div>
      <div class="item">
       <div class="avatar-wrap">
          <Avatar></Avatar>
       </div>
       <div class="info">
         <span class="title">运营学院  <Icon icon="vip"></Icon></span>
         <span>产品经理</span>
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
.Recommend-Wrap{
  padding: 30px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  color: #000;

  .avatar-wrap{
    width: 50px;
    height: 50px;
  }

  .list{
    margin-top: 30px;
  }

  .item{
    display: flex;
    margin-bottom: 20px;
    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      padding-bottom: 10px;
      transform: translateY(5px);
      .title{
        position: relative;
        
        }

      .icon{
        position: absolute;
        font-size: 30px;
        transform: translateY(-3px);
        color: #007EFF;
      }
    }
  }
}
 
</style>
