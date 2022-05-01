import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'


const routes = setupLayouts(generatedRoutes)

// https://next.router.vuejs.org/
const router = createRouter({
  history: createWebHistory(),
  routes
})


const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')