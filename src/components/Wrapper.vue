<script setup>
defineProps({
  imagePath: String,
  wrapper: String
})
</script>


<template>
  <div class="notion-page-cover-wrapper">
  <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
    <img alt="Sricor" :src="imagePath + wrapper" data-nimg="intrinsic" class="notion-page-cover" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-position: center 50%;" />
  </span>
</div>
</template>