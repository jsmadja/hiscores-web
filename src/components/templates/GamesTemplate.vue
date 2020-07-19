<template>
  <div>
    <Title title="Jeux"/>
    <b-table
      striped hover small outlined
      :fields="fields"
      :items="games"
      :busy="isBusy"
      :sort-by.sync="sortBy"
      sort-icon-right
      :sort-desc.sync="sortDesc"
      :sort-compare-options="{ numeric: true, sensitivity: 'base' }"
    >
      <template v-slot:table-busy>
        <div class="text-center">
          <b-spinner class="align-middle mr-3"/>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(cover)="data">
        <div class="cover-container">
          <b-img :src="data.value" class="cover"/>
        </div>
      </template>
      <template v-slot:cell(game)="data">
        <a :href="`/game/${data.value.id}`">{{ data.value.title }}</a>
      </template>
      <template v-slot:cell(platforms)="data">
        <platform
          v-for="(item) in data.value"
          :value="item"
          :key="item"
          class="mr-1"
        />
      </template>
    </b-table>
  </div>
</template>

<script>
  import Title from '../atoms/Title.vue';
  import Platform from "../atoms/Platform";

  export default {
    components: {
      Title, Platform
    },
    props: ['games'],
    data() {
      return {
        sortBy: 'game',
        sortDesc: false,
        fields: [
          {key: 'cover', sortable: false},
          {key: 'game', sortable: true, sortByFormatted: game => game.title, tdClass: 'game-row'},
          {key: 'platforms', sortable: true, class: 'text-left', tdClass: 'game-row'},
          {key: 'players', sortable: true, class: 'text-right', tdClass: 'game-row'},
          {key: 'scores', sortable: true, class: 'text-right', tdClass: 'game-row'},
          {key: '1CC', sortable: true, class: 'text-right', tdClass: 'game-row'},
        ],
      }
    },
    computed: {
      isBusy: function () {
        return !this.games || this.games.length === 0
      },
    },
    methods: {
      rowClass() {
        return 'rowClass';
      }
    }
  };
</script>
<style>
  .cover-container {
    overflow-y: hidden;
    height: 70px;
  }

  .cover {
    width: 100px;
  }

  .game-row {
    vertical-align: middle !important;
  }
</style>
