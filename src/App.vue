<script setup>
import { shallowReactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

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

const setHead = () => {
  let path = decodeURI(route.path).split('/').slice(1)
  if (path.slice(-1)[0] != '') {
    siteData.title =  path.slice(-1)[0] +' - Sricor'
  }
  else {
    siteData.title = 'Welcome - Sricor'
  }
}

useHead({
  title: computed(() => siteData.title),
  meta: [
    { charset: "UTF-8" },
    { name: "description", content: "Sricor" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    {name: `description`, content: computed(() => siteData.description) },
  ],
  link:[
    { rel: 'icon', href: '/favicon.ico'}
  ]
})

// route change
router.beforeEach((to, from, next) => {
  NProgress.start()  // NProgress load start
  next()  // router next
})
router.afterEach(() => {
  // window.scrollTo(0,0)  // backTop
  setHead()
  NProgress.done()  // NProgress load end
})
</script>

<template>
  <RouterView />
</template>
