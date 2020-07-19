<template>
  <b-link class="photo" :href="url">Photo</b-link>
</template>

<script>
  export default {
    name: "Photo",
    props: ['url'],
  }
</script>

<style scoped lang="scss">
  @import "src/assets/custom";

  .photo {
    font-size: 8px;
    padding: 3px 4px;
    border-radius: 5px;
    color: white;
    background: $primary;
  }
</style>
