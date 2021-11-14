<template>
  <span>
    <client-only>
      <unicon
        class="align-middle"
        width="18"
        height="18"
        name="tag-alt"
        fill="royalblue"
      />
    </client-only>
    <span v-for="tag in tags" :key="tag.id">
      <nuxt-link
        :to="`/tag/${tag.id}/page/1`"
        class="align-middle mr-2 hover:opacity-70 duration-300"
      >
        #{{ tag.name }}
      </nuxt-link>
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
