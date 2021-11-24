<script lang="ts" setup>
import '~/styles'
import FileViewerImage from '~/components/file-viewer-image.vue'

const props = defineProps({
  userName: {
    required: true,
    type: String,
  },
  publishDate: {
    required: true,
    type: String,
  },
  publishTime: {
    required: true,
    type: String,
  },
  fileText: {
    required: true,
    type: String,
  },
  fileExtension: {
    required: true,
    type: String,
  },
  fileName: {
    required: true,
    type: String,
  },
  fileLink: {
    required: true,
    type: String,
  },
})

const isPdf = computed(() => {
  return ['pdf'].includes(props.fileExtension)
})

const isImage = computed(() => {
  return ['png', 'jpg', 'jpeg'].includes(props.fileExtension)
})

const isOffice = computed(() => {
  return ['docx'].includes(props.fileExtension)
})
</script>

<template>
  <file-viewer-image v-if="isImage" :file-link="fileLink" />
  <file-viewer-office v-else-if="isOffice" :file-link="fileLink" />
  <file-viewer-office v-else-if="isPdf" :file-link="fileLink" />
</template>
