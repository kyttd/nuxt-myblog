<template>
  <div class="flex flex-wrap items-start w-full sm:w-3/4 m-auto">
    <div class="flex justify-center items-center">
      <h1 class="text-2xl font-bold mb-2">{{ title }}</h1>
    </div>
    <div class="w-full pb-2 border-b">
      <p class="publishedAt">
        📅  {{ publishedDate }}
      </p>
    </div>
    <div class="py-4 px-2">
      <div class="post" v-html="body"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'
import { BlogItem } from '../../types/blog/index'

interface AsyncData extends BlogItem {}

export default Vue.extend({
  async asyncData ({ params }):Promise<AsyncData | void> {
    console.log(params)
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
  computed: {
    publishedDate () {
      return dayjs(this.$data.publishedAt).format('YYYY-MM-DD')
    }
  }
})
</script>
