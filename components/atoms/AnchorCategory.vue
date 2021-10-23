<template>
  <span>
    <span>🗂 </span>
    <nuxt-link v-if="category" :to="`/category/${category.id}/page/1`">
      <span>
        {{ category.name }}
      </span>
    </nuxt-link>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
// import { CategoryItem } from '../../types/blog/index'

export default Vue.extend({
  props: {
    // TODO: PropTypeうまく使えないのでESlint周り修正する
    category: { type: Object as PropType<any>, required: true }
  }
})
</script>
