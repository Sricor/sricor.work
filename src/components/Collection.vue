<script setup>

const image = '/banner.svg'

defineProps({
  collection: Object,
})

/* 
collection = {
  name: '',   // collection name
  posts: [
    {postTile: '', postIntroduction: '', postTag: '', postDate:'', postLink: ''},
  ]
}

*/
</script>

<template>
    <!-- collection view -->
    <div class="notion-collection">
      <div class="notion-collection-header">
        <div class="notion-collection-header-title">
          {{ collection.name }}
        </div>
      </div>

      <div class="notion-gallery">
        <div class="notion-gallery-view">
          <div class="notion-gallery-grid notion-gallery-grid-size-medium">

            <!-- post view -->
            <div v-for="(post, index) in collection.posts" :key="index">
              <a :href="post.postLink" class="notion-collection-card notion-collection-card-size-medium">
                
                <!-- post image -->
                <div class="notion-collection-card-cover">
                  <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                    <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                      <img alt="" :src="post.postImage" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
                    </span>
                  </span>
                </div>

                <!-- post title -->
                <div class="notion-collection-card-body">
                  <div class="notion-collection-card-property">
                    <span class="notion-property notion-property-title">
                      <span class="notion-page-link">
                        <span class="notion-page-title">
                          <span v-html="post.postTile" class="notion-page-title-text"></span>
                        </span>
                      </span>
                    </span>
                  </div>

                  <!-- post introduction -->
                  <div class="notion-collection-card-property">
                    <span v-html="post.postIntroduction" class="notion-property notion-property-text"></span>
                  </div>

                  <!-- post tages -->
                  <div class="notion-collection-card-property">
                    <span class="notion-property notion-property-multi_select">
                        <div v-html="tag" v-for="(tag, color, index) in post.postTag" :key="index"  :class="'notion-property-multi_select-item notion-item-' + color"></div>
                    </span>
                  </div>

                  <!-- post date -->
                  <div class="notion-collection-card-property">
                    <span v-html="post.postDate" class="notion-property notion-property-date"></span>
                  </div>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>

<style>
</style>