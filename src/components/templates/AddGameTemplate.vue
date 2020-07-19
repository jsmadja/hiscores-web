<template>
  <div>
    <b-card>
      <game-form :platforms="platforms" on-submit="onSubmit" />
    </b-card>
  </div>
</template>

<script>
  import GameForm from "../organisms/GameForm";
  export default {
    name: "AddGameTemplate",
    components: {GameForm},
    props: ['platforms', 'onSubmit'],
  }
</script>

<style lang="scss">
</style>
