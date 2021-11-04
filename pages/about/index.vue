<template>
  <div class="flex flex-wrap items-start m-auto w-full sm:w-3/4">
    <HeadingWithIcon
      class="mb-4"
      unicon-name="document-layout-left"
      title="このブログについて"
    />
    <div class="px-2 w-full">
      <p>
        主にプログラミング関連のアウトプットに使います(予定)。
        <br />
        あくまで予定なのでポエムっぽいものも書くかもしれないし、趣味について書くかもしれないし、ただの日記を書くかもしれません。
      </p>
      <h3 class="mb-2 mt-6 py-1 text-lg font-bold border-b">技術構成</h3>
      <p>このブログの技術構成はこんな感じです。</p>
      <ul class="my-2 px-6 list-disc">
        <li>Nuxt.js</li>
        <li>TypeScript</li>
        <li>microCMS</li>
        <li>Tailwindcss</li>
        <li>Netlify</li>
      </ul>
      <h3 class="mb-2 mt-6 py-1 text-lg font-bold border-b">ソースコード</h3>
      <p>GitHubに上げてますのでご参考まで</p>
      <a
        class="underline"
        href="https://github.com/kyttd/nuxt-myblog"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/kyttd/nuxt-myblog
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeadingWithIcon from '~/components/atoms/HeadingWithIcon.vue'

export default Vue.extend({
  components: {
    HeadingWithIcon
  }
})
</script>
