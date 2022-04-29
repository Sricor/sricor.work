<script setup>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  import Wrapper from '~/components/Wrapper.vue'
  import PostDescription from '~/components/PostDescription.vue'

</script>

<template>
  <div class="notion notion-app light-mode" name="notion">
    <div class="notion-frame">
      <div class="notion-page-scroller">
        <Navbar />
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