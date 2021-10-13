<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang='scss'>
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
