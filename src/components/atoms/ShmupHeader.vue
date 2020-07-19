<template>
    <div class="shmup-header">
        <b-img :src="url"></b-img>
    </div>
</template>

<script>
    export default {
        name: "ShmupHeader",
        props: ['url']
    }
</script>

<style scoped lang="scss">
    .shmup-header {
        text-align: center;

        img {
            width: 100%;
        }
    }
</style>