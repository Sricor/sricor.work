<script setup>
import Collection from '~/components/Collection.vue'

const collection = {
  name: 'Portfolio Posts',   // collection name
  posts: [
    {
      postTile: '',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/test/%20%2819%29.jpg', // post image
      postTag: {
        purple: 'Web Dev',
        blue: 'Vue.js',
        pink: 'Projects'
      },
      postLink: '/课鸭微信小程序',
      postIntroduction: "", 
    },
    {
      postTile: '',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/test/%20%2810%29.jpg', // post image
      postTag: {
        purple: 'Web Dev',
        blue: 'Vue.js',
        pink: 'Projects'
      },
      postLink: '/课鸭微信小程序',
      postIntroduction: "", 
    },
        {
      postTile: '',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/test/%20%2810%29.jpg', // post image
      postTag: {
        purple: 'Web Dev',
        blue: 'Vue.js',
        pink: 'Projects'
      },
      postLink: '/课鸭微信小程序',
      postIntroduction: "", 
    },
        {
      postTile: '',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/ventHub/ventHub%20(1).png?imageMogr2/format/webp/interlace/1/quality/100', // post image
      postTag: {
        purple: 'Web Dev',
        blue: 'Vue.js',
        pink: 'Projects'
      },
      postLink: '/课鸭微信小程序',
      postIntroduction: "", 
    },
  ]
}

</script>

<template>
<div key="portfolio">
  <Collection :collection="collection" />
</div>
  
</template>
<route lang="yaml">
meta:
  layout: index
</route>