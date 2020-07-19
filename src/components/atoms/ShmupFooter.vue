<template>
  <div class="shmup-footer">
    hiscores.shmup.com ~ <a href="https://shmup.com">shmup.com</a> ~ <b>{{games}}</b> games - <b>{{players}}</b> players - <b>{{scores}}</b> scores
  </div>
</template>
<script>
  export default {
    name: "ShmupFooter",
    props: ['games', 'players', 'scores']
  }
</script>

<style scoped lang="scss">
  .shmup-footer {
    text-align: center;

    img {
      width: 100%;
    }
  }
</style>
