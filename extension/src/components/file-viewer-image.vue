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
        licenseKey: '70B46ADB-047940DB-BE224A1D-5E369A7C',
      })
    }
  })
})
</script>

<template>
  <base-btn ref="fileRef" class="file-viewer" :data-src="fileLink" :data-image="true">
    Предпросмотр
  </base-btn>
</template>
