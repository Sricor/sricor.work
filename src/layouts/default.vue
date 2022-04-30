<script setup>
import { reactive, computed, nextTick, shallowReactive, watch  } from 'vue'
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  import Wrapper from '~/components/Wrapper.vue'
  import PostDescription from '~/components/PostDescription.vue'

  const mode = shallowReactive({type: 'light-mode'})
  const modeChange = (e) => {
    console.log(e)
    if (mode.type == 'dark-mode'){
      mode.type = 'light-mode'
    }
    else{
      mode.type = 'dark-mode'
    }
  }
</script>

<template>
  <div :class="mode.type" class="notion notion-app" name="notion">
    <div class="notion-frame">
      <div class="notion-page-scroller">
        <Navbar @modeChange="modeChange"/>
        <Wrapper />
            <main class="notion-page notion-page-has-cover notion-page-has-icon notion-page-has-image-icon notion-full-page index-page">
              <PostDescription />
              <RouterView />
            </main> 
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>