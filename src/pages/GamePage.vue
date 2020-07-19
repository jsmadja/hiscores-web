<template>
  <div>
    <GameTemplate :game="game" :rankings="rankings"/>
  </div>
</template>

<script>
  import api from '../api';
  import axios from 'axios';
  import {Game} from '../models';
  import GameTemplate from '../components/templates/GameTemplate';

  export default {
    components: {
      GameTemplate,
    },
    data() {
      return {
        game: new Game(),
        rankings: [],
      };
    },
    computed: {
      gameId() {
        return this.$route.params.id;
      },
    },
    created() {
      axios
        .get(`${api.endpoint}/games/${this.gameId}`)
        .then(response => response.data)
        .then(game =>
          axios.get(`${api.endpoint}/games/${this.gameId}/rankings`).then(response => {
            this.game = game;
            this.rankings = response.data;
          }),
        );
    },
  };
</script>
