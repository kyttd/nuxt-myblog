<template>
  <div class="mb-4 px-4 py-2 w-full bg-gray-100 border rounded">
    <ul ref="toc" class="toc divide-y">
      <li class="py-2 font-bold">
        <unicon
          class="align-middle mr-1"
          width="18"
          height="18"
          name="list-ul"
          fill="royalblue"
        />
        <span class="align-middle">目次</span>
      </li>
      <li v-for="item in tocList" :key="item.id" class="py-2">
        <nuxt-link v-scroll-to="`#${item.id}`" to>
          <span :class="tocStyle(item.name)">- {{ item.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    tags: { type: Array as PropType<any>, required: true },
    tocList: { type: Array as PropType<any>, required: true }
  },
  computed: {
    tocStyle() {
      return function (name: string): string | undefined {
        switch (name) {
          case 'h2':
            return 'ml-2 font-semibold'
          case 'h3':
            return 'ml-4'
          case 'h4':
            return 'ml-6'
        }
      }
    }
  }
})
</script>
