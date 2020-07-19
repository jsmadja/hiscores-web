<template>
  <div>
    <PlayersTemplate :players="players"/>
  </div>
</template>

<script>
  import PlayersTemplate from "../components/templates/PlayersTemplate";

  export default {
    components: {
      PlayersTemplate,
    },
    data() {
      return {
        players: [],
      };
    },
    created() {
      this.$store
        .dispatch('fetchPlayers')
        .then(() => {
          this.players = this.$store.state.players.map(player => ({
            player: {
              id: player.id,
              name: player.name
            },
            '1st': player.firstRankCount,
            '2nd': player.secondRankCount,
            '3rd': player.thirdRankCount,
            '1CC': player.oneCreditCount,
            scores: player.scores
          }));
        })
    },
  };
</script>
