<template>
  <div>
    <h1 class="text-lg font-bold"><span class="mr-1">🗂</span>カテゴリ</h1>
    <div class="px-4">
      <ul class="divide-gray-300 divide-opacity-25 divide-y">
        <li v-for="category in categories" :key="category.id" class="px-4 py-2">
          <nuxt-link v-if="category" :to="`/category/${category.id}/page/1`">
            <span class="text-sm">
              {{ category.name }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    categories: { type: Array as PropType<any>, required: true }
  }
})
</script>
