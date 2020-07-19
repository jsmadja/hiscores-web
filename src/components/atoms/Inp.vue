<template>
  <b-link class="inp" :href="url">INP</b-link>
</template>

<script>
  export default {
    name: "Inp",
    props: ['url'],
  }
</script>

<style scoped lang="scss">
  @import "src/assets/custom";

  .inp {
    font-size: 8px;
    padding: 3px 4px;
    border-radius: 5px;
    color: white;
    background: $primary;
  }
</style>
