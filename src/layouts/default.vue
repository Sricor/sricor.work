<script setup>
import { shallowReactive } from 'vue'
import config from '/site.config.js'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Wrapper from '~/components/Wrapper.vue'
import PostDescription from '~/components/PostDescription.vue'

const page = shallowReactive({
  image: 'cat.webp',
  description: {},
  imageUrl: config.image.url,
  imageParams: config.image.params
})

// dark mode
const modeChange = (e) => {
  if (page.mode == 'dark-mode'){
    page.mode = 'light-mode'
  }
  else{
    page.mode = 'dark-mode'
  }
}

const setWrapper = (e) => { page.wrapper = e }
const setMainType = (e) => { page.mainType = e }
const setPostDescription = (e) => { page.description = e }
</script>

<template>
  <div :class="page.mode" class="notion notion-app" name="notion">
    <div class="notion-frame">
      <div class="notion-page-scroller">
        <Navbar @modeChange="modeChange" :image="page.image" :imageUrl="page.imageUrl" :imageParams="page.imageParams" />
        <Wrapper :wrapper="page.wrapper" :imageUrl="page.imageUrl" :imageParams="page.imageParams"/>
            <main :class="page.mainType" class="notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page">
              <PostDescription :description="page.description" :imageUrl="page.imageUrl" :imageParams="page.imageParams" />
                <RouterView @setWrapper="setWrapper" @setPostDescription="setPostDescription" @setMainType="setMainType" :imageUrl="page.imageUrl" :imageParams="page.imageParams"/>
            </main> 
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>