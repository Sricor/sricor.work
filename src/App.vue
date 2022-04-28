<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

</script>

<template>
  <div class="notion notion-app light-mode">
    <div class="notion-frame">
      <div class="notion-page-scroller">
        <Navbar />
        <RouterView />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>

</style>
