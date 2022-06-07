const langmap = require('langmap')
const locales = [
  'ar',
  'ca',
  'cs',
  'da',
  'de',
  'en',
  'fr',
  'id',
  'it',
  'ja-JP',
  'ko-KR',
  'nl',
  'pl',
  'pt',
  'pt-BR',
  'ru',
  'tr',
  'zh-CN'
]
module.exports = {
  defaultLocale: 'en',
  availableLocales: locales.map(l => { return { acronym: l, fullForm: langmap[l].nativeName } })
}
