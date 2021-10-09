<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow justify-center items-center m-auto flex-col max-w-screen-lg">
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
