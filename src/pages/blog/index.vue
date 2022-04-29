<script setup>
import Collection from '~/components/Collection.vue'

const collection = {
  name: 'Blog Posts',   // collection name
  posts: [
    {
      postTile: '<b>「课鸭」微信小程序',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/test/%20%2812%29.jpg', // post image
      postTag: {
        purple: 'Web Dev',
        blue: 'Vue.js',
        pink: 'Projects'
      },
      postLink: '/blog/view',
      postIntroduction: "<b><b>「课鸭」</b></b>微信小程序，一款在线课表小程序。Taro构建，主要功能有：课程信息展示，周次切换。这是我在学习前端Vue.js时候的一个Weekend Project，获得校组支持在校内上线。", 
    },
        {
      postTile: '<b>「课鸭」微信小程序',  // post title html
      postDate: 'Apr 16, 2021', 
      postImage: 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/test/%20%2812%29.jpg', // post image
      postTag: {
        purple: 'Web Dev',
        blue: 'Vue.js',
        pink: 'Projects'
      },
      postLink: '/blog/view',
      postIntroduction: "<b><b>「课鸭」</b></b>微信小程序，一款在线课表小程序。Taro构建，主要功能有：课程信息展示，周次切换。这是我在学习前端Vue.js时候的一个Weekend Project，获得校组支持在校内上线。", 
    },
  ]
}

</script>

<template>
<div key='blog'>
  <Collection :collection="collection" />
</div>
  
</template>

<style scoped>

</style>