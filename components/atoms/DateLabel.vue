<template>
  <span>
    <span class="mr-1">📅 </span>
    <span>{{ formattedDate }}</span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'

export default Vue.extend({
  props: {
    date: { type: String, required: true }
  },
  computed: {
    formattedDate(): string {
      return dayjs(this.date).format('YYYY-MM-DD')
    }
  }
})
</script>

<style></style>
