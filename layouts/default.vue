<template>
  <div class="bg-gray-50 flex flex-col min-h-screen text-navy-mad">
    <Header />
    <main
      class="
        container
        flex-grow
        mx-auto
        px-4
        py-4
        max-w-screen-lg
        text-sm
        sm:px-6 sm:py-8 sm:text-base
      "
    >
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
