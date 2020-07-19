import NavBar from "./NavBar";
import {storiesOf} from '@storybook/vue';

storiesOf('Organisms/NavBar', module)
  .add('Default', () => ({
    components: {NavBar},
    template: `<nav-bar />`,
  }));
