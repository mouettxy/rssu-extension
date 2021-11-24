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
  <!-- <base-btn
    v-if="isPdf"
    tag="a"
    :href="fileDefaultLink"
    :title="fileCaption"
    target="_blank"
  >
    Предпросмотр
  </base-btn>
  <base-btn v-else-if="isEmbed" @click="modal = !modal">
    Предпросмотр Word
  </base-btn>
  <base-btn v-else @click="modal = !modal">
    Предпросмотр
  </base-btn>

  <image-modal
    v-if="isImage"
    v-model="modal"
    :file-link="fileLink"
    :file-name="fileName"
    :caption="fileCaption"
  />
  <doc-modal
    v-if="isEmbed"
    v-model="modal"
    :file-link="fileLink"
    :file-name="fileName"
    :caption="fileCaption"
  /> -->
</template>
