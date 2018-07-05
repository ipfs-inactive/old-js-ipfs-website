import runtime from 'serviceworker-webpack-plugin/lib/runtime'

export const register = () => {
  if ('serviceWorker' in navigator) {
    runtime.register()
      .then((reg) => {
        console.info('service worker registered', reg)
      })
  }
}

export const unregister = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister()
      })
    })
  }
}
