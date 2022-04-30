<script setup>
defineProps({
  imagePath: String,
  description: Object
})

/* const imagePath = 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/'
const description = {
  title: 'Sricor',
  author: 'Sricor',
  image: 'cat.jpg',
  published: 'Published March 31, 2022',
  tag: {
    purple: 'Web Dev',
    blue: 'Vue.js',
    pink: 'Projects'
  }
} */
</script>

<template>
  <div class="notion-page-icon-hero notion-page-icon-image">
    <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
      <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
        <img :src="imagePath + description.image" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
      </span>
    </span>
  </div>
  <h1 class="notion-title">{{ description.title }}</h1>

  <div v-if="description.author" class="notion-collection-page-properties">
    <div class="notion-collection-row">
      <div class="notion-collection-row-body">
        <div class="notion-collection-row-property">
          <div class="notion-collection-row-value">
            <span class="notion-property notion-property-multi_select">
              <div v-html="tag" v-for="(tag, color, index) in description.tag" :key="index"  :class="'notion-property-multi_select-item notion-item-' + color"></div>
            </span>
          </div>
        </div>
        <div class="notion-collection-row-property">
          <div class="notion-collection-row-value">
            <span class="notion-property notion-property-date">{{ description.published }}</span>
            </div>
        </div>
        <div class="notion-collection-row-property">
          <div class="notion-collection-row-value">
            <span class="notion-property notion-property-text">
            <b>{{ description.author }}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>