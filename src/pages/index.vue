<script setup>
import Article from '~/components/Article.vue'

const title = 'Sricor'
const name = 'Sricor'
const imagePath = 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/cat.jpg'

</script>

<template>
  <div class="notion-page-cover-wrapper">
  <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
    <img alt="Sricor" src="/banner.svg" decoding="async" data-nimg="intrinsic" class="notion-page-cover" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-position: center 50%;" />
  </span>
  </div>

  <main class="notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page index-page">
    <div class="notion-page-icon-hero notion-page-icon-image">
      <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
        <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
          <img :alt="name" :src="imagePath" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
          </span>
        </span>
    </div>
    <h1 class="notion-title">{{ title }}</h1>
    <div class="notion-page-content notion-page-content-has-aside">
      <Article />
    </div>
  </main>
</template>

<style scoped>
</style>