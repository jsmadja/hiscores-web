import Replay from "./Replay";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/Replay', module)
  .add('Default', () => ({
    components: {Replay},
    template: `
      <replay url="http://"/>`,
  }));
