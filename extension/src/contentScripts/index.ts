/* eslint-disable no-console */
import browser from 'webextension-polyfill'
import App from './views/app.vue'
import { setupPreviewButtons } from '~/logic/previewButton'

console.info('[rssu-sdo-reload] Extension startup...')

const createStyleSheet = (css: string) => {
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')

  console.log(css)

  head.appendChild(style)
  style.appendChild(document.createTextNode(css))
}

const setupStyles = async() => {
  const optionsEntry = await browser.runtime.sendMessage({ method: 'getLocalStorage', key: 'options' })
  const options = JSON.parse(optionsEntry.data)

  if (options.css.disableLogo) {
    createStyleSheet(`
      #logo.block {
        display: none !important;
      }
      
      #header {
        height: auto !important;
      }
    `)
  }

  if (options.css.disableSearch) {
    createStyleSheet(`
      div#search-block {
        display: none !important;
      }
    `)
  }

  if (options.css.disableHelp) {
    createStyleSheet(`
      a.help-activator {
        display: none !important;
      }
    `)
  }

  if (options.css.disableUserway) {
    createStyleSheet(`
      .uwy.userway_p5 {
        display: none !important;
      }
    `)
  }

  if (options.css.disableSupport) {
    createStyleSheet(`
      .hm-page-support {
        display: none !important;
      }
    `)
  }

  if (options.css.disableTestName) {
    createStyleSheet(`
      .content-container .content-here .test_name_wrap,
      .content-container .content-here .test_name_wrap2 {
          display: none !important;
      }
    `)
  }

  if (options.css.alternativeHeader) {
    createStyleSheet(`
      .user-block-wrapper-default {
          background: #fff !important;
      }
      
      .user-block-wrapper-default .edit-profile.action-link a {
          font-size: 0.825rem !important;
          text-decoration: none;
          letter-spacing: 0.010rem;
          font-family: 'Roboto';
          color: #212121 !important;
      }
      
      .user-block-wrapper-default .hm-es-event-toolbar-button-caption {
          color: #454545 !important;
          font-weight: 500;
          font-size: 0.725rem;
          font-family: 'Roboto'
      }
      
      .user-block-wrapper-default .hm-es-event-toolbar-button-icon {
          color: #464646 !important;
          font-weight: 600;
          border-radius: 4px !important;
          font-size: 0.725rem !important;
          font-family: 'Roboto';
          background: #f7f7f7;
          border: none;
      }
      
      .user-block-wrapper-default .logout.action-link a {
          color: #212121 !important;
          text-decoration: none;
          font-size: 0.725rem;
          font-family: 'Roboto';
          letter-spacing: 0.015rem;
          border: 1px solid #212121;
          padding: 0.3rem 0.5rem;
          border-radius: 4px;
          transition: opacity .3s ease-in-out;
      }
      
      .user-block-wrapper-default .logout.action-link a:hover {
          opacity: 0.75;
      }
    `)
  }
}
setupStyles()

const styleEl = document.createElement('link')
styleEl.setAttribute('rel', 'stylesheet')
styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
document.documentElement.appendChild(styleEl)

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    setupPreviewButtons(App)

    console.info('[rssu-sdo-reload] Markup generated!')
  }
}
