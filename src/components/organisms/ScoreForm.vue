<template>
  <b-card>
    <b-form @submit="onInternalSubmit">
      <b-container fluid>
        <b-row no-gutters>
          <b-col lg="6" md="12" sm="12">
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="platform"
              label="Platform"
              label-for="platform"
            >
              <b-form-select
                id="platform"
                v-model="form.platform"
                :options="mappedPlatforms"
                required
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              v-if="game.modes.length > 0"
              id="mode"
              label="Mode"
              label-for="mode">
              <b-form-select
                id="mode"
                v-model="form.mode"
                :options="mappedModes"
                required
              />
            </b-form-group>
            <b-form-group label-cols-sm="3"
                          label-align-sm="right"
                          v-if="game.difficulties.length > 0"
                          id="difficulty"
                          label="Difficulty"
                          label-for="difficulty">
              <b-form-select
                id="difficulty"
                v-model="form.difficulty"
                :options="mappedDifficulties"
                required
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              v-if="game.ships.length > 0"
              id="ship"
              label="Ship"
              label-for="ship">
              <b-form-select
                id="ship"
                v-model="form.ship"
                :options="mappedShips"
                required
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="score_points"
              label="Score (pts)"
              label-for="score_points"
              v-if="!shouldShowTimerPanel"
            >
              <b-form-input
                id="score_points"
                v-model="form.value"
                type="text"
                required
                placeholder="123456"
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="score_minutes"
              label="Minutes"
              label-for="score_minutes"
              v-if="shouldShowTimerPanel"
            >
              <b-form-input
                id="score_minutes"
                v-model="form.minutes"
                type="number"
                maxlength="2" size="2" min="0" max="59"
                required
                placeholder="12"
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="score_seconds"
              label="Seconds"
              label-for="score_seconds"
              v-if="shouldShowTimerPanel"
            >
              <b-form-input
                id="score_seconds"
                v-model="form.seconds"
                type="number"
                maxlength="2" size="2" min="0" max="59"
                required
                placeholder="34"
              />
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="score_milliseconds"
              label="Milliseconds"
              label-for="score_milliseconds"
              v-if="shouldShowTimerPanel"
            >
              <b-form-input
                id="score_milliseconds"
                v-model="form.milliseconds"
                type="number"
                maxlength="2" size="2" min="0" max="59"
                required
                placeholder="56"
              />
            </b-form-group>
            <b-form-group
              v-if="game.stages.length > 0"
              label-cols-sm="3"
              label-align-sm="right"
              id="stage"
              label="Stage"
              label-for="stage"
            >
              <b-form-select
                id="stage"
                v-model="form.stage"
                :options="mappedStages"
                required
              />
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="comment"
              label="Comment"
              label-for="comment"
            >
              <b-form-textarea
                id="comment"
                v-model="form.comment"
                rows="8"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="photo"
              label="Photo"
              label-for="photo">
              <b-form-file
                v-model="form.photo"
                :state="Boolean(form.photo)"
                placeholder="Choose a photo or drop it here..."
                drop-placeholder="Drop photo here..."
              />
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="inp"
              label="Inp"
              label-for="inp"
            >
              <b-form-file v-model="form.inp"
                           :state="Boolean(form.inp)"
                           placeholder="Choose an inp or drop it here..."
                           drop-placeholder="Drop inp here..."/>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="replay"
              label="Replay"
              label-for="replay"
              description="Direct Link (hosts: Youtube, Dailymotion, ...)"
            >
              <b-form-input
                id="replay"
                v-model="form.replay"
                type="url"
                placeholder="http://"

              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button class="mb-3" type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </b-card>
</template>

<script>
  export default {
    components: {},
    props: ['game', 'onSubmit'],
    data() {
      return {
        form: {
          value: null,
          platform: null,
          stage: null,
          photo: null,
          inp: null,
          replay: null,
          comment: null,
          mode: null,
          difficulty: null,
          ship: null,
        },
      }
    },
    computed: {
      mappedStages: function () {
        return this.game.stages.map(stage => ({text: stage.name, value: stage.id}));
      },
      mappedPlatforms: function () {
        return this.game.platforms.map(platform => ({text: platform.name, value: platform.id}));
      },
      mappedModes: function () {
        return this.game.modes.map(mode => ({text: mode.name, value: mode.id}));
      },
      mappedDifficulties: function () {
        return this.game.difficulties.map(difficulties => ({
          text: difficulties.name,
          value: difficulties.id
        }));
      },
      mappedShips: function () {
        return this.game.ships.map(ship => ({text: ship.name, value: ship.id}));
      },
      shouldShowTimerPanel: function () {
        if (!this.game) {
          return false;
        }
        const mode = this.game.getModeById(this.form.mode);
        return mode && mode.scoreType === 'timer';
      },
    },
    methods: {
      onInternalSubmit(ev) {
        ev.preventDefault();
        this.onSubmit(this.form);
      },
    },
  }
</script>
