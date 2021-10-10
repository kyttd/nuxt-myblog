<template>
  <div class="container flex justify-between mx-auto">
    <div class="w-full">
      <div class="flex items-center justify-between">
        <h1 class="text-base font-bold">
          📝 最新の記事
        </h1>
      </div>
      <div class="mt-2">
        <ul class="divide-y divide-gray-300 divide-opacity-25">
          <li v-for="content in contents" :key="content.id" class="py-2 px-4">
            <nuxt-link :to="`/${content.id}`">
              <p class="font-bold">
                {{ content.title }}
              </p>
            </nuxt-link>
            <p class="text-sm">
              カテゴリ: todo
            </p>
            <p class="text-sm">
              {{ content.createdAt }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="w-full lg:w-4/12 -mx-8 flex-col md:flex-row">
      <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white border rounded-sm shadow-sm">
        <p>プロフィールカード</p>
      </div>
      <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white border rounded-sm shadow-sm">
        <p>Twitter</p>
      </div>
      <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white border rounded-sm shadow-sm">
        <p>カテゴリー</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const { data } = await axios.get(
      `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/blog`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return data
  }
}
</script>
