<script lang="ts" setup>
import { ref } from 'vue'
import ImageModal from '@/ui/ImageModal.vue'
import BaseBtn from '@/ui/BaseBtn.vue'

const props = defineProps({
  userName: {
    required: true,
    type: String
  },
  publishDate: {
    required: true,
    type: String
  },
  publishTime: {
    required: true,
    type: String
  },
  fileText: {
    required: true,
    type: String
  },
  fileExtension: {
    required: true,
    type: String
  },
  fileName: {
    required: true,
    type: String
  },
  fileLink: {
    required: true,
    type: String
  },
})

const fileDefaultLink = props.fileLink.replace("/download/1", '') 

const modal = ref(false)

function handleClick() { modal.value = !modal.value; }
</script>

<template>
  <base-btn tag="a" v-if="fileExtension === 'pdf'" :href="fileDefaultLink" :title="`${fileName} ${userName} ${publishDate}:${publishTime}`" target="_blank">Предпросмотр</base-btn>
  <base-btn v-else @click="handleClick">Предпросмотр</base-btn>

  <Teleport to="body">
    <ImageModal v-if="fileExtension === 'png'" v-model="modal" :file-link="fileLink" :file-name="fileName" :caption="`${userName}`" />  
  </Teleport>
</template>

