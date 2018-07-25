import runtime from 'serviceworker-webpack-plugin/lib/runtime'

export const register = () => {
  if ('serviceWorker' in navigator) {
    return getRegistration().then((registration) => {
      if (!registration) {
        return runtime.register()
      }
      return Promise.reject() // eslint-disable-line prefer-promise-reject-errors
    })
  }
}

export const getRegistration = () => {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker.getRegistration('/')
  }
}
