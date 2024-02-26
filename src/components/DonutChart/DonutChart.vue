<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  categoryNames: {type: Array, default: []},
  categoryTotal: {type: Array, default: []}
})

const donutChartOptions = computed(() => {
  return {
    chart: {
      type: 'pie',
      height: 600,
      fontFamily: `inherit`,
      foreColor: '#adb0bb'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        expandOnClick: true,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '18',
              fontWeight: 'semi-bold',
              color: '#000'
            },
            value: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
              color: '#000',
              formatter: function (value) {
                const formattedValue = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(value);
                return formattedValue;
              }
            },
            total: {
              show: true,
              showAlways: false,
              label: 'Total',
              fontSize: '22px',
              fontWeight: 600,
              color: '#000',
              formatter: function (w) {
                let total = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
                const formattedValue = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                }).format(total);
                return formattedValue;
              }
            }
          },
        }
      }
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    colors: ['#DB50B9', '#8932CE', '#C19DE6', '#E4CBDF', '#F0B1E3', '#AE86A6'],
    labels: props.categoryNames,
    tooltip: {
      enabled: false
    },
    series: props.categoryTotal || [],
    fill: {
      type: 'gradient'
    }
  }

})
</script>

<template>
  <v-sheet class="category-donut-chart">
    <apexchart
        type="donut" width="400" height="400"
        :options="donutChartOptions"
        :series="donutChartOptions.series"
    />
  </v-sheet>
</template>

<style scoped lang="scss">
.category-donut-chart {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(text) {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  padding: 2rem;

  &:last-child {
    font-weight: 700;
  }
}
</style>