/* Check date-fns supported languages here: https://date-fns.org/docs/I18n#supported-languages
  If react intl current locale does not match any of this exported locales, the default locale is 'en'
 */

import pt from 'date-fns/locale/pt'

// Same language. date-fns does not have br locale
const br = pt

export default { pt, br }
