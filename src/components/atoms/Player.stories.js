import Player from "./Player";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/Player', module)
  .add('Default', () => ({
    components: {Player},
    template: `
      <player :player="player"/>`,
    data: () => ({
      player: {
        id: 2333,
        name: 'Mike',
      }
    })
  }));
