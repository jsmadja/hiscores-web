<template>
  <b-link :href="`/platform/${value}`" class="platform">{{value}}</b-link>
</template>

<script>
  export default {
    name: "Platform",
    props: ['value'],
  }
</script>

<style scoped lang="scss">
  @import "src/assets/custom.scss";

  .platform {
    color: $primary;
    margin-right: 5px;
  }
</style>
