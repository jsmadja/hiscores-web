<template>
  <div>
    <Title :title="game.title"/>
    <p>
      Venez discuter des stratégies sur le
      <b-link :href="game.thread">forum</b-link>
    </p>

    <p>
      Le jeu est disponible sur les plateformes suivantes :
      <template v-for="platform in game.platforms"
      >
        <platform :key="platform.id" :value="platform.name"/>
      </template>
    </p>

    <template v-for="ranking in rankings">
      <div v-if="ranking.scores && ranking.scores.length > 0" :key="ranking.mode.id+'-'+ranking.difficulty.id">
        <div class="ranking-category">
          <mode :value="ranking.mode"/>
          <difficulty :value="ranking.difficulty"/>
        </div>
        <div>
          <b-table class="ranking"
                   small
                   fixed

                   sticky-header="200px"
                   striped
                   borderless
                   :items="itemsFor(ranking)"
                   :fields="fields"
                   thead-class="thClass"
                   :tbody-tr-class="rowClass">
            <template v-slot:cell(rank)="data">
              {{ data.item.rank | formatRank }}
            </template>

            <template v-slot:cell(player)="data">
              <player :player="data.item.player"/>
            </template>

            <template v-slot:cell(score)="data">
              {{ data.item.score | formatNumber }}
            </template>

            <template v-slot:cell(misc)="data">
              <div class="misc">
                <one-c-c v-show="data.item.oneCC"/>
                <inp v-show="data.item.inp" :url="data.item.inp"/>
                <replay v-show="data.item.replay" :url="data.item.replay"/>
                <photo v-show="data.item.photo" :url="data.item.photo"/>
              </div>
            </template>

          </b-table>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
  import Title from '../atoms/Title.vue';
  import Platform from "../atoms/Platform";
  import Mode from "../atoms/Mode";
  import Difficulty from "../atoms/Difficulty";
  import Player from "../atoms/Player";
  import OneCC from "../atoms/OneCC";
  import Inp from "../atoms/Inp";
  import Replay from "../atoms/Replay";
  import Photo from "../atoms/Photo";

  export default {
    components: {
      Player,
      Difficulty,
      Mode,
      Platform,
      Title,
      OneCC,
      Inp,
      Replay,
      Photo,
    },
    props: ['game', 'rankings'],
    data() {
      return {
        fields: [
          {key: 'rank', class: 'text-right'},
          {key: 'player'},
          {key: 'score', class: 'text-right score'},
          {key: 'stage', class: 'text-center stage'},
          {key: 'misc', class: 'text-left'},
          {key: 'comment', class: 'comment'}
        ],
      };
    },
    computed: {},
    methods: {
      itemsFor(ranking) {
        return ranking.scores.map(score => ({
          rank: score.rank,
          player: score.player,
          score: score.value,
          stage: score.stage,
          comment: score.comment,
          oneCC: score.oneCC,
          inp: score.inp,
          replay: score.replay,
          photo: score.photo,
        }));
      },
      rowClass(item, type) {
        if (!item || type !== 'row') return;
        if (item.rank % 2 === 1) return 'background-white'
      }
    }
  };
</script>

<style lang="scss">
  @import '../../assets/custom.scss';

  .cover {
    max-width: 150px;
  }

  .ranking-category {
    text-align: center;

    * {
      margin-right: 5px;
    }

    margin-bottom: 25px;
  }

  .ranking {
    margin-bottom: 50px;
  }

  tr.background-white {
    td {
      background: white !important;

      &:first-of-type {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      &:last-of-type {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }

  tr {
    line-height: 1;
  }

  .thClass {
    display: none;
  }

  .score {
    color: $primary;
  }

  .comment {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .stage {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .misc {
    * {
      margin-right: 5px;
    }
  }
</style>
