import TimelineItem from "./TimelineItem";
import {storiesOf} from '@storybook/vue';

storiesOf('Organisms/TimelineItem', module)
  .add('Default', () => ({
    components: {TimelineItem},
    template: `
            <timeline-item :item="item"></timeline-item>`,
    data: () => ({
      item: {
        "score": {
          "id": 16099,
          "createdAt": 1577198070000,
          "updatedAt": 1577198071000,
          "comment": "",
          "photo": "http://hiscores.shmup.com/photos/1577198070856-DariusBurstPSPArcadeNormalNextShipALL.jpg",
          "inp": null,
          "replay": "",
          "value": 26977600,
          "onecc": true,
          "progression": null,
          "rank": 9,
          "vip": true,
          "1CC": true,
          "createdSinceInFrench": "il y a 2 mois",
          "timeScore": false,
          "gameTitle": "Darius Burst Arcade Normal"
        },
        "game": {
          "id": 151,
          "createdAt": 1401630040000,
          "updatedAt": 1401630040000,
          "thread": "http://forum.shmup.com/viewtopic.php?f=20&t=11970",
          "cover": "/covers/151.jpg",
          "title": "Darius Burst",
          "generalRanking": false,
          "platforms": [{"id": 368, "createdAt": 1401630040000, "updatedAt": 1401630040000, "name": "PSP"}],
          "difficulties": [{
            "id": 221,
            "createdAt": 1401630040000,
            "updatedAt": 1401630040000,
            "name": "Normal",
            "sortOrder": "221"
          }, {
            "id": 222,
            "createdAt": 1401630040000,
            "updatedAt": 1401630040000,
            "name": "Hard",
            "sortOrder": "222"
          }],
          "modes": [{
            "id": 300,
            "createdAt": 1401630041000,
            "updatedAt": 1401630041000,
            "name": "Arcade",
            "sortOrder": "300",
            "scoreType": "",
            "timerScore": false
          }, {
            "id": 301,
            "createdAt": 1401630041000,
            "updatedAt": 1401630041000,
            "name": "Burst",
            "sortOrder": "301",
            "scoreType": "",
            "timerScore": false
          }, {
            "id": 879,
            "createdAt": 1440791680000,
            "updatedAt": 1440791680000,
            "name": "Arcade Origin",
            "sortOrder": "301",
            "scoreType": null,
            "timerScore": false
          }],
          "ships": [{
            "id": 80,
            "createdAt": 1385858213000,
            "updatedAt": 1385858213000,
            "name": "Legend",
            "sortOrder": "1"
          }, {
            "id": 81,
            "createdAt": 1390597531000,
            "updatedAt": 1391677259000,
            "name": "Next",
            "sortOrder": "2"
          }, {
            "id": 82,
            "createdAt": 1385858213000,
            "updatedAt": 1385858213000,
            "name": "Origin",
            "sortOrder": "3"
          }],
          "stages": [{
            "id": 2328,
            "createdAt": 1401630041000,
            "updatedAt": 1401630041000,
            "name": "1",
            "sortOrder": 2328
          }, {
            "id": 2329,
            "createdAt": 1401630041000,
            "updatedAt": 1401630041000,
            "name": "2",
            "sortOrder": 2329
          }, {
            "id": 2330,
            "createdAt": 1401630041000,
            "updatedAt": 1401630041000,
            "name": "3",
            "sortOrder": 2330
          }, {
            "id": 2331,
            "createdAt": 1401630041000,
            "updatedAt": 1401630041000,
            "name": "4",
            "sortOrder": 2331
          }, {
            "id": 2332,
            "createdAt": 1401630041000,
            "updatedAt": 1401630041000,
            "name": "5",
            "sortOrder": 2332
          }, {
            "id": 2333,
            "createdAt": 1401630041000,
            "updatedAt": 1401630041000,
            "name": "ALL",
            "sortOrder": 2333
          }],
          "escapedTitle": "Darius_Burst",
          "coverType": "image/jpeg",
          "oneCreditCount": 20
        },
        "mode": {
          "id": 300,
          "createdAt": 1401630041000,
          "updatedAt": 1401630041000,
          "name": "Arcade",
          "sortOrder": "300",
          "scoreType": "",
          "timerScore": false
        },
        "difficulty": {
          "id": 221,
          "createdAt": 1401630040000,
          "updatedAt": 1401630040000,
          "name": "Normal",
          "sortOrder": "221"
        },
        "platform": {"id": 368, "createdAt": 1401630040000, "updatedAt": 1401630040000, "name": "PSP"},
        "stage": {
          "id": 2333,
          "createdAt": 1401630041000,
          "updatedAt": 1401630041000,
          "name": "ALL",
          "sortOrder": 2333
        },
        "ship": {
          "id": 81,
          "createdAt": 1390597531000,
          "updatedAt": 1391677259000,
          "name": "Next",
          "sortOrder": "2"
        },
        "player": {
          "id": 1462,
          "createdAt": 1480605919000,
          "updatedAt": 1480605919000,
          "name": "mutmut02",
          "shmupUserId": 34401,
          "hideMedals": false,
          "vip": true,
          "lastScore": {
            "id": 16239,
            "createdAt": 1581944882000,
            "updatedAt": 1581970602000,
            "comment": "Autofire ON",
            "photo": "http://hiscores.shmup.com/photos/1581944882723-ScrambleSpiritsSMSPAL60Hz36AutofireON11.jpg",
            "inp": null,
            "replay": "",
            "value": 6943500,
            "onecc": true,
            "progression": null,
            "rank": 1,
            "vip": true,
            "1CC": true,
            "createdSinceInFrench": "il y a 1 semaine",
            "timeScore": false,
            "gameTitle": "Scramble Spirits Others"
          },
          "authenticated": true
        }
      },
    })
  }));
