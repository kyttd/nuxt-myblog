<template>
  <div class="flex flex-wrap justify-between">
    <div
      class="mb-6 pb-6 w-full border-b sm:mb-0 sm:pb-0 sm:w-3/5 sm:border-none"
    >
      <HeadingWithIcon
        class="mb-4"
        unicon-name="user-circle"
        title="プロフィール"
      />
      <div class="px-2 w-full">
        <h3 class="mb-2 py-1 text-lg font-bold border-b">書いてる人</h3>
        <p>
          ハル(@hal_sea_)と申します。都内でWebエンジニアをやっています。1992年生まれの男です。
        </p>
        <h3 class="mb-2 mt-6 py-1 text-lg font-bold border-b">経歴</h3>
        <ul class="mb-2 px-6 list-disc">
          <li>1992年9月 東京生まれ</li>
          <li>2016年4月〜 大学卒業後、金融系の会社で法人営業を4年ほど</li>
          <li>2020年4月〜 受託/SES系企業でエンジニアデビュー</li>
          <li>2021年9月〜 住まい系の自社サービス企業に転職</li>
        </ul>
        <p>
          現在は主にNuxt.jsでフロントエンド周りを触ることが多いです。個人開発でNext.js/React触ったりもしてます。まだまだ修行中の身。
        </p>
        <p>エンジニア一年経った時に↓こんな記事をQiitaに書きました。</p>
        <a
          class="underline"
          href="https://qiita.com/hal_sea_/items/03284efc23e9c769c7f8"
          target="_blank"
          rel="noopener noreferrer"
        >
          実務未経験でエンジニア転職してから1年経過した話（Qiita）
        </a>
        <h3 class="mb-2 mt-6 py-1 text-lg font-bold border-b">
          業務で使用したことのある技術
        </h3>
        <p>
          Ruby on Rails, Laravel, Python, Zend Framework, React, Vue.js,
          Nuxt.js, JavaScript, TypeScript, jQuery, AWS, Docker etc…
        </p>
        <p>
          浅く広く色々触ってます。当面はJS/TS辺りを鍛えてフロントエンド周り強くなりたいと思ってます。
        </p>
        <h3 class="mb-2 mt-6 py-1 text-lg font-bold border-b">好きなもの</h3>
        <ul class="mb-2 px-6 list-disc">
          <li>
            音楽/映画
            <ul>
              <li>オルタナ系の音楽とかA24系の映画とか好きです。</li>
            </ul>
          </li>
          <li>
            お笑い
            <ul>
              <li>空気階段が好きです。祝キングオブコントチャンピオン。</li>
            </ul>
          </li>
          <li>
            サウナ
            <ul>
              <li>高温多湿で空いてる所が好きです。（あんまりないですが…）</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="justify-center m-auto w-full sm:m-0 sm:w-2/6">
      <HeadingWithIcon
        class="mb-4"
        unicon-name="twitter-alt"
        title="最新ツイート"
      />
      <Timeline
        :id="userId"
        source-type="profile"
        :options="{ tweetLimit: '4' }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Timeline } from 'vue-tweet-embed'
import HeadingWithIcon from '~/components/atoms/HeadingWithIcon.vue'

export default Vue.extend({
  components: {
    Timeline,
    HeadingWithIcon
  },
  data() {
    return {
      userId: 'hal_sea_'
    }
  }
})
</script>
