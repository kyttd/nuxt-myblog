<template>
  <div class="container flex justify-between mx-auto">
    <div class="w-full lg:w-8/12">
      <div class="px-10 py-6 mx-auto bg-white border rounded-sm shadow-sm">
        <ul>
          <li v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/${content.id}`">
              {{ content.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full lg:w-4/12 -mx-8 flex-col md:flex-row">
      <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white border rounded-sm shadow-sm">
        <p>プロフィールカード</p>
      </div>
      <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white border rounded-sm shadow-sm">
        <p>Twitter</p>
      </div>
      <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white border rounded-sm shadow-sm">
        <p>カテゴリー</p>
      </div>
    </div>
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
