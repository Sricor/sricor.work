<script setup>
  import { shallowReactive } from 'vue'
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  import Wrapper from '~/components/Wrapper.vue'
  import PostDescription from '~/components/PostDescription.vue'

  const page = shallowReactive({
    description: {},
    imagePath: "https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/",
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
  const setPostDescription = (e) => { page.description = e }
  const setMainType = (e) => { page.mainType = e }

</script>

<template>
  <div :class="page.mode" class="notion notion-app" name="notion">
    <div class="notion-frame">
      <div class="notion-page-scroller">
        <Navbar @modeChange="modeChange"/>
        <Wrapper :imagePath="page.imagePath" :wrapper="page.wrapper" />
            <main :class="page.mainType" class="notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page">
              <PostDescription :imagePath="page.imagePath" :description="page.description"/>
                <RouterView @setWrapper="setWrapper" @setPostDescription="setPostDescription" @setMainType="setMainType" />
            </main> 
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>