import OneCC from "./OneCC";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/OneCC', module)
  .add('Default', () => ({
    components: {OneCC},
    template: `
      <one-c-c/>`,
  }));
