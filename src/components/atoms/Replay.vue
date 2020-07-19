<template>
  <b-link class="replay" :href="url">Replay</b-link>
</template>

<script>
  export default {
    name: "Replay",
    props: ['url'],
  }
</script>

<style scoped lang="scss">
  @import "src/assets/custom";

  .replay {
    font-size: 8px;
    padding: 3px 4px;
    border-radius: 5px;
    color: white;
    background: $primary;
  }
</style>
