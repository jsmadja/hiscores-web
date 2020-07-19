<template>
  <b-link :href="`/player/${this.player.id}`">{{player.name}}</b-link>
</template>

<script>
  export default {
    name: "Player",
    props: ['player'],
  }
</script>

<style>

</style>
