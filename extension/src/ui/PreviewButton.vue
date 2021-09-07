<script lang="ts" setup>
import { ref } from 'vue'
import ImageModal from '@/ui/ImageModal.vue'

const props = defineProps({
  userName: {
    required: true,
    type: String
  },
  publishData: {
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


const modal = ref(false)

function handleClick() { modal.value = !modal.value; }
</script>

<template>
  <button @click="handleClick">Предпросмотр</button>
  <Teleport to="body">
    <ImageModal v-if="fileExtension === 'png'" v-model="modal" :file-link="fileLink" :file-name="fileName" :caption="`${userName}`" />  
  </Teleport>
</template>

