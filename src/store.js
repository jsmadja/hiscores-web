import axios from 'axios';
import api from './api';
import {Game} from './models';

export default {
  state: {
    platforms: [],
    game: null,
    players: [],
    games: [],
    gamesNames: [],
    myPlatforms: [],
    myGames: [],
    myRecommendations: null,
    history: [],
    killList: [],
    counts: null,
    me: null,
    playerId: parseInt(localStorage.getItem('player_id'), 10),
    token: localStorage.getItem('token'),
  },
  actions: {
    async fetchCounts(context) {
      return axios.get(`${api.endpoint}/counts`).then(response => context.commit('fetchCounts', response.data));
    },
    async fetchPlayers(context) {
      return axios.get(`${api.endpoint}/players`).then(response => context.commit('fetchPlayers', response.data));
    },
    async fetchPlatforms(context) {
      return axios.get(`${api.endpoint}/platforms`).then(response => context.commit('fetchPlatforms', response.data));
    },
    async fetchGamesNames(context) {
      return axios.get(`${api.endpoint}/ui/games/names`).then(response => context.commit('fetchGamesNames', response.data.map(game => new Game({
        id: game.value0,
        title: game.value1
      }))));
    },
    async fetchGames(context) {
      return axios.get(`${api.endpoint}/games`).then(response => context.commit('fetchGames', response.data.map(game => new Game(game))));
    },
    async fetchGame(context, id) {
      return axios
        .get(`${api.endpoint}/games/${id}`)
        .then(response => context.commit('fetchGame', new Game(response.data)));
    },
    async fetchMyPlatforms(context) {
      return axios
        .get(`${api.endpoint}/players/${context.state.playerId}/platforms`)
        .then(response => context.commit('fetchMyPlatforms', response.data));
    },
    async fetchMe(context) {
      return axios
        .get(`${api.endpoint}/me`, {
          headers: {
            'X-Player-Id': context.state.playerId,
            'X-Token': context.state.token,
          },
        })
        .then(response => context.commit('fetchMe', response.data));
    },
    async fetchMyGames(context) {
      return axios
        .get(`${api.endpoint}/players/${context.state.playerId}/games`)
        .then(response => context.commit('fetchMyGames', response.data));
    },
    async fetchMyRecommendations(context) {
      return axios
        .get(`${api.endpoint}/players/${context.state.playerId}/recommendations`)
        .then(response => context.commit('fetchMyRecommendations', response.data));
    },
    async fetchHistory(context) {
      return axios
        .get(`${api.endpoint}/players/${context.state.playerId}/scores`)
        .then(response => context.commit('fetchHistory', response.data));
    },
    async fetchKillList(context) {
      return axios
        .get(`${api.endpoint}/players/${context.state.playerId}/kill-list`)
        .then(response => context.commit('fetchKillList', response.data));
    },
    async setPlayerId({commit}, playerId) {
      commit('setPlayerId', playerId);
    },
    async postScore(context, score) {
      const form = new FormData();
      Object.entries(score).filter(e => !!e[1]).forEach(e => form.append(e[0], e[1]));
      if (score.photo) form.append('photo', score.photo);
      if (score.inp) form.append('inp', score.inp);
      const config = {headers: {'content-type': 'multipart/form-data'}};
      return axios.post(`${api.endpoint}/me/scores`, form, config)
    },
    async postGame(context, game) {
      return axios.post(`${api.endpoint}/games`, game)
    }
  },

  mutations: {
    setPlayerId(state, playerId) {
      localStorage.setItem('player_id', playerId.toString());
      state.playerId = playerId;
    },
    setToken(state, token) {
      localStorage.setItem('token', token);
      state.token = token;
    },
    fetchCounts(state, counts) {
      state.counts = counts;
    },
    fetchPlatforms(state, platforms) {
      state.platforms = platforms;
    },
    fetchGame(state, game) {
      state.game = game;
    },
    fetchPlayers(state, players) {
      state.players = players;
    },
    fetchGames(state, games) {
      state.games = games;
    },
    fetchGamesNames(state, gamesNames) {
      state.gamesNames = gamesNames;
    },
    fetchMyPlatforms(state, myPlatforms) {
      state.myPlatforms = myPlatforms;
    },
    fetchMe(state, me) {
      state.me = me;
    },
    fetchMyGames(state, myGames) {
      state.myGames = myGames;
    },
    fetchMyRecommendations(state, myRecommendations) {
      state.myRecommendations = myRecommendations;
    },
    fetchHistory(state, history) {
      state.history = history;
    },
    fetchKillList(state, killList) {
      state.killList = killList;
    },
  },
  getters: {
    platforms(state) {
      return state.platforms;
    },
    game(state) {
      return state.game;
    },
    games(state) {
      return state.games;
    },
    players(state) {
      return state.players;
    },
    gamesNames(state) {
      return state.gamesNames;
    },
    myPlatforms(state) {
      return state.myPlatforms;
    },
    myGames(state) {
      return state.myGames;
    },
    myRecommendations(state) {
      return state.myRecommendations;
    },
    history(state) {
      return state.history;
    },
    killList(state) {
      return state.killList;
    },
    counts(state) {
      return state.counts;
    }
  },
};
