<script setup>
import Collection from '~/components/Collection.vue'

defineProps({
  imageUrl: String,
  imageParams: String
})

const emits = defineEmits(['setWrapper', 'setPostDescription', 'setMainType'])
emits('setWrapper', 'banner.svg')
emits('setMainType', 'index-page')
emits(
  'setPostDescription', {
    title: 'Sricor',
    image: 'cat.jpg',
  }
)

const collection = {
  name: ' 📕 Blog Posts',   // collection name
  posts: [
    {
      postTile: '<b>📙 Python 学习笔记',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'blog/python.webp', // post image
      postTag: {
        blue: 'Blog',
        purple: 'Python',
        pink: 'Tech'
      },
      postLink: '/Blog/Python 学习笔记',
      postIntroduction: "这里会记录我在学习Python过程中的重要知识，收获和遇到过的错误，方便查阅。同时也作备忘，温故而知新。", 
    },
  ]
}
</script>

<template>
<div key='blog'>
  <Collection :collection="collection" :imageUrl="imageUrl" :imageParams="imageParams" />
</div>
</template>