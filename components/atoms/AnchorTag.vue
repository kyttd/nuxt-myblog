<template>
  <span>
    <span class="mr-1">🔖 </span>
    <span v-for="tag in tags" :key="tag.id">
      <nuxt-link :to="`/tag/${tag.id}/page/1`"> #{{ tag.name }} </nuxt-link>
    </span>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
// import { TagItem } from '../../types/blog/index'

export default Vue.extend({
  props: {
    // TODO: PropTypeうまく使えないのでESlint周り修正する
    tags: { type: Array as PropType<any>, required: true }
  }
})
</script>
