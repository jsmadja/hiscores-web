import Photo from "./Photo";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/Photo', module)
  .add('Default', () => ({
    components: {Photo},
    template: `
      <photo url="http://"/>`,
  }));
