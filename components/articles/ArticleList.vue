<template>
  <div>
    <HeadingWithIcon unicon-name="file-edit-alt" title="記事一覧" />
    <div>
      <ul class="border-b divide-y sm:border-b-0">
        <li v-for="article in articles" :key="article.id" class="py-1">
          <div
            class="
              hover:bg-blue-50
              px-2
              py-1
              bg-opacity-20
              border-0
              rounded
              sm:px-4
            "
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
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import HeadingWithIcon from '~/components/atoms/HeadingWithIcon.vue'
import AnchorCategoty from '~/components/atoms/AnchorCategory.vue'
import AnchorTag from '~/components/atoms/AnchorTag.vue'
import DateLabel from '~/components/atoms/DateLabel.vue'

export default Vue.extend({
  components: {
    HeadingWithIcon,
    AnchorCategoty,
    AnchorTag,
    DateLabel
  },
  props: {
    articles: { type: Array as PropType<any>, required: true }
  }
})
</script>
