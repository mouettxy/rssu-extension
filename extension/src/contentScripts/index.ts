/* eslint-disable no-console */
import App from './views/app.vue'
import { setupPreviewButtons } from '~/logic/previewButton'

console.info('[rssu-sdo-reload] Extension startup...')

const styleEl = document.createElement('link')
styleEl.setAttribute('rel', 'stylesheet')
styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
document.documentElement.appendChild(styleEl)

document.addEventListener('DOMContentLoaded', () => {
  setupPreviewButtons(App)

  console.info('[rssu-sdo-reload] Markup generated!')
})
