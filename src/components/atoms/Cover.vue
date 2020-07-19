<template>
  <b-card-img fluid :src="coverUrl()" :alt="alt"/>
</template>

<script>
  export default {
    name: "Cover",
    props: ['url', 'alt'],
    methods: {
      coverUrl() {
        if (this.url && this.url.indexOf('/') === 0) {
          return 'https://hiscores.shmup.com/' + this.url;
        }
        return this.url;
      }
    }
  }
</script>

<style scoped>

</style>
