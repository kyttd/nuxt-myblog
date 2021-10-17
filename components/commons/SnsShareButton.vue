<template>
  <div>
    <div>
      <h2 class="font-bold">
        - シェアする -
      </h2>
      <ul class="flex flex-wrap">
        <!-- Twitter -->
        <li class="py-2">
          <a class="flex justify-center items-center" :href="twitterURL" target="_blank">
            <span><img src="~/assets/images/twitter.svg" alt="Twitter" width="24" height="24"></span>
          </a>
        </li>
        <!-- TODO: 一旦Twitterのみ -->
        <!-- Facebook -->
        <!-- <li>
          <a :href="facebookURL" target="_blank">
            <span><img v-lazy="require('~/assets/images/facebook.png')" alt="Facebook"></span>
            <span>シェア</span>
          </a>
        </li> -->
        <!-- LINE -->
        <!-- <li>
          <a :href="lineURL" target="_blank">
            <span><img v-lazy="require('~/assets/images/line.png')" alt="LINE"></span>
            <span>送る</span>
          </a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SnsShareButton',
  props: {
    text: { type: String, required: false, default: '' },
    hashTag: { type: String, required: false, default: '' }
  },
  computed: {
    url (): string {
      return `https://halsea-blog.netlify.app${this.$route.path}`
    },
    textAndHashTag (): string {
      return encodeURIComponent(`${this.text} ${this.hashTag}`)
    },
    // content () {
    //   return encodeURIComponent(`${this.text} ${this.url}`)
    // },
    twitterURL (): string {
      return `https://twitter.com/intent/tweet?url=${this.url}/&text=${this.textAndHashTag}`
    }
    // facebookURL() {
    //   return `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
    // },
    // lineURL() {
    //   return `https://line.me/R/msg/text/?${this.content}`;
    // }
  }
})
</script>
