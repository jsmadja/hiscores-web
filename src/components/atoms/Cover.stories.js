import {storiesOf} from '@storybook/vue';
import Cover from "./Cover";

storiesOf('Atoms/Cover', module)
  .add('Without hiscores prefix url', () => ({
    components: {Cover},
    template: `
            <cover url="/covers/151.jpg" alt="cover"/>`,
  }))
  .add('With full url', () => ({
    components: {Cover},
    template: `
            <cover url="https://nsa40.casimages.com/img/2019/10/18/191018104533607309.jpg" alt="cover"/>`,
  }))
  .add('Without url', () => ({
    components: {Cover},
    template: `
            <cover url="" alt="cover"/>`,
  }));
