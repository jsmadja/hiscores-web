import GamesTemplate from "./GamesTemplate";
import {storiesOf} from '@storybook/vue';

storiesOf('Templates/GamesTemplate', module)
  .add('Default', () => ({
    components: {GamesTemplate},
    template: `
      <GamesTemplate :games="games"/>`,
    data: () => ({
      games: [
        {
          cover: 'https://hiscores.shmup.com/covers/416.jpeg',
          game: {id: 1, title: 'Raiden'},
          platforms: ['PS1', 'PCB'],
          players: 5,
          scores: 11,
          '1CC': 3,
        }],
    })
  }));
