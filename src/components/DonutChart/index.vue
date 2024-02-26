<script setup lang="ts">
import {computed, ref} from "vue";
import {formatCurrency} from "../../helpers/FormatCurrency"
import DonutChart from "./DonutChart.vue";

const data = ref([
      {
        categoryName: "Laptops & PCs",
        currency: "$",
        quantity: 30,
        totalPrice: 95000
      },
      {
        categoryName: "Smartphones",
        currency: "$",
        quantity: 25,
        totalPrice: 80000
      },
      {
        categoryName: "Tablets & E-readers",
        currency: "$",
        quantity: 20,
        totalPrice: 75000
      },
      {
        categoryName: "Gaming Consoles",
        currency: "$",
        quantity: 15,
        totalPrice: 60000
      },
      {
        categoryName: "Wearables",
        currency: "$",
        quantity: 10,
        totalPrice: 50000
      },
      {
        categoryName: "Audio Devices",
        currency: "$",
        quantity: 5,
        totalPrice: 40000
      }
    ]),
    categoryNames = computed(() => data.value.map(item => item.categoryName)),
    categoryTotal = computed(() => data.value.map(item => item.totalPrice)),
    colors = ref(['#DB50B9', '#8932CE', '#C19DE6', '#E4CBDF', '#F0B1E3', '#AE86A6'])
</script>

<template>
  <v-container>
    <donut-chart
        :category-names="categoryNames"
        :category-total="categoryTotal"
    />

    <v-sheet class="category-reports">
      <v-sheet class="category-reports-list">
        <v-table density="comfortable">
          <thead>
          <tr>
            <th></th>
            <th>Category</th>
            <th>Number of Sales</th>
            <th>Total Sales</th>
          </tr>
          </thead>

          <tbody>
          <tr
              v-for="(item, i) in data"
              :key="i"
          >
            <td>
              <v-chip :style="{ backgroundColor: colors[i % colors.length] }"></v-chip>
            </td>
            <td>{{ item?.categoryName }}</td>
            <td>{{ item?.quantity }}</td>
            <td>{{ formatCurrency(item?.totalPrice, item?.currency) }}</td>
          </tr>
          </tbody>
        </v-table>
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  padding: 0;
}

.category-reports {
  overflow: inherit;
  border-radius: 8px;
  background: #FFF;
  padding: 0;

  .category-reports-list {
    margin: 32px 200px 0;


    thead {
      th {
        padding: 0;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0;
      }
    }

    tbody {
      td {
        padding: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0;
      }
    }

    .v-chip {
      position: relative;
      width: 24px;
      height: 24px;
      right: 16px;
      border-radius: 14px;
    }
  }
}
</style>