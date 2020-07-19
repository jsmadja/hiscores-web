<template>
  <div>
    <template v-for="item in items">
      <timeline-item :key="item.id" :item="item"></timeline-item>
    </template>
  </div>
</template>

<script>
  import TimelineItem from '../organisms/TimelineItem.vue';

  export default {
    name: "Timeline",
    props: ['items'],
    components: {
      TimelineItem,
    }
  }
</script>

<style scoped>

</style>
