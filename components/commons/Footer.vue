<template>
  <div>
    <footer>
      <div
        class="
          text-gray-800
          flex flex-col
          m-auto
          pb-5
          pt-5
          px-4
          max-w-screen-lg
          text-sm
          border-t
          md:flex-row
        "
      >
        <div class="mt-2">© Copyright 2021. @hal_sea_</div>
        <div class="flex flex-row mt-2 md:flex-auto md:flex-row-reverse">
          <a
            href="https://twitter.com/hal_sea_"
            class="mx-1 w-6"
            target="_blank"
          >
            <img
              src="~/assets/images/twitter.svg"
              alt="Twitter"
              width="24"
              height="24"
            />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
