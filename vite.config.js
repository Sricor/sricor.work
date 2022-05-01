import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, "./src"),
    },
  },
  
  plugins: [
    vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: 'src/pages',
      extendRoute(route, parent) {
        route.path =  encodeURI(route.path)
        console.log(route.path)
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

  ]
})
