import Stage from "./Stage";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/Stage', module)
  .add('With name', () => ({
    components: {Stage},
    template: `
            <stage :value="stage"/>`,
    data: () => ({
      stage: {
        id: 2333,
        createdAt: 1401630041000,
        updatedAt: 1401630041000,
        name: "ALL",
        sortOrder: 2333
      }
    })
  }))
  .add('Without name', () => ({
    components: {Stage},
    template: `
            <stage :value="stage"/>`,
    data: () => ({
      stage:
        {
          id: 2333,
          createdAt: 1401630041000,
          updatedAt: 1401630041000,
          sortOrder: 2333
        }
    })
  }));
