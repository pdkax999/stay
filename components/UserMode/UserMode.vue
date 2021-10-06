<template>
  <div class="userMode">
    <div class="avatar-wrap">
      <Avatar></Avatar>
    </div>
    <div class="info">
        <span class="name">小梁 <span class="action">评论了你发布的</span> <span class="text">好设计让产品可用</span></span> 
        <span class="time">2分钟前</span>
    </div>
    <Icon icon="maoliang"></Icon>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang='scss'>
.userMode{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .avatar-wrap{
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  
    .info{
      display: flex;
      transform: translateY(3px);
      flex-direction: column;flex: 1;
      justify-content: space-between;

      .name{
        color: #000;
      }
      .action{
        margin: 0 5px;
        color: #999;
      }
      .text{
        color: #B5CDF7;
      }
    }

    .icon{
      font-size: 30px;
    }
}
 
</style>
