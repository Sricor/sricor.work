<script setup>
  import { shallowReactive } from 'vue'
  import { useRouter } from 'vue-router'
  import Wrapper from '~/components/Wrapper.vue'
  import Aside from '~/components/Aside.vue'

  import BlogPosts from '~/pages/blog/index.vue'
  import PortfolioPosts from '~/pages/portfolio/index.vue'

  const router = useRouter()
  const title = 'Sricor'
  const name = 'Sricor'
  const imagePath = 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/cat.jpg'

  const image = '/banner.svg'

  const collection = shallowReactive({
    type: BlogPosts
  })
</script>

<template>
<Wrapper />
  <main
  class="notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page index-page">
  <div class="notion-page-icon-hero notion-page-icon-image">
    <span
      style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
      <span
        style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
        <img :alt="name" :src="imagePath"
          style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
      </span>
    </span>
  </div>
  <h1 class="notion-title">{{ title }}</h1>
  <div class="notion-page-content notion-page-content-has-aside">
    <article class="notion-page-content-inner">
      <div class="notion-text">Hey there!👋</div>
      <div class="notion-text">I'm
        <span class="notion-purple_background">Sricor</span>
        , a designer &amp; code enthusiast
      </div>

      <div class="notion-row">
        <!-- <span class="notion-page-title-icon notion-page-icon"><br>👉</span> -->
        <div class="notion-spacer"></div>

        <div class="notion-column" style="width:calc((75% - (3 * min(32px, 4vw))) * 0.25)">
          <a @click="collection.type = BlogPosts" class="notion-page-link">
            <span class="notion-page-title">
              <div class="notion-page-icon-inline notion-page-icon-span">
                <span class="notion-page-title-icon notion-page-icon">📕</span>
              </div>
              <span class="notion-page-title-text">Blog Posts</span>
            </span>
          </a>
        </div>

        <div class="notion-row">
          <div class="notion-spacer"></div>
          <div class="notion-column" style="width:calc((75% - (3 * min(32px, 4vw))) * 0.25)">
            <a @click="collection.type = PortfolioPosts" class="notion-page-link">
              <span class="notion-page-title">
                <div class="notion-page-icon-inline notion-page-icon-span">
                  <span class="notion-page-title-icon notion-page-icon">🎨</span>
                </div>
                <span class="notion-page-title-text">Portfolio</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <br>
        <transition name="fade" mode='out-in'>
          <component :is="collection.type" />
        </transition>
    </article>
    <Aside />
  </div>
</main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.notion-page-link {
cursor: pointer;
border-radius: 10px;
}

</style>

<route lang="yaml">
meta:
  layout: index
</route>