<template>
  <div class="container flex flex-wrap justify-between mx-auto">
    <div class="w-full sm:w-3/5">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-bold">📝 最新記事</h1>
      </div>
      <div class="mt-2">
        <ul class="divide-gray-300 divide-opacity-25 divide-y">
          <li v-for="content in articles" :key="content.id" class="px-4 py-2">
            <nuxt-link :to="`/${content.id}`">
              <p class="mb-1 font-bold">
                {{ content.title }}
              </p>
            </nuxt-link>
            <div class="flex flex-wrap items-start text-sm">
              <div class="items-start justify-center">
                <div class="mr-4">
                  <AnchorCategoty class="mr-2" :category="content.category" />
                  <AnchorTag v-if="content.tags" :tags="content.tags" />
                </div>
                <DateLabel :date="content.publishedAt" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="justify-center m-auto w-full sm:m-0 sm:w-2/6">
      <h1 class="text-lg font-bold"><span class="mr-1">🗂</span>カテゴリ</h1>
      <div class="mt-2">
        <ul class="divide-gray-300 divide-opacity-25 divide-y">
          <li
            v-for="category in categories"
            :key="category.id"
            class="px-4 py-2"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
      <h1 class="text-lg font-bold"><span class="mr-1">🔖</span>カテゴリ</h1>
      <div class="mt-2">
        <ul class="divide-gray-300 divide-opacity-25 divide-y">
          <li v-for="tag in tags" :key="tag.id" class="px-4 py-2">
            {{ tag.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import {
  BlogItem,
  CategoryItem,
  TagItem,
  BlogsApiResponse,
  CategoriesApiResponse,
  TagsApiResponse
} from '../types/blog/index'
import AnchorCategoty from '~/components/atoms/AnchorCategory.vue'
import AnchorTag from '~/components/atoms/AnchorTag.vue'
import DateLabel from '~/components/atoms/DateLabel.vue'

type AsyncData = {
  articles: BlogItem[]
  categories: CategoryItem[]
  tags: TagItem[]
}

export default Vue.extend({
  components: {
    AnchorCategoty,
    AnchorTag,
    DateLabel
  },
  async asyncData({ $config, params }): Promise<AsyncData | void> {
    const axiosInstance = axios.create({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': $config.apiKey as string
      }
    })

    let articles = null
    let categories = null
    let tags = null

    const page = params.p || '1'
    const categoryId = params.categoryId
    const tagId = params.tagId
    const limit = 20

    const blogRes = await axiosInstance.get<BlogsApiResponse>(
      `${$config.apiUrl}/blog?limit=${limit}${
        categoryId === undefined && tagId === undefined
          ? ''
          : categoryId !== undefined
          ? `&filters=category[equals]${categoryId}`
          : `&filters=tags[contains]${tagId}`
      }&offset=${(parseInt(page) - 1) * limit}`
    )
    articles = blogRes.data.contents

    const categoryRes = await axiosInstance.get<CategoriesApiResponse>(
      `${$config.apiUrl}/categories?limit=100`
    )
    categories = categoryRes.data.contents

    const tagRes = await axiosInstance.get<TagsApiResponse>(
      `${$config.apiUrl}/tags?limit=100`
    )
    tags = tagRes.data.contents
    console.log(tags)

    return { articles, categories, tags }
  },
  data(): AsyncData | undefined {
    return undefined
  }
})
</script>
