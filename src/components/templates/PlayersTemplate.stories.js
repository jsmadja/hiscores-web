import PlayersTemplate from "./PlayersTemplate";
import {storiesOf} from '@storybook/vue';

storiesOf('Templates/PlayersTemplate', module)
  .add('Default', () => ({
    components: {PlayersTemplate},
    template: `
      <PlayersTemplate :players="players"/>`,
    data: () => ({
      players: [
        {player: {id: 1, name: '2a03'}, '1st': 101, '2nd': 43, '3rd': 19, '1CC': 195, Scores: 199},
        {player: {id: 2, name: 'yace'}, '1st': 87, '2nd': 44, '3rd': 29, '1CC': 173, Scores: 253},
        {player: {id: 3, name: 'M.Knight'}, '1st': 73, '2nd': 30, '3rd': 22, '1CC': 78, Scores: 193},
      ],
    })
  }));
