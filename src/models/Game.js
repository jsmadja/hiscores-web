const _ = require('lodash');

class Game {
  constructor(opts) {
    this.title = '';
    this.id = null;
    this.platforms = [];
    this.modes = [];
    this.difficulties = [];
    this.ships = [];
    this.stages = [];
    this.post = '';
    Object.assign(this, opts);
    if (this.cover && this.cover.indexOf('/') === 0) {
      this.cover = 'https://hiscores.shmup.com' + this.cover;
    }
  }

  getModeById(id) {
    return _.find(this.modes, ['id', id]);
  }

  getStageById(id) {
    return _.find(this.stages, ['id', id]);
  }

  getShipById(id) {
    return _.find(this.ships, ['id', id]);
  }

  getDifficultyById(id) {
    return _.find(this.difficulties, ['id', id]);
  }

  getPlatformById(id) {
    return _.find(this.platforms, ['id', id]);
  }
}

module.exports = Game;
