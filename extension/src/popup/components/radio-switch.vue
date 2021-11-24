<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    required: false,
    type: Boolean,
  },
  title: {
    required: false,
    type: String,
    default: '',
  },
  description: {
    required: false,
    type: String,
    default: '',
  },
})

const emits = defineEmits(['update:modelValue'])

const model = useVModel(props, 'modelValue', emits)

const handleClick = () => {
  model.value = !model.value
}
</script>

<template>
  <button class="w-full transition duration-300 hover:bg-gray-lightest/50 px-4 py-2 focus:outline-none focus-visible:bg-gray-lightest" @click="handleClick">
    <div class="flex items-center">
      <div class="text-left">
        <p class="text-base text-gray-darkest tracking-wide font-medium">
          {{ title }}
        </p>
        <p class="text-sm text-gray-dark">
          {{ description }}
        </p>
      </div>

      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        leave-active-class="transition ease-in-out duration-300 transform"
        enter-from-class="translate-x-10"
        enter-to-class="translate-x-0"
        leave-to-class="translate-x-10"
        leave-from-class="translate-x-0"
      >
        <bx-bx-check v-if="model" class="w-6 h-6 inline-block ml-auto text-green-500" />
      </transition>
    </div>
  </button>
</template>
