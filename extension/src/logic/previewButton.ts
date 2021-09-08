import { mapDatasetToElement, parsePage } from './parsePageFiles'

export function detectValidPage() {
  const detectionElement = document.querySelector('.test_name_wrap2')

  return !!detectionElement
}

export function previewId() {
  let id = 0
  let previewId = `preview-btn-${id}`

  return {
    getId() { return previewId },
    nextId() {
      id++
      previewId = `preview-btn-${id}`

      return previewId
    },
  }
}

export function setupPreviewButtons(App: any) {
  const allowedExtensions = ['pdf', 'jpg', 'png', 'jpeg']
  const styleEl = document.createElement('link')
  styleEl.setAttribute('rel', 'stylesheet')

  styleEl.onload = () => {
    const pageBlocks = parsePage()

    pageBlocks.forEach((block) => {
      block.files.forEach((file) => {
        if (!allowedExtensions.includes(file.extension))
          return

        const root = document.createElement('div')
        file.node.classList.add('tests-file-list__item')
        root.classList.add('tests-preview')
        file.node.appendChild(root)

        mapDatasetToElement(root, block, file)

        createApp(App, { ...root.dataset }).mount(root)
      })
    })
  }

  styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
  document.head.appendChild(styleEl)
}
