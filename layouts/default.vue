<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-navy-mad">
    <Header />
    <main class="container flex-grow mx-auto px-4 py-4 sm:px-6 sm:py-8 text-sm sm:text-base max-w-screen-lg">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/commons/Header.vue'
import Footer from '~/components/commons/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>
