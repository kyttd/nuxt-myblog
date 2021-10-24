<template>
  <div class="container flex justify-between mx-auto">
    <div class="w-full">
      <div class="flex items-center justify-between">
        <h1 class="text-base font-bold">📝 最新記事</h1>
      </div>
      <div class="mt-2">
        <ul class="divide-gray-300 divide-opacity-25 divide-y">
          <li v-for="content in contents" :key="content.id" class="px-4 py-2">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'
import { BlogItem, BlogIndexApiResponse } from '../types/blog/index'
import AnchorCategoty from '~/components/atoms/AnchorCategory.vue'
import AnchorTag from '~/components/atoms/AnchorTag.vue'
import DateLabel from '~/components/atoms/DateLabel.vue'

interface AsyncData extends BlogIndexApiResponse {}

export default Vue.extend({
  components: {
    AnchorCategoty,
    AnchorTag,
    DateLabel
  },
  async asyncData({ params }): Promise<AsyncData | void> {
    const axiosInstance = axios.create({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.API_KEY as string
      }
    })
    const page = params.p || '1'
    const categoryId = params.categoryId
    const tagId = params.tagId
    const limit = 20
    const { data } = await axiosInstance.get<BlogIndexApiResponse>(
      `https://${
        process.env.SERVICE_DOMAIN
      }.microcms.io/api/v1/blog?limit=${limit}${
        categoryId === undefined && tagId === undefined
          ? ''
          : categoryId !== undefined
          ? `&filters=category[equals]${categoryId}`
          : `&filters=tags[contains]${tagId}`
      }&offset=${(parseInt(page) - 1) * limit}`
    )
    return data
  },
  data(): AsyncData | undefined {
    return undefined
  }
})
</script>
