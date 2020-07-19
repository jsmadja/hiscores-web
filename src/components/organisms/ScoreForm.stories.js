import ScoreForm from "./ScoreForm";
import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {Game} from '../../models';

const methods = {
  handleSubmit: action('onSubmit'),
};

const game =
  new Game({
    "id": 172,
    "createdAt": 1408104898000,
    "updatedAt": 1408104898000,
    "thread": "http://forum.shmup.com/viewtopic.php?t=8620&f=20",
    "cover": "/covers/172.jpg",
    "title": "Strikers 1945 PLUS",
    "generalRanking": false,
    "platforms": [
      {
        "id": 401,
        "createdAt": 1408104898000,
        "updatedAt": 1408104898000,
        "name": "NG"
      },
      {
        "id": 402,
        "createdAt": 1408104898000,
        "updatedAt": 1408104898000,
        "name": "PCB"
      }
    ],
    "difficulties": [],
    "modes": [],
    "ships": [],
    "stages": [
      {
        "id": 2603,
        "createdAt": 1408104898000,
        "updatedAt": 1408104898000,
        "name": "1-1",
        "sortOrder": 0
      },
      {
        "id": 2604,
        "createdAt": 1408104898000,
        "updatedAt": 1408104898000,
        "name": "1-2",
        "sortOrder": 1
      }
    ],
    "escapedTitle": "Strikers_1945_PLUS",
    "coverType": "image/jpeg",
    "oneCreditCount": 3
  });

function addModes(game) {
  game.modes = [
    {
      "id": 4,
      "createdAt": 1385836582000,
      "updatedAt": 1385836582000,
      "name": "WAIT ON",
      "sortOrder": "4",
      "scoreType": "",
    },
    {
      "id": 5,
      "createdAt": 1385836582000,
      "updatedAt": 1385836582000,
      "name": "WAIT OFF",
      "sortOrder": "5",
      "scoreType": "",
    }
  ];
}

function addDifficulties(game) {
  game.difficulties =
    [
      {
        "id": 542,
        "createdAt": 1443874710000,
        "updatedAt": 1443874713000,
        "name": "Accel",
        "sortOrder": "7"
      },
      {
        "id": 8,
        "createdAt": 1385836582000,
        "updatedAt": 1385836582000,
        "name": "Heaven",
        "sortOrder": "8"
      }
    ];
}

function addShips(game) {
  game.ships = [
    {
      "id": 164,
      "createdAt": 1440105198000,
      "updatedAt": 1440105203000,
      "name": "Type A Shot",
      "sortOrder": "0"
    },
    {
      "id": 165,
      "createdAt": 1440104969000,
      "updatedAt": 1440104969000,
      "name": "Type A Laser",
      "sortOrder": "1"
    }
  ];
}

storiesOf('Organisms/ScoreForm', module)
  .add('Minimal form', () => ({
    components: {ScoreForm},
    template: `
            <score-form :game="game" :onSubmit="handleSubmit"/>`,
    data: () => ({game}),
    methods,
  }))
  .add('Minimal Timer Game form', () => ({
    components: {ScoreForm},
    template: `
            <score-form :game="game" :onSubmit="handleSubmit"/>`,
    data: () => {
      const _game = new Game(JSON.parse(JSON.stringify(game)));
      addModes(_game);
      _game.modes[0].scoreType = 'timer';
      return {game: _game};
    },
    methods,
  }))
  .add('With modes', () => ({
    components: {ScoreForm},
    template: `
            <score-form :game="game" :onSubmit="handleSubmit"/>`,
    data: () => {
      const _game = new Game(JSON.parse(JSON.stringify(game)));
      addModes(_game);
      return {game: _game};
    },
    methods,
  }))
  .add('With difficulties', () => ({
    components: {ScoreForm},
    template: `
            <score-form :game="game" :onSubmit="handleSubmit"/>`,
    data: () => {
      const _game = new Game(JSON.parse(JSON.stringify(game)));
      addDifficulties(_game);
      return {game: _game};
    },
    methods,
  }))
  .add('With ships', () => ({
    components: {ScoreForm},
    template: `
            <score-form :game="game" :onSubmit="handleSubmit"/>`,
    data: () => {
      const _game = new Game(JSON.parse(JSON.stringify(game)));
      addShips(_game);
      return {game: _game};
    },
    methods,
  }))
  .add('With all', () => ({
    components: {ScoreForm},
    template: `
            <score-form :game="game" :onSubmit="handleSubmit"/>`,
    data: () => {
      const _game = new Game(JSON.parse(JSON.stringify(game)));
      addModes(_game);
      addDifficulties(_game);
      addShips(_game);
      return {game: _game};
    },
    methods,
  }));
