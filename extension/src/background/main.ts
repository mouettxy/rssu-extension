// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  import('./contentScriptHMR')
}

browser.runtime.onMessage.addListener((request: any) => {
  return new Promise((resolve) => {
    if (request.method === 'getLocalStorage')
      resolve({ data: localStorage.getItem(request.key) })
    else
      resolve({})
  })
})

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Расширение установлено')
})
