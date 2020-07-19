import Difficulty from "./Difficulty";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/Difficulty', module)
  .add('With name', () => ({
    components: {Difficulty},
    template: `
            <difficulty :value="difficulty"/>`,
    data: () => ({
      difficulty: {
        id: 2333,
        createdAt: 1401630041000,
        updatedAt: 1401630041000,
        name: "EASY",
        sortOrder: 2333
      }
    })
  }))
  .add('Without name', () => ({
    components: {Difficulty},
    template: `
            <difficulty :value="difficulty"/>`,
    data: () => ({
      difficulty:
        {
          id: 2333,
          createdAt: 1401630041000,
          updatedAt: 1401630041000,
          sortOrder: 2333
        }
    })
  }));
