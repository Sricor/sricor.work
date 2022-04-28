<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from 'vue-router'

import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

// https://github.com/rstacruz/nprogress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

import './main.css'

const router = useRouter()
router.beforeEach((to, from, next) => {
  NProgress.start()  // NProgress load start
  // document.title = config.author + ' - ' +to.name  // change title
  next()  // router next
})
router.afterEach(() => {
  // window.scrollTo(0,0)  // backTop
  NProgress.done()  // NProgress load end
})

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

<style>
body::-webkit-scrollbar {
  width:10px;
  height:10px;
}
body::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius:2px;
}
body::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius:10px;
}
body::-webkit-scrollbar-thumb:hover {
  background: #333;
}
body::-webkit-scrollbar-corner {
  background: #179a16;
}

#nprogress .bar {
  background-color: rgba(45,170,219,.3);
}

::selection {
     background-color: rgba(45,170,219,.3);
}
</style>
