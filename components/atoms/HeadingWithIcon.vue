<template>
  <h2 class="p-2 w-full bg-blue-100 bg-opacity-50 border-0 rounded">
    <client-only>
      <unicon class="align-middle" :name="uniconName" fill="royalblue" />
    </client-only>
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
