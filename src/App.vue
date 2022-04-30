<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, computed, nextTick, shallowReactive, watch  } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

// https://github.com/rstacruz/nprogress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

import './main.css'

const route = useRoute()
const router = useRouter()

const siteData = shallowReactive({
  title: `Sricor`,
  description: `My beautiful website`,
})

 // page title name
const titleName = () =>{
  // index
  if(route.path == '/') {
    return 'Sricor'
  }
  // last path
  return decodeURI(route.path).split('/').slice(1).slice(-1)[0]+' - Sricor'
}

// site head
useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
  ],
})

// route change
router.beforeEach((to, from, next) => {
  NProgress.start()  // NProgress load start
  next()  // router next
})
router.afterEach(() => {
  // window.scrollTo(0,0)  // backTop
  siteData.title = titleName()
  NProgress.done()  // NProgress load end
})



</script>

<template>

<div >
  <RouterView />
</div>

</template>

<style>
::-webkit-scrollbar {
  width:10px;
  height:10px;
}
::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius:2px;
}
::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius:10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
::-webkit-scrollbar-corner {
  background: #179a16;
}

#nprogress .bar {
  background-color: rgba(45,170,219,.3);
}
</style>
