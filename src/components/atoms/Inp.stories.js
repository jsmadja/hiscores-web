import Inp from "./Inp";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/Inp', module)
  .add('Default', () => ({
    components: {Inp},
    template: `
      <inp url="http://"/>`,
  }));
