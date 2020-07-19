<template>
  <span v-if="value" class="difficulty">{{value.name}}</span>
</template>

<script>
  export default {
    name: "Difficulty",
    props: ['value']
  }
</script>

<style scoped>
  .difficulty {
    color: #a0a0a0;
    font-size: 12px;
  }
</style>
