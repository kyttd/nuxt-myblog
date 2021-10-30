<template>
  <div class="container flex flex-wrap justify-between mx-auto">
    <div class="mb-10 w-full sm:w-3/5">
      <ArticleList :articles="articles" />
    </div>
    <div class="justify-center m-auto w-full sm:m-0 sm:w-2/6">
      <CategoryList class="mb-10" :categories="categories" />
      <Tags class="mb-10" :tags="tags" />
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
import ArticleList from '~/components/articles/ArticleList.vue'
import CategoryList from '~/components/categories/CategoryList.vue'
import Tags from '~/components/tags/Tags.vue'

type AsyncData = {
  articles: BlogItem[]
  categories: CategoryItem[]
  tags: TagItem[]
}

export default Vue.extend({
  components: {
    ArticleList,
    CategoryList,
    Tags
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
