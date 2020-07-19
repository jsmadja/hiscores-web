<template>
  <div id="app">
    <shmup-header url="/header.png"/>
    <nav-bar/>
    <div class="container mt-4">
      <router-view/>
    </div>
    <shmup-footer v-if="counts" :games="counts.gamesCount" :players="counts.playersCount" :scores="counts.scoresCount"
                  class="mt-3 mb-3"/>
  </div>
</template>

<script>

  import NavBar from "./components/organisms/NavBar";
  import ShmupHeader from "./components/atoms/ShmupHeader";
  import ShmupFooter from "./components/atoms/ShmupFooter";
  import {mapGetters} from 'vuex';

  export default {
    name: 'App',
    components: {
      NavBar, ShmupHeader, ShmupFooter,
    },
    computed: {
      ...mapGetters(['counts'])
    },
    created() {
      this.$store.dispatch('fetchCounts');
    },
  }
</script>

<style lang="scss">
  @import 'assets/custom.scss';
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
  @import './App.scss';
</style>
