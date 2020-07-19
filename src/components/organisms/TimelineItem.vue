<template>
  <b-card
    :title="item.game.title"
    :img-src="item.game.cover"
    :img-alt="item.game.title"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 timeline-item"
  >
    <b-card-text>
      <player :player="item.player" /> - {{item.score.createdSinceInFrench}}
    </b-card-text>
  </b-card>
</template>

<script>
  import Player from "../atoms/Player";

  export default {
    name: "TimelineItem",
    props: ['item'],
    components: {
      Player
    }
  }
</script>

<style scoped>
  .timeline-item {
    background: white;
  }
</style>
