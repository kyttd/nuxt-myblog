<template>
  <div class="container flex justify-between mx-auto">
    <div class="w-full">
      <div class="flex items-center justify-between">
        <h1 class="text-base font-bold">
          📝 最新記事
        </h1>
      </div>
      <div class="mt-2">
        <ul class="divide-y divide-gray-300 divide-opacity-25">
          <li v-for="content in contents" :key="content.id" class="py-2 px-4">
            <nuxt-link :to="`/${content.id}`">
              <p class="font-bold mb-1">
                {{ content.title }}
              </p>
            </nuxt-link>
            <div class="flex flex-wrap items-start">
              <div class="justify-center items-start">
                <div class="mr-4">
                  <span>🗂 </span>
                  <nuxt-link v-if="content.category" :to="`/category/${content.category.id}/page/1`">
                    <span class="text-sm">
                      {{ content.category.name }}
                    </span>
                  </nuxt-link>
                  <template v-if="content.tags">
                    <span>🔖 </span>
                    <span v-for="tag in content.tags" :key="tag.id" class="text-sm">
                      #{{ tag.name }}
                    </span>
                  </template>
                </div>
                <span class="text-sm">
                  📅  {{ publishedDate(content) }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'
import { BlogItem, BlogIndexApiResponse } from '../types/blog/index'

interface AsyncData extends BlogIndexApiResponse {}

export default Vue.extend({
  async asyncData ({ params }):Promise<AsyncData | void> {
    const axiosInstance = axios.create({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.API_KEY as string
      }
    })
    const page = params.p || '1'
    const categoryId = params.categoryId
    const limit = 20
    const { data } = await axiosInstance.get<BlogIndexApiResponse>(
      `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/blog?limit=${limit}${
        categoryId === undefined ? '' : `&filters=category[equals]${categoryId}`
      }&offset=${(parseInt(page) - 1) * limit}`
    )
    return data
  },
  data (): AsyncData | undefined {
    return undefined
  },
  computed: {
    publishedDate () {
      return function (content: BlogItem) {
        return dayjs(content.publishedAt).format('YYYY-MM-DD')
      }
    }
  }
})
</script>
