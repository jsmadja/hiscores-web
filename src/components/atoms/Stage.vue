<template>
  <span v-if="value">Stage {{value.name}}</span>
</template>

<script>
  export default {
    name: "Stage",
    props: ['value']
  }
</script>

<style scoped>

</style>
