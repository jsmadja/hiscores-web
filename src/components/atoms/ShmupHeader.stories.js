import ShmupHeader from "./ShmupHeader";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/ShmupHeader', module)
  .add('Default', () => ({
    components: {ShmupHeader},
    template: `
      <shmup-header url="https://hiscores.shmup.com/assets/images/Logo-Hiscore-Shmup.png"></shmup-header>`,
  }));
