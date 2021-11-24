<template>
  <main class="w-[300px] py-4 rounded-md">
    <div class="px-4 text-center">
      <Logo class=" focus:outline-none focus-visible:ring" />
      <h1 class="text-xl text-left mt-4 font-bold tracking-wide text-gray-darkest">
        Настройки
      </h1>
    </div>
    <div class="mt-2 text-left">
      <radio-switch v-model="options.css.disableLogo" title="Логотип РГСУ" description="Показывать логотип РГСУ?" />
      <radio-switch v-model="options.css.disableSearch" title="Поиск" description="Показывать поиск?" />
      <radio-switch v-model="options.css.disableHelp" title="Помощь" description="Показывать иконку поиска?" />
      <radio-switch v-model="options.css.disableUserway" title="Userway" description="Показывать иконку Userway?" />
      <radio-switch v-model="options.css.disableSupport" title="Тех. поддержка" description="Показывать бэйджик тех. поддержки?" />
      <radio-switch v-model="options.css.disableTestName" title="Имя теста" description="Показывать имя и комментарий к тесту?" />
      <radio-switch v-model="options.css.alternativeHeader" title="Альтернативная шапка" description="Сделать стили шапки более дружелюбными?" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import RadioSwitch from '~/popup/components/radio-switch.vue'

const options = useStorage('options', {
  css: {
    disableLogo: true,
    disableSearch: true,
    disableHelp: true,
    disableUserway: true,
    disableSupport: true,
    disableTestName: false,
    alternativeHeader: false,
  },
})
</script>
