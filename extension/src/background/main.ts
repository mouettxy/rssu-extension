// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  import('./contentScriptHMR')
}

// @ts-ignore
browser.runtime.onMessage.addListener((request: any, sender: any, sendResponse: any) => {
  if (request.method === 'getLocalStorage')
    sendResponse({ data: localStorage.getItem(request.key) })
  else
    sendResponse({}) // snub them.
})

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Расширение установлено')
})
