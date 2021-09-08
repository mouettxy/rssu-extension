<script lang="ts" setup>
import '../../styles'

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

const fileDefaultLink = props.fileLink.replace('/download/1', '')

const isPdf = computed(() => {
  return ['pdf'].includes(props.fileExtension)
})

const isImage = computed(() => {
  return ['png', 'jpg', 'jpeg'].includes(props.fileExtension)
})

const fileCaption = computed(() => {
  return `${props.userName} ${props.publishDate} | ${props.publishTime}`
})

const modal = ref(false)
</script>

<template>
  <base-btn v-if="isPdf" tag="a" :href="fileDefaultLink" :title="fileCaption" target="_blank">
    Предпросмотр
  </base-btn>
  <base-btn v-else @click="modal = !modal">
    Предпросмотр
  </base-btn>

  <image-modal v-if="isImage" v-model="modal" :file-link="fileLink" :file-name="fileName" :caption="fileCaption" />
</template>
