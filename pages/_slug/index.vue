<template>
  <div class="m-auto w-full min-h-screen sm:w-4/5">
    <div class="items-center justify-center mb-4">
      <h1
        class="
          text-center
          break-words
          text-2xl
          font-bold
          sm:break-normal sm:text-3xl sm:font-extrabold
        "
      >
        {{ article.title }}
      </h1>
    </div>
    <div class="mb-4 pb-4 w-full text-center border-b">
      <div class="mb-2">
        <AnchorCategoty class="mr-6" :category="article.category" />
        <AnchorTag
          v-if="article.tags"
          class="block sm:inline"
          :tags="article.tags"
        />
      </div>
      <DateLabel :date="article.publishedAt" />
    </div>
    <div
      v-if="isShowToc"
      class="mb-4 px-4 py-2 w-full bg-gray-100 border rounded"
    >
      <ul ref="toc" class="toc divide-y">
        <li class="py-2 font-bold">目次</li>
        <li v-for="item in toc" :key="item.id" class="py-2">
          <n-link v-scroll-to="`#${item.id}`" to>
            {{ item.text }}
          </n-link>
        </li>
      </ul>
    </div>
    <div class="px-2 py-4 sm:px-4">
      <div class="prose max-w-none" v-html="article.body" />
    </div>
    <div class="px-2 py-4 sm:px-4">
      <SnsShareButton :text="formattedTitle" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import MetaInfo from 'vue-meta'
import cheerio from 'cheerio'
import { BlogItem } from '../../types/blog/index'
import AnchorCategoty from '~/components/atoms/AnchorCategory.vue'
import AnchorTag from '~/components/atoms/AnchorTag.vue'
import DateLabel from '~/components/atoms/DateLabel.vue'
import SnsShareButton from '~/components/commons/SnsShareButton.vue'

interface AsyncData {
  article: BlogItem
  toc: any
}

export default Vue.extend({
  components: {
    AnchorCategoty,
    AnchorTag,
    DateLabel,
    SnsShareButton
  },
  async asyncData({ $config, params }): Promise<AsyncData | void> {
    const axiosInstance = axios.create({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': $config.apiKey as string
      }
    })

    let article = null

    const blogRes = await axiosInstance.get<BlogItem>(
      `${$config.apiUrl}/blog/${params.slug}`
    )
    article = blogRes.data

    const $ = cheerio.load(article.body)
    const headings = $('h1, h2, h3').toArray()
    const toc = headings.map((data) => ({
      text: (data.children[0] as any).data,
      id: data.attribs.id,
      name: data.name
    }))

    return { article, toc }
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
          content: `https://halsea-blog.netlify.app/${this.article.id}/`
        }
      ]
    }
  },
  computed: {
    formattedTitle(): string {
      return `${this.article.title} | hal_sea_ / blog`
    },
    descriptionContent(): string {
      const content = this.article.body.replace(
        /<("[^"]*"|'[^']*'|[^'">])*>/g,
        ''
      )
      return content.length > 120 ? content.slice(0, 120) + '...' : content
    },
    isShowToc(): boolean {
      return !!this.toc.length
    }
  }
})
</script>
