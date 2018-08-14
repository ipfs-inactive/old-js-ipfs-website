/* eslint-disable prefer-import/prefer-import-over-require */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const fs = require('fs')
const template = require('lodash/template')
const wrap = require('lodash/wrap')
const { defaultLocale, availableLocales } = require('./intl/config')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const SvgStorePlugin = require('external-svg-sprite-loader/lib/SvgStorePlugin')

module.exports.modifyWebpackConfig = ({ config, program, stage }) => {
  // Allow requires from the src/ folder
  config.merge({
    resolve: {
      root: path.join(__dirname, 'src')
    },
    target: 'web'
  })

  // Fix Gatsby setting `resolve.modulesDirectories` to `path.resolve(__dirname, "node_modules")`
  // which causes module resolution errors when the npm tree is deduped
  // See https://github.com/webpack/webpack/issues/6538#issuecomment-367324775
  config.merge((current) => {
    current.resolve.modulesDirectories = ['node_modules']

    return current
  })

  // Allow requires from the src/ folder for postcss
  config.merge((current) => {
    const importPath = [
      path.join(__dirname, 'src')
    ]

    if (typeof current.postcss === 'function') {
      current.postcss = wrap(current.postcss, (postcss, wp) => [
        require('postcss-import')({ addDependencyTo: wp, path: importPath }),
        ...postcss(wp).slice(1, 3),
        // Fix some weird reporting errors, see https://github.com/gatsbyjs/gatsby/issues/673#issuecomment-344245406
        // This makes sure that the most recent updated `postcss-reporter` is used
        require('postcss-reporter')
      ])
    } else if (current.postcss) {
      current.postcss[0] = require('postcss-import')({ path: importPath })
    }

    return current
  })

  // Setup Babel & PostCSS
  config.merge((current) => {
    config.loader('js', (current) => {
      current.query = {
        ...current.query,
        presets: [
          [require.resolve('babel-preset-moxy'), {
            react: true,
            modules: 'commonjs',
            targets: {
              browsers: program.browserslist
            }
          }]
        ],
        plugins: [
          require.resolve('react-hot-loader/babel'),
          require.resolve('gatsby/dist/utils/babel-plugin-extract-graphql')
        ]
      }

      return current
    })

    return current
  })

  // Optimize bundle
  config.merge((current) => {
    current.node = {
      ...current.node,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

    return current
  })

  // Setup service worker gateway
  config.merge((current) => {
    current.plugins.push(new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/shared/service-worker/sw.js')
    }))

    return current
  })

  // SVGs (external + inline + standard)
  config.merge((current) => {
    // External SVGs
    config.loader('external-svgs-1', (current) => ({
      test: /\.sprite\.svg$/,
      loader: 'external-svg-sprite-loader',
      query: {
        test: /\.svg$/,
        name: 'static/svg-sprite.[hash].svg'
      }
    }))

    config.loader('external-svgs-2', (current) => ({
      test: /\.sprite\.svg$/,
      loader: 'svgo-loader',
      query: {
        plugins: [
          { removeViewBox: false },
          { removeDimensions: true },
          { inlineStyles: { onlyMatchedOnce: false } },
          { removeAttrs: { attrs: 'class' } }
        ]
      }
    }))

    current.plugins.push(new SvgStorePlugin())

    // Inline SVGs
    config.loader('inline-svgs-1', () => ({
      loader: 'raw-loader',
      test: /\.inline\.svg$/
    }))

    config.loader('inline-svgs-2', () => ({
      loader: 'svgo-loader',
      test: /\.inline\.svg$/,
      query: {
        plugins: [
          { removeDimensions: true },
          { cleanupIDs: false }
        ]
      }
    }))

    config.loader('inline-svgs-3', () => ({
      loader: 'svg-css-modules-loader',
      test: /\.inline\.svg$/,
      query: {
        transformId: true
      }
    }))

    // Standard SVGs referenced by a URL
    config.loader('standard-svgs-1', () => ({
      test: /\.svg$/,
      exclude: [/\.sprite\.svg$/, /\.inline\.svg$/],
      loader: 'file-loader'
    }))

    config.loader('standard-svgs-2', () => ({
      test: /\.svg$/,
      exclude: [/\.sprite\.svg$/, /\.inline\.svg$/],
      loader: 'svgo-loader',
      query: {
        plugins: [
          { inlineStyles: { onlyMatchedOnce: false } },
          { removeAttrs: { attrs: 'class' } }
        ]
      }
    }))

    // Ensure that the Gatsby's default SVG handling doesn't mess with the previous declarations
    config.loader('url-loader', (current) => ({
      ...current,
      exclude: /\.svg$/
    }))

    return current
  })

  // Do not inline images
  // We have a lot of small images that summed together increase the inital HTML files by a lot
  config.loader('url-loader', (current) => ({
    ...current,
    loader: 'file-loader'
  }))

  // Shrink CSS module class names in production
  if (stage === 'build-css' || stage === 'build-javascript' || stage === 'build-html') {
    config.loader('cssModules', (current) => ({
      ...current,
      loader: current.loader.replace(/localIdentName=[^!]+/, 'localIdentName=[hash:base64:10]')
    }))
  }
}

exports.createLayouts = () => {
  // Create a layout for each locale, based on a template
  const layoutTemplate = fs.readFileSync(path.join(__dirname, 'src/layouts/index.js'))

  availableLocales.forEach((locale) => {
    const acronym = locale.acronym
    const localeLayout = template(layoutTemplate)({ locale: acronym })
      .replace(/LayoutQuery/, `LayoutQuery_${acronym}`)

    fs.writeFileSync(path.join(__dirname, `src/layouts/index-${acronym}.js`), localeLayout)
  })
}

exports.onCreatePage = ({ page, boundActionCreators }) => {
  // Create a localized page for each locale
  const { createPage, deletePage } = boundActionCreators

  deletePage(page)

  availableLocales.forEach((locale) => {
    const acronym = locale.acronym

    createPage({
      ...page,
      layout: `index-${acronym}`,
      path: `/${acronym}${page.path}`
    })

    // If this is the default locale, create the page without the language in the path
    if (acronym === defaultLocale) {
      createPage({
        ...page,
        layout: `index-${acronym}`,
        path: page.path
      })
    }
  })
}
