<template>
    <div class="index">
        <Card />
        <Chart />
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Chart from '@/components/Chart.vue';

export default {
  components: {
    Card,
    Chart,
  },
};
</script>
