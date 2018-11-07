const path = require('path')
const postcssReporter = require('postcss-reporter')

const importPath = [ path.join(__dirname, 'src') ]

const postcssPreset = require('postcss-preset-moxy')({
  importPath: importPath
})

postcssPreset.plugins.push(postcssReporter())

module.exports = postcssPreset
