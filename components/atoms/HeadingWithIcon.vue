<template>
  <h2 class="bg-blue-100 p-2 bg-opacity-50 border-0 rounded">
    <unicon class="align-middle" :name="uniconName" fill="royalblue" />
    <span class="align-middle text-lg font-bold">{{ title }}</span>
  </h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    uniconName: { type: String, required: true },
    title: { type: String, required: true }
  }
})
</script>
