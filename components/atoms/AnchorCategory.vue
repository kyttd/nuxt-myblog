<template>
  <span>
    <client-only>
      <unicon
        class="align-middle"
        width="18"
        height="18"
        name="folder-open"
        fill="royalblue"
      />
    </client-only>
    <nuxt-link v-if="category" :to="`/category/${category.id}/page/1`">
      <span class="align-middle hover:opacity-70 duration-300">
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
