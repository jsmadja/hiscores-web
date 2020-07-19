<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-form @submit="onInternalSubmit">
          <b-container>
            <b-form-group
              id="title"
              label="Titre"
              label-for="title">
              <b-form-input
                id="name"
                v-model="form.title"
                type="text"
                required
              />
            </b-form-group>

            <b-form-group
              id="cover"
              label="Pochette"
              label-for="cover"
              description="Lien vers une image hébergée"
            >
              <b-form-input
                id="cover"
                v-model="form.cover"
                type="text"
                required
              />
            </b-form-group>

            <b-form-group
              id="thread"
              label="Topic"
              label-for="thread"
              description="Lien vers le topic de shmup.com"
            >
              <b-form-input
                id="thread"
                v-model="form.thread"
                type="text"
                required
              />
            </b-form-group>

            <b-form-group label="Plateformes">
              <b-form-checkbox-group
                v-model="form.platforms"
                :options="platforms"
                class="platforms"
              />
            </b-form-group>

            <b-form-group
              id="difficulties"
              label="Difficultés"
              label-for="difficulties"
              description="Mettre une difficulté par ligne"
            >
              <b-form-textarea
                id="difficulties"
                v-model="form.difficulties"
                rows="4"
              />
            </b-form-group>

            <b-form-group
              id="modes"
              label="Modes"
              label-for="modes"
              description="Mettre un mode par ligne"
            >
              <b-form-textarea
                id="modes"
                v-model="form.modes"
                rows="4"
              />
            </b-form-group>

            <b-form-group
              id="stages"
              label="Stages"
              label-for="stages"
              description="Mettre un stage par ligne : 1, 1 BOSS (ex: mort au boss du stage 1), 2-1 (ex: Loop 2 Stage 1)"
            >
              <b-form-textarea
                id="stages"
                v-model="form.stages"
                rows="4"
              />
            </b-form-group>

            <b-form-group
              id="ships"
              label="Vaisseaux"
              label-for="ships"
              description="Mettre un vaisseau par ligne"
            >
              <b-form-textarea
                id="ships"
                v-model="form.ships"
                rows="4"
              />
            </b-form-group>

            <b-row>
              <b-col>
                <b-button class="mb-3" type="submit" variant="primary">Submit</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-form>
      </b-col>
      <b-col>
        <game-template class="fixed" :game="previewedGame" :rankings="previewedRankings"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import GameTemplate from "../templates/GameTemplate";
  import {Game} from "../../models";
  import _ from 'lodash';

  export default {
    name: "GameForm",
    components: {GameTemplate},
    props: ['platforms', 'onSubmit'],
    data() {
      return {
        form: {
          title: '',
          cover: '',
          ships: '',
          stages: '',
          modes: '',
          difficulties: '',
          thread: '',
          platforms: [],
        }
      }
    },
    computed: {
      previewedGame: function () {
        return new Game({
          title: this.form.title,
          cover: this.form.cover,
          platforms: this.form.platforms
            .flat()
            .map(platformName => ({id: Math.random(), name: platformName})),
        });
      },
      previewedRankings: function () {
        function cartesianProductOf() {
          return _.reduce(arguments, function (a, b) {
            return _.flatten(_.map(a, function (x) {
              return _.map(b, function (y) {
                return x.concat([y]);
              });
            }), true);
          }, [[]]);
        }

        const difficulties = (this.form.difficulties.split('\n')) || [];
        const modes = (this.form.modes.split('\n')) || [];
        const stages = (this.form.stages.split('\n')) || [];
        const ships = (this.form.ships.split('\n')) || [];

        return cartesianProductOf(difficulties, modes).map(params => {
          return {
            mode: params[1] ? {
              id: Math.random(),
              name: params[1],
            } : {},
            difficulty: {
              id: Math.random(),
              name: params[0]
            },
            scores: [1, 2, 3].map(rank => {
              const stage = _.sample(stages);
              return ({
                rank: rank,
                player: {id: Math.random(), name: 'player' + rank},
                value: (4 - rank) * 100000,
                stage: stage,
                ship: {id: 0, name: _.sample(ships)},
                comment: 'With ' + _.sample(ships) + ' ship',
                oneCC: stage === 'ALL',
                inp: _.sample([true, false]),
                replay: _.sample([true, false]),
                photo: _.sample([true, false]),
              });
            })
          };
        });
      }
    },
    methods: {
      onInternalSubmit(ev) {
        ev.preventDefault();
        const game = JSON.parse(JSON.stringify(this.form));
        game.difficulties = game.difficulties.split('\n');
        game.ships = game.ships.split('\n');
        game.modes = game.modes.split('\n');
        game.stages = game.stages.split('\n');
        this.onSubmit(game);
      },
    }
  }
</script>

<style lang="scss">
  .platforms {
    .custom-checkbox {
      width: 100px;
    }
  }

  .fixed {
    position: fixed;
  }
</style>
