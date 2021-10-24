<template>
  <div class="m-auto w-full min-h-screen sm:w-3/4">
    <div class="items-center justify-center">
      <h1 class="mb-2 break-words text-2xl font-bold sm:break-normal">
        {{ title }}
      </h1>
    </div>
    <div class="pb-2 w-full border-b">
      <div>
        <AnchorCategoty class="mr-2" :category="category" />
        <AnchorTag v-if="tags" :tags="tags" />
      </div>
      <DateLabel :date="publishedAt" />
    </div>
    <div class="px-2 py-4">
      <div class="prose" v-html="body" />
    </div>
    <div class="mt-2">
      <SnsShareButton :text="formattedTitle" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import MetaInfo from 'vue-meta'
import { BlogItem } from '../../types/blog/index'
import AnchorCategoty from '~/components/atoms/AnchorCategory.vue'
import AnchorTag from '~/components/atoms/AnchorTag.vue'
import DateLabel from '~/components/atoms/DateLabel.vue'
import SnsShareButton from '~/components/commons/SnsShareButton.vue'

interface AsyncData extends BlogItem {}

export default Vue.extend({
  components: {
    AnchorCategoty,
    AnchorTag,
    DateLabel,
    SnsShareButton
  },
  async asyncData({ params }): Promise<AsyncData | void> {
    const axiosInstance = axios.create({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.API_KEY as string
      }
    })
    const { data } = await axiosInstance.get<AsyncData>(
      `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/blog/${params.slug}`
    )
    return data
  },
  data(): AsyncData | undefined {
    return undefined
  },
  head(): MetaInfo {
    return {
      title: this.formattedTitle,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.formattedTitle },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.descriptionContent
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://halsea-blog.netlify.app/${this.id}/`
        }
      ]
    }
  },
  computed: {
    formattedTitle(): string {
      return `${this.title} | hal_sea_ / blog`
    },
    descriptionContent(): string {
      const content = this.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
      return content.length > 120 ? content.slice(0, 120) + '...' : content
    }
  }
})
</script>
