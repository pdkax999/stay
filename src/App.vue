<template>

  <div id="app" class="w">
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style lang="scss">
@import "./common/base.css";
@import "../public/css/ress.min.css";
#app{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
}
</style>
