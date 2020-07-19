import HowToPostToShmup from "./HowToPostToShmup";
import {Game} from '../../models';
import {storiesOf} from '@storybook/vue';

storiesOf('Organisms/HowToPostToShmup', module)
  .add('Default', () => ({
    components: {HowToPostToShmup},
    template: `
            <how-to-post-to-shmup :score="score" :game="game"></how-to-post-to-shmup>`,
    data: () => ({
      score: {
        "id": 16278,
        "comment": "blah",
        "photo": null,
        "inp": null,
        "replay": "http://youtube.com",
        "value": 123400002,
        "onecc": true,
        "mode": 966,
        "difficulty": 551,
        "platform": 975,
        "progression": 65,
        "ship": 12,
        "rank": 5,
        "vip": true,
        "1CC": true,
        "createdSinceInFrench": "à l'instant",
        "timeScore": false,
        "gameTitle": "1945k III Arcade"
      },
      game: new Game({
        "id": 409,
        "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=13258",
        "cover": "/covers/14.jpg",
        "title": "[CAVE CARNIVAL 2015] Mushihimesama",
        "platforms": [
          {
            "id": 975,
            "name": "PCB"
          }
        ],
        "difficulties": [
          {
            "id": 551,
            "name": "ULTRA",
            "sortOrder": null
          }
        ],
        "modes": [
          {
            "id": 966,
            "name": "ARCADE Original",
            "sortOrder": null,
            "scoreType": "",
            "timerScore": false
          }
        ],
        "ships": [
          {
            "id": 12,
            "name": "Ship1",
          }
        ],
        "stages": [
          {
            "id": 6068,
            "name": "1",
            "sortOrder": 6068
          }
        ]
      })
    })
  }));
