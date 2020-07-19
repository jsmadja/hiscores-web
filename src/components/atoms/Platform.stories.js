import Platform from "./Platform";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/Platform', module)
  .add('Default', () => ({
    components: {Platform},
    template: `
      <platform :value="platform"/>`,
    data: () => ({
      platform: 'SMS'
    })
  }));
