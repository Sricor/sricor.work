<script setup>
import { useRouter } from 'vue-router'
import Aside from '~/components/Aside.vue'
const router = useRouter()
const image = '/banner.svg'

const go = (path) => {
  router.push(`/${path}`)
}
</script>

<template>
  <article class="notion-page-content-inner">
  <div class="notion-text">Hey there!👋</div>
  <div class="notion-text">I'm
  <span class="notion-purple_background">Sricor</span>
  , a designer &amp; code enthusiast
  </div>

  <div class="notion-row">
    <!-- <span class="notion-page-title-icon notion-page-icon"><br>👉</span> -->
    <div class="notion-spacer"></div>
    
    <div class="notion-column" style="width:calc((75% - (3 * min(32px, 4vw))) * 0.25)">
      <a @click="go('')" class="notion-page-link">
        <span class="notion-page-title">
          <div class="notion-page-icon-inline notion-page-icon-span">
            <span class="notion-page-title-icon notion-page-icon">📕</span>
          </div>
          <span class="notion-page-title-text">Blog Posts</span>
        </span>
      </a>
    </div>

    <div class="notion-row">
    <div class="notion-spacer"></div>
    <div class="notion-column" style="width:calc((75% - (3 * min(32px, 4vw))) * 0.25)">
      <a @click="go('portfolio')" class="notion-page-link">
        <span class="notion-page-title">
          <div class="notion-page-icon-inline notion-page-icon-span">
            <span class="notion-page-title-icon notion-page-icon">🎨</span>
          </div>
          <span class="notion-page-title-text">Portfolio</span>
        </span>
      </a>
    </div>
    </div>
  </div><br>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode='out-in'>
      <component :is="Component" />
    </transition>
  </router-view>
  </article>
  <Aside />
</template>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.notion-page-link {
  cursor: pointer;
  border-radius: 10px;
}
</style>