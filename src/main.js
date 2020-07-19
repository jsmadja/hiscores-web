import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import store from './store';

import './plugins/bootstrap-vue'
import App from './App.vue'
import AddScorePage from "./pages/AddScorePage";
import GamesPage from "./pages/GamesPage";
import GamePage from "./pages/GamePage";
import PlayersPage from "./pages/PlayersPage";
import AddNewGamePage from "./pages/AddNewGamePage";
import filters from "./filters";

import './assets/custom.scss'

Vue.config.productionTip = true;

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.filter('formatPercent', filters.formatPercent);
Vue.filter('formatNumber', filters.formatNumber);
Vue.filter('formatRank', filters.formatRank);
Vue.filter('formatDate', filters.formatDate);

const routes = [
  {path: '/game/:id/new_score', component: AddScorePage},
  {path: '/platforms/:id', component: undefined, name: 'platform'},
  {path: '/game/new', component: AddNewGamePage},
  {path: '/game/:id', component: GamePage, name: 'game'},
  {path: '/games', component: GamesPage},
  {path: '/players', component: PlayersPage},
  {path: '/score/new', component: AddScorePage},
  {path: '/', component: AddScorePage},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  store: new Vuex.Store(store),
  router,
}).$mount('#app');
