import Mode from "./Mode";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/Mode', module)
  .add('With name', () => ({
    components: {Mode},
    template: `
      <Mode :value="mode"/>`,
    data: () => ({
      mode: {
        id: 2333,
        createdAt: 1401630041000,
        updatedAt: 1401630041000,
        name: "ARCADE",
        sortOrder: 2333
      }
    })
  }))
  .add('Without name', () => ({
    components: {Mode},
    template: `
      <Mode :value="mode"/>`,
    data: () => ({
      mode:
        {
          id: 2333,
          createdAt: 1401630041000,
          updatedAt: 1401630041000,
          sortOrder: 2333
        }
    })
  }));
