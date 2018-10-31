const path = require('path')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const SvgStorePlugin = require('external-svg-sprite-loader')
const { defaultLocale, availableLocales } = require('./intl/config')

const addModules = (config, modules) => {
  config.resolve.modules = modules

  return config
}
const addAliases = (config, aliases) => {
  config.resolve.alias = { ...config.resolve.alias, ...aliases }

  return config
}
const addAliasFields = (config, aliasFields) => {
  config.resolve.aliasFields = aliasFields

  return config
}
const addSvgsConfig = (config) => {
  config.module.rules.push({
    // Standard SVGs referenced by a URL
    test: /\.svg$/,
    exclude: [/\.sprite\.svg$/, /\.inline\.svg$/],
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'static/[name]-[hash].[ext]'
        }
      },
      {
        loader: require.resolve('svgo-loader'),
        options: {
          plugins: [
            { inlineStyles: { onlyMatchedOnce: false } },
            { removeAttrs: { attrs: 'class' } }
          ]
        }
      }
    ]
  })

  // Inline SVGs
  config.module.rules.push({
    test: /\.inline\.svg$/,
    use: [
      require.resolve('raw-loader'),
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            { removeDimensions: true },
            { cleanupIDs: false }
          ]
        }
      },
      // Uniquify classnames and ids so they don't conflict with eachother
      {
        loader: require.resolve('svg-css-modules-loader'),
        options: {
          transformId: true
        }
      }
    ]
  })

  // External SVGs - sprite for performance
  config.module.rules.push({
    test: /\.sprite\.svg$/,
    use: [
      {
        loader: require.resolve(SvgStorePlugin.loader),
        options: {
          name: 'static/svg-sprite.[hash].svg',
          svgoOptions: {
            plugins: [
              { removeViewBox: false },
              { removeDimensions: true },
              { inlineStyles: { onlyMatchedOnce: false } },
              { removeAttrs: { attrs: 'class' } }
            ]
          }
        }
      }
    ]
  })

  return config
}
const addPluginsToConfig = (config, plugin) => {
  config.plugins.push(plugin)

  return config
}
const changeCssloaderOptions = (config, options) => {
  const oneOfConfig = (config.module.rules.find((rule) => Boolean(rule.oneOf))).oneOf
  const cssLoaders = (oneOfConfig.find((rule) => rule.test.test('.module.css'))).use
  const cssLoader = cssLoaders.find((loader) => loader.loader.includes('css-loader'))
  cssLoader.options = { ...cssLoader.options, ...options }

  return config
}

module.exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  let config = getConfig()

  // Modules
  const modules = ['node_modules', path.join(__dirname, 'src')]
  addModules(config, modules)

  // Aliases
  const aliases = { intl: path.join(__dirname, 'intl') }
  addAliases(config, aliases)

  // Target
  const aliasFields = ['browser']
  addAliasFields(config, aliasFields)

  // Ensure that the Gatsby's default SVG handling doesn't mess with the following declarations
  const defaultImageLoader = config.module.rules.find((rule) => /\bsvg\b/.test(rule.test.toString()))
  defaultImageLoader.exclude = /\.svg$/

  // SVGs (standard + inline + external)
  addSvgsConfig(config)

  // Plugins
  addPluginsToConfig(config, new SvgStorePlugin())

  if (stage === 'build-javascript' || stage === 'develop') {
    addPluginsToConfig(config, new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/service-worker/sw.js')
    }))
  }

  // Shrink CSS module class names in production
  if (stage === 'build-css' || stage === 'build-javascript' || stage === 'build-html') {
    const option = { localIdentName: '[hash:base64:10]' }
    changeCssloaderOptions(config, option)
  }

  actions.replaceWebpackConfig(config)
}

exports.onCreatePage = ({ page, actions }) => {
  // Create a localized page for each locale
  const { createPage, deletePage } = actions

  return new Promise((resolve, reject) => {
    deletePage(page)

    availableLocales.forEach((currentLocale) => {
      const acronym = currentLocale.acronym
      const localizedPath = `/${acronym}${page.path}`

      // Get JSON messages file
      const messages = require(`./intl/messages/${acronym}.json`)

      createPage({
        ...page,
        path: localizedPath,
        context: {
          messages,
          acronym
        }
      })

      // If this is the default locale, create the page without the language in the path
      if (acronym === defaultLocale) {
        createPage({
          ...page,
          path: page.path,
          context: {
            messages,
            acronym
          }
        })
      }
    })

    resolve()
  })
}
