<template>
  <div class="m-auto w-full sm:w-3/4 min-h-screen">
    <div class="justify-center items-center">
      <h1 class="break-words sm:break-normal text-2xl font-bold mb-2">
        {{ title }}
      </h1>
    </div>
    <div class="w-full pb-2 border-b">
      <p class="publishedAt">
        📅  {{ publishedDate }}
      </p>
    </div>
    <div class="py-4 px-2">
      <div class="prose" v-html="body"></div>
    </div>
    <div class="mt-2">
      <SnsShareButton :text="formatedTitle" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'
import MetaInfo from 'vue-meta'
import { BlogItem } from '../../types/blog/index'
import SnsShareButton from '~/components/commons/SnsShareButton.vue'

interface AsyncData extends BlogItem {}

export default Vue.extend({
  components: {
    SnsShareButton
  },
  async asyncData ({ params }):Promise<AsyncData | void> {
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
  data (): AsyncData | undefined {
    return undefined
  },
  head (): MetaInfo {
    return {
      title: this.formatedTitle,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.formatedTitle },
        { hid: 'og:description', property: 'og:description', content: this.descriptionContent },
        { hid: 'og:url', property: 'og:url', content: `https://halsea-blog.netlify.app/${this.id}/` }
      ]
    }
  },
  computed: {
    publishedDate (): string {
      return dayjs(this.publishedAt).format('YYYY-MM-DD')
    },
    formatedTitle (): string {
      return `${this.title} | hal_sea_ / blog`
    },
    descriptionContent (): string {
      const content = this.body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
      return content.length > 120 ? content.slice(0, 120) + '...' : content
    }
  }
})
</script>
