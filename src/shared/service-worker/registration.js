import runtime from 'serviceworker-webpack-plugin/lib/runtime'

export const register = () => {
  return getRegistration().then((registration) => {
    if (!registration) {
      return runtime.register()
    }
    return Promise.reject() // eslint-disable-line prefer-promise-reject-errors
  })
}

export const unregister = () => {
  return getRegistration().then((registration) => {
    if (registration) {
      return registration.unregister()
    }
    return Promise.reject() // eslint-disable-line prefer-promise-reject-errors
  })
}

export const getRegistration = () => {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker.getRegistration('/')
  }
  return Promise.reject() // eslint-disable-line prefer-promise-reject-errors
}

export const isCompatible = () => {
  if ('serviceWorker' in navigator) {
    return Boolean(navigator.serviceWorker)
  }
  return false
}
