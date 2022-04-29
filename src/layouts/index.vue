<script setup>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="notion notion-app light-mode" name="notion">
    <div class="notion-frame">
      <div class="notion-page-scroller">
        <Navbar />
        <RouterView />
        <Footer />
      </div>
    </div>
  </div>


</template>

