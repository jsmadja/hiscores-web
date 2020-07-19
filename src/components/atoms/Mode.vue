<template>
  <span v-if="value" class="mode">{{value.name}}</span>
</template>

<script>
  export default {
    name: "Mode",
    props: ['value']
  }
</script>

<style scoped>
  .mode {
    color: #a0a0a0;
    font-size: 12px;
  }
</style>
