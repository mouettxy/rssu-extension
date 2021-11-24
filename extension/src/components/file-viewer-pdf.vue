<script setup lang="ts">
import lightGallery from 'lightgallery'
import 'lightgallery/scss/lightgallery-bundle.scss'
import '~/styles/lightgallery.scss'

defineProps({
  fileLink: {
    required: true,
    type: String,
    default: '',
  },
})

const fileRef = ref(null as {$el: HTMLElement} | null)

onMounted(() => {
  nextTick(() => {
    if (fileRef.value?.$el) {
      lightGallery(fileRef.value?.$el, {
        selector: 'this',
      })
    }
  })
})
</script>

<template>
  <base-btn ref="fileRef" class="file-viewer" :data-src="fileLink" :data-iframe="true">
    Предпросмотр
  </base-btn>
</template>
