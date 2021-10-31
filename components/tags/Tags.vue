<template>
  <div>
    <h1 class="text-lg font-bold"><span class="mr-1">🔖</span>タグ</h1>
    <div class="mt-2 px-4">
      <span v-for="tag in tags" :key="tag.id" class="px-2 text-sm">
        <nuxt-link v-if="tag" :to="`/tag/${tag.id}/page/1`">
          #{{ tag.name }}
        </nuxt-link>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    tags: { type: Array as PropType<any>, required: true }
  }
})
</script>
