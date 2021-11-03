<template>
  <div>
    <HeadingWithIcon unicon-name="folder-open" title="カテゴリ" />
    <div class="px-2">
      <ul class="divide-y">
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
import HeadingWithIcon from '~/components/atoms/HeadingWithIcon.vue'

export default Vue.extend({
  components: {
    HeadingWithIcon
  },
  props: {
    categories: { type: Array as PropType<any>, required: true }
  }
})
</script>
