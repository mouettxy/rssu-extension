<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    required: false,
    type: Boolean,
  },
  caption: {
    required: true,
    type: String,
    default: '',
  },
  fileLink: {
    required: true,
    type: String,
    default: '',
  },
  fileName: {
    required: true,
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emit)
</script>

<template>
  <transition name="fade-transition">
    <div v-if="model" class="bg-gray-darkest/80 inset-0 fixed text-center z-10">
      <div class="h-4/5 relative w-full flex items-center justify-center z-20">
        <img class="bg-gray-darkest cursor-pointer inline-block max-h-[90%] max-w-[80%]" :src="fileLink" :alt="fileName" />
        <span class="absolute -bottom-16 px-4 py-2 rounded-md text-gray-lightest bg-gray-darkest/80 opacity-75 font-light text-lg">{{ caption }}</span>

        <eva-close-fill class="w-8 h-8 block pointer px-4 right-0 icon-btn top-0 w-20 text-gray-lightest absolute" @click="model = false" />
      </div>
    </div>
  </transition>
</template>
