<template>
  <button>Предпросмотр</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
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
  },
});
</script>
