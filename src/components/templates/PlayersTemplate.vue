<template>
  <div>
    <Title title="Joueurs"/>
    <b-table
      striped hover small outlined
      :fields="fields"
      :items="players"
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
      <template v-slot:cell(player)="data">
        <a :href="`/player/${data.value.id}`">{{ data.value.name }}</a>
      </template>
    </b-table>
  </div>
</template>

<script>
  import Title from '../atoms/Title.vue';

  export default {
    name: 'PlayersTemplate',
    components: {
      Title,
    },
    props: ['players'],
    data() {
      return {
        sortBy: 'Player',
        sortDesc: false,
        fields: [
          {key: 'player', sortable: true, sortByFormatted: player => player.name},
          {key: '1st', sortable: true, class: 'text-right'},
          {key: '2nd', sortable: true, class: 'text-right'},
          {key: '3rd', sortable: true, class: 'text-right'},
          {key: '1CC', sortable: true, class: 'text-right'},
          {key: 'scores', sortable: true, class: 'text-right'},
        ],
      }
    },
    computed: {
      isBusy: function () {
        return !this.players || this.players.length === 0
      },
    }
  };
</script>
