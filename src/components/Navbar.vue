<script setup> 
import { ref } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()
const nav = [
  {name: `About`, link: `/`},
  {name: `Resume`, link: `/Resume`},
  {name: `Portfolio`, link: `/Portfolio`},
  {name: `Blog`, link: `/Blog`},
  {name: `Contact`, link: `/Contact`},
]

const activeClass = ref(0)
const go = (link, index) => {
  activeClass.value = index
  router.push(link)
}
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li v-for="(n, index) in nav" :key="index" class="navbar-item">
        <button @click="go(n.link, index)"  :class="activeClass == index ? 'active' : '' " class="navbar-link" data-nav-link>{{ n.name }}</button>
      </li>
    </ul>
  </nav>
</template>