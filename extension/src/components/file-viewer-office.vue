<script setup lang="ts">
import lightGallery from 'lightgallery'
import axios from 'axios'
import 'lightgallery/scss/lightgallery-bundle.scss'
import '~/styles/lightgallery.scss'

const props = defineProps({
  fileLink: {
    required: true,
    type: String,
    default: '',
  },
})

const fileRef = ref(null as {$el: HTMLElement} | null)
const serverFileLink = ref('')

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts
      ?.pop()
      ?.split(';')
      .shift()
  }
}

const getServerFileLink = async() => {
  const response = await axios.post('https://sdo.tabateam.ru/v1/upload-file', {
    url: props.fileLink,
    session: getCookie('PHPSESSID'),
  })

  if (response.data.error) return ''
  return `https://docs.google.com/viewerng/viewer?url=https://sdo.tabateam.ru/v1/file?url=${props.fileLink}&session=${getCookie('PHPSESSID')}&embedded=true`
}

onMounted(async() => {
  serverFileLink.value = await getServerFileLink()

  nextTick(async() => {
    if (fileRef.value?.$el) {
      lightGallery(fileRef.value?.$el, {
        selector: 'this',
      })
    }
  })
})
</script>

<template>
  <base-btn v-if="serverFileLink" ref="fileRef" class="file-viewer" :data-src="serverFileLink" :data-iframe="true">
    Предпросмотр
  </base-btn>
</template>
