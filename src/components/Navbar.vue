<script setup>
import { shallowReactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

defineProps({
  image: String,
  imageUrl: String,
  imageParams: String
})

const emits = defineEmits(['modeChange'])

const router = useRouter()
const route = useRoute()

const nav = shallowReactive({
  path: decodeURI(route.path).split('/').slice(1)
})
console.log(route.path)

// navbar link
const goPath = (local) => {
  let pathLink = ''
  if (local < 0) {
    pathLink = '/'
  }
  else {
    for (let i=0; i<=local; i++) { 
    pathLink = pathLink + '/' + nav.path[i]
    // console.log(pathLink)
    }
  }
  window.scrollTo(0,0) // back to top
  router.push(encodeURI(pathLink)) // router link
}

// page title name
const setHead = () => {
  if (nav.path.slice(-1)[0] != '') {
    return nav.path.slice(-1)[0] +' - Sricor'
  }
  else {
    return 'Welcome - Sricor'
  }
}

// site head
useHead({
  title: computed(() => setHead())  
})

// dark light mode
const modeChange = (e) => {
  emits('modeChange')
}

// refresh nav
router.afterEach(() => {
  nav.path = decodeURI(route.path).split('/').slice(1)
})

</script>

<template>
<!-- Header Navbar -->
  <header class="notion-header" >
    <div class="notion-nav-header">
      <div class="breadcrumbs">

        <!-- Navbar Path -->
        <!-- Index -->
        <a @click="goPath(-1)" class="breadcrumb">
          <div class="notion-page-icon-inline notion-page-icon-image">
            <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%; ">
              <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                <img alt="Sricor" :src="imageUrl + image + imageParams" style="border-radius: 25px; display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;">
              </span>
            </span>
          </div>
          <span class="title">Sricor</span>
        </a>

        <!-- Other path -->
        <div v-for="(path, index) in nav.path" :key="index">
          <span class="spacer">/</span>
          <a @click="goPath(index)">
            <div class="breadcrumb">
              <span class="title">{{ path }}</span>
            </div>
          </a>
        </div>

        <!-- Dark Light Mode Change -->
      </div>
      <div class="breadcrumbs">
        <a @click="modeChange()" class="breadcrumb button" role="button" title="Toggle dark mode">
          <svg class="notion-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"></path>
            <circle cx="256" cy="256" r="80" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>
          </svg>
        </a>

        <!-- Search -->
        <a @click="nav.search = true"  class="breadcrumb button">
          <svg class="notion-icon searchIcon" viewBox="0 0 17 17">
            <path d="M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"></path>
          </svg>
        </a>
      </div>
    </div>
  </header>

  <!-- Search Bar -->
  <div v-if="nav.search" @click="nav.search = false; userClick=false" class="ReactModalPortal">
    <div class="ReactModal__Overlay ReactModal__Overlay--after-open notion-search-overlay">
      <div class="ReactModal__Content ReactModal__Content--after-open notion-search" tabindex="-1" role="dialog" aria-label="Search" aria-modal="true">
        <div class="quickFindMenu">
          <div @click.stop="userClick=!userClick" class="searchBar">
            <div class="inlineIcon">
              <svg class="notion-icon" viewBox="0 0 17 17">
                <path d="M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"> </path>
              </svg>
              </div>
              <input class="searchInput" placeholder="Search" value="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>