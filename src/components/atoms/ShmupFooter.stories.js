import ShmupFooter from "./ShmupFooter";
import {storiesOf} from '@storybook/vue';

storiesOf('Atoms/ShmupFooter', module)
  .add('Default', () => ({
    components: {ShmupFooter},
    template: `
      <shmup-footer games=123 players=345 scores=567></shmup-footer>`,
  }));
