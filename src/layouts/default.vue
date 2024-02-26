<script setup lang="ts">

import SidebarComponent from "@/components/SidebarComponent.vue";
</script>

<template>
  <v-app full-height>

    <v-card class="global-header">
      <v-img
      />
    </v-card>

    <app-bar/>
    <v-container fluid>
      <v-row class="mb-6 mt-6">
        <v-col sm="1" md="3">

        </v-col>
        <v-col sm="8" md="9">
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  <slot/>
</template>

<style scoped lang="scss">

</style>