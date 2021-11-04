<template>
  <header>
    <div class="flex m-auto px-4 py-5 max-w-screen-lg border-b">
      <div class="flex items-center mr-6 hover:opacity-70 duration-300">
        <nuxt-link class="block" :to="'/'">
          <span class="text-xl font-semibold tracking-tight">
            hal_sea_ / blog
          </span>
        </nuxt-link>
      </div>
      <div class="flex items-center px-4">
        <nuxt-link :to="'/about'">
          <span class="font-sm mr-5 hover:opacity-70 duration-300">
            about
          </span>
        </nuxt-link>
        <nuxt-link :to="'/profile'">
          <span class="font-sm mr-5 hover:opacity-70 duration-300">
            profile
          </span>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
