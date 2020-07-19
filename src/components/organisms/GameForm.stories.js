import GameForm from "./GameForm";
import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';

const methods = {
  handleSubmit: action('onSubmit'),
};

storiesOf('Organisms/GameForm', module)
  .add('Default', () => ({
    components: {GameForm},
    template: `
      <GameForm :platforms="platforms" :on-submit="handleSubmit"/>`,
    data: () => ({
      platforms: '3DS, AMIGA 500, AMIGA, AMSTRAD CPC, ANDROID, ARCADE, ATARI ST, C64, DC, DS, FDS, FM TOWNS, GB, GBA, GC, GG, IOS, MAME, MD MINI, MD, MEGA CD, MS, MSX, N64, NES, NG, NGCD, NGPC, OUYA, PC, PC-88, PC-98, PCB, PCE, PCECD, PS1, PS2, PS3, PS4, PSN, PSP, SAT, SGX, SMS, SNES, SWITCH, TAITO G-NET, VC, VECTREX, VITA, WII, WIIU, WINDOWS PHONE, WONDERSWAN, X360, X68000, XBOX, XONE, ZX SPECTRUM'.split(', '),
    }),
    methods
  }));
