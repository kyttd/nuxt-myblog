<template>
  <div>
    <h1 class="items-center text-lg font-bold">
      <span class="mr-1">📝</span>記事一覧
    </h1>
    <div class="">
      <ul
        class="
          divide-gray-300
          border-b
          divide-opacity-25 divide-y
          sm:border-b-0
        "
      >
        <li
          v-for="article in articles"
          :key="article.id"
          class="px-2 py-2 sm:px-4"
        >
          <nuxt-link :to="`/${article.id}`">
            <p class="py-2 font-bold">
              {{ article.title }}
            </p>
          </nuxt-link>
          <div class="flex flex-wrap items-start text-sm">
            <div class="items-start justify-center">
              <div class="mb-1">
                <AnchorCategoty class="mr-6" :category="article.category" />
                <AnchorTag
                  v-if="article.tags"
                  class="block sm:inline"
                  :tags="article.tags"
                />
              </div>
              <DateLabel :date="article.publishedAt" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import AnchorCategoty from '~/components/atoms/AnchorCategory.vue'
import AnchorTag from '~/components/atoms/AnchorTag.vue'
import DateLabel from '~/components/atoms/DateLabel.vue'

export default Vue.extend({
  components: {
    AnchorCategoty,
    AnchorTag,
    DateLabel
  },
  props: {
    articles: { type: Array as PropType<any>, required: true }
  }
})
</script>
