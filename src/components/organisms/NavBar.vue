<template>
    <div>
        <b-navbar toggleable="lg" class="shmup-navbar" type="dark">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mx-auto">
                    <b-nav-item href="/score/new">Score</b-nav-item>
                    <b-nav-item href="/games">Games</b-nav-item>
                    <b-nav-item href="/players">Players</b-nav-item>
                    <b-nav-item href="/game/new">New Game</b-nav-item>
                    <b-nav-item right href="/me">User</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">
    .shmup-navbar {
        background: black;

        .nav-link {
            color: #8f929e;
            transition: all .2s ease-out;

            &:hover {
                color: #d4d3d5;
            }
        }

    }
</style>
