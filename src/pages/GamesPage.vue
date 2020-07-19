<template>
  <div>
    <GamesTemplate :games="games"/>
  </div>
</template>

<script>
  import GamesTemplate from '../components/templates/GamesTemplate';

  export default {
    components: {
      GamesTemplate,
    },
    data() {
      return {
        games: [],
      };
    },
    created() {
      this.$store
        .dispatch('fetchGames')
        .then(() => {
          this.games = this.$store.state.games.map(game => ({
            game: {
              id: game.id,
              title: game.title
            },
            cover: game.cover,
            players: game.players,
            scores: game.scores,
            '1CC': game.oneccs,
            platforms: game.platforms,
          }));
        })
    },
  };
</script>
