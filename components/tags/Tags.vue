<template>
  <div>
    <HeadingWithIcon unicon-name="tag-alt" title="タグ" />
    <div class="mt-2 px-2">
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
import HeadingWithIcon from '~/components/atoms/HeadingWithIcon.vue'

export default Vue.extend({
  components: {
    HeadingWithIcon
  },
  props: {
    tags: { type: Array as PropType<any>, required: true }
  }
})
</script>
