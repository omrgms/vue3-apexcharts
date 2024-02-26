<script setup lang="ts">
import DonutChart from "../components/DonutChart/index.vue";
</script>

<template>
  <v-sheet>
    <v-btn icon :href="'https://github.com/omrgms'" target="_blank">
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-sheet>

  <donut-chart/>
</template>

<style scoped lang="scss">
.v-sheet {
  display: flex;
  justify-content: end;

  .v-btn {
    margin: 16px 16px 0 0;
  }
}
</style>