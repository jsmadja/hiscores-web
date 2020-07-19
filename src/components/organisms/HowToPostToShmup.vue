<template>
    <div>
        <h2>Ajoutez votre score sur shmup.com</h2>

        <h3>Etape 1</h3>
        <p>
            Copiez le texte ci-dessous
        </p>
        <b-alert show>
            <p v-if="score.mode" v-html="`Mode: [b]${mode.name}[/b]`"/>
            <p>
                Score: [b][color=#0000FF]<span v-html="score.formattedValue"/> <span
                    v-if="!score.isTimeScore">points</span>[/color][/b]
            </p>
            <p v-if="score.stage" v-html="`Stage: [b][color=#BF4000]${stage.name}[/color][/b]`"/>
            <p v-if="score.difficulty" v-html="`Difficulté: [b]${difficulty.name}[/b]`"/>
            <p v-if="score.ship" v-html="`Vaisseau: [b]${ship.name}[/b]`">
            <p v-html="`Support: [b]${platform.name}[/b]`">
            <p>
                Position : [b]<span v-html="score.rank"/> <span
                    v-if="score.progression != null && score.progression > 0" v-html="`+${score.progression}`"/>[/b]
            </p>
            <p v-if="score.comment" v-html="`Commentaire: [b]${score.comment}[/b]`"/>

            <p v-if="score.photo" v-html="`<br/>[img]${score.photo}[/img]`"/>

            <p v-if="score.replay" v-html="`<br/>${score.replay}`"/>
            <p>
                <br/>
                [size=85]Message généré depuis [url=http://hiscores.shmup.com]hiscores.shmup.com[/url].[/size]
                <br/>
                _______________________________________________
            </p>
        </b-alert>
        <h3>Etape 2</h3>
        <p v-html="`Cliquez sur l'image pour accéder directement au formulaire de saisie du topic de <b><a href='${game.post}'>${game.title}</a></b> et coller le message sélectionné à l'étape 1.`"/>

        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <a :href="game.post" class="thumbnail">
                    <img src="/shmup.png"/>
                </a>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HowToPostToShmup",
        props: ['score', 'game'],
        computed: {
            mode: function () {
                return this.game.getModeById(this.score.mode);
            },
            difficulty: function () {
                return this.game.getDifficultyById(this.score.difficulty);
            },
            ship: function () {
                return this.game.getShipById(this.score.ship);
            },
            stage: function () {
                return this.game.getStageById(this.score.stage);
            },
            platform: function () {
                return this.game.getPlatformById(this.score.platform);
            },
        }
    }
</script>

<style scoped>

</style>
