<template>
  <div>
    <Title title="Ajouter un jeu"/>
    <AddGameTemplate :platforms="platforms" :on-submit="addGame"/>
  </div>
</template>

<script>
  import Title from "../components/atoms/Title";
  import AddGameTemplate from "../components/templates/AddGameTemplate";
  import {mapGetters} from 'vuex';

  export default {
    name: "AddNewGamePage",
    components: {AddGameTemplate, Title},
    created() {
      this.$store
        .dispatch('fetchPlatforms');
    },
    computed: {
      ...mapGetters(['platforms'])
    },
    methods: {
      addGame(game) {
        this.$store
          .dispatch('postGame', game);
      }
    }
  }
</script>

<style scoped>

</style>
