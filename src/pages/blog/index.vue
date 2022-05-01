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
      postTile: '<b>Python 类型注解',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'test/%20%2812%29.jpg', // post image
      postTag: {
        purple: 'Python',
        blue: 'Blog',
        pink: 'Tech'
      },
      postLink: '/Blog/Python 类型注解',
      postIntroduction: "<b>Python Notes", 
    },
  ]
}
</script>

<template>
<div key='blog'>
  <Collection :collection="collection" :imageUrl="imageUrl" :imageParams="imageParams" />
</div>
</template>