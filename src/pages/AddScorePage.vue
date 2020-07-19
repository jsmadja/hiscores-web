<template>
    <div>
        <h1>Add New Score</h1>
        <b-form-select
                v-if="!score && !this.$route.params.id"
                id="game"
                v-model="game"
                :options="mappedGames"
                @change="selectGame"
                required
                class="mb-3"
        />
        <score-form v-if="!score && selectedGame" :game="selectedGame" :on-submit="addScore"/>
        <how-to-post-to-shmup v-if="score" :score="score" :game="selectedGame"/>
    </div>
</template>

<script>
    import {Game} from "../models";
    import ScoreForm from "../components/organisms/ScoreForm";
    import HowToPostToShmup from '../components/organisms/HowToPostToShmup';

    export default {
        name: "HomePage",
        components: {HowToPostToShmup, ScoreForm},
        data() {
            return {
                game: undefined,
                games: [],
                score: undefined,
            };
        },
        computed: {
            mappedGames: function () {
                return this.games.map(game => ({text: game.title, value: game}));
            },
            postedScore: function () {
                return this.score;
            },
            selectedGame: function () {
                return this.$store.state.game;
            }
        },
        created() {
            const id = this.$route.params.id;
            if (id) {
                this.game = new Game({id});
                this.fetchGame(id);
            } else {
                this.$store
                    .dispatch('fetchGamesNames')
                    .then(() => this.games = this.$store.state.gamesNames);
            }
        },
        methods: {
            selectGame() {
                if (!this.game) {
                    return;
                }
                this.fetchGame(this.game.id);
            },
            fetchGame(id) {
                this.$store.dispatch('fetchGame', id);
            },
            addScore(score) {
                const _score = JSON.parse(JSON.stringify(score));
                _score.photo = score.photo;
                _score.inp = score.inp;
                _score.game = this.game.id;
                this.$store
                    .dispatch('postScore', _score)
                    .then(() => this.score = score);
            }
        }
    }
</script>

<style scoped>

</style>