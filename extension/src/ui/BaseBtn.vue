<script lang="ts" setup>
const props = defineProps({
  tag: {
    required: false,
    type: String,
    default: 'button',
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <component v-bind="$attrs" :is="tag" @click="emit('click', $event)" class="base-btn">
    <slot></slot>
  </component>
</template>

<style>
.base-btn {
  display: block !important;
  line-height: 1.3 !important;
  padding: 4px 12px !important;
  margin: 0 !important;
  background: var(--color-brand) !important;
  border-radius: 4px !important;
  color: var(--color-white) !important;
  letter-spacing: 0.04em !important;
  transition: background var(--duration-default) var(--easing-default), 
              box-shadow var(--duration-default) var(--easing-default);
  text-decoration: none !important;
}

.base-btn:hover {
  background: var(--color-brand-light) !important
}

.base-btn:focus {
  outline: none !important;
  box-shadow: var(--shadow-focus) !important;
}
</style>