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
  name: ' 🎨 Portfolio Posts',   // collection name
  posts: [
    {
      postTile: '',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'test/%20%2819%29.jpg', // post image
      postTag: {
        purple: 'Web Dev',
        blue: 'Vue.js',
        pink: 'Projects'
      },
      postLink: '/课鸭微信小程序',
      postIntroduction: "", 
    }
  ]
}

</script>

<template>
<div key="portfolio">
  <Collection :collection="collection" :imageUrl="imageUrl" :imageParams="imageParams" />
</div>
  
</template>