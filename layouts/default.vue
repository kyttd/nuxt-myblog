<template>
  <div>
    <Header />
    <main class="flex flex-1 justify-center items-center m-auto flex-col max-w-6xl min-h-screen">
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
