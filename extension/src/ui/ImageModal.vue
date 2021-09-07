<script lang="ts" setup>
import { useVModel } from '@/ui/composables/useVModel'

const props = defineProps({
  modelValue: {
    required: false,
    type: Boolean
  },
  caption: {
    required: true,
    type: String,
    default: ''
  },
  fileLink: {
    required: true,
    type: String,
    default: ''
  },
  fileName: {
    required: true,
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emit)
</script>

<template>
  <Transition name="fade-transition">
    <div v-if="model" class="image-modal">
      <div class="image-modal__content">
        <img class="image-modal__image" :src="fileLink" :alt="fileName" />
        <span class="image-modal__caption">{{ caption }}</span>

        <div @click="model = false" class="image-modal__action image-modal__action--close"></div>
      </div>
    </div>
  </Transition>
</template>

<style>
.image-modal {
  background-color: rgba(24,24,27,.92);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 1000;
}

.image-modal__content {
  height: 85%;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
}

.image-modal__caption {
  position: absolute;
  bottom: 0;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(0,0,0,.9);
  opacity: .75;
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 1.2rem;
}

.image-modal__image {
  background-color: #222;
  cursor: pointer;
  display: inline-block;
  max-height: 90%;
  max-width: 80%;
  position: absolute;
}

.image-modal__action--close {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 46 46' width='40' height='40' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'%3E%3Cpath d='M2 30 L30 2 M30 30 L2 2' /%3E%3C/svg%3E") !important;
  height: 4em;
  right: 0;
}

.image-modal__action {
  background: no-repeat center/24px;
  cursor: pointer;
  opacity: .5;
  position: absolute;
  top: 0;
  transition: opacity .3s ease;
  width: 6em;
}

.image-modal__action:hover {
  opacity: 1;
}
</style>