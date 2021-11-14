<template>
  <span>
    <client-only>
      <unicon
        class="align-middle"
        width="18"
        height="18"
        name="calender"
        fill="DarkSlateGray"
      />
    </client-only>
    <span class="align-middle">{{ formattedDate }}</span>
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
