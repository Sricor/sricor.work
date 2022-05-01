<script setup>
const emits = defineEmits(['setWrapper', 'setPostDescription', 'setMainType'])
emits('setWrapper', 'banner.svg')
emits('setMainType', '')
emits(
  'setPostDescription', {
    title: 'Page NotFound',
    image: 'cat.jpg',
  }
)
</script>

<template>
</template>

<style scoped>

</style>