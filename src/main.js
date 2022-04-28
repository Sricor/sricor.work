import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import index from '~/pages/index.vue'
import NotFound404 from '~/pages/404.vue'
import view from '~/pages/view.vue'

import BlogPosts from '~/components/BlogPosts.vue'
import PortfolioPosts from '~/components/PortfolioPosts.vue'

import './main.css'
import './style2.css'

// https://next.router.vuejs.org/
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      name:'Portfolio', 
      component: index, 
      children: [
        {
          path: '',
          component: BlogPosts,
        },
        {
          path: 'portfolio',
          component: PortfolioPosts,
        }
      ]
    },
    {path: '/view', name: 'view', component: view},
    {path: '/:pathMatch(.*)*', name: 'Home', component: NotFound404},
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')