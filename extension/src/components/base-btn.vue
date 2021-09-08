<script lang="ts" setup>
defineProps({
  tag: {
    required: false,
    type: String,
    default: 'button',
  },
})

const emit = defineEmits(['click'])
</script>

<template>
  <component v-bind="$attrs" :is="tag" class="block leading-5 px-2 m-0 py-0.5 text-xs bg-none cursor-pointer border-none bg-brand rounded-md text-gray-lightest tracking-wide transition-colors no-underline hover:bg-brand-light focus:(ring-brand-light outline-none)" @click="emit('click', $event)">
    <slot></slot>
  </component>
</template>
