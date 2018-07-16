import React from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import { getDefaultLocale, getLocales, getIndexByAcronym } from 'utils/getLocalesUtils'

import Link from 'shared/components/link'
import styles from './index.module.css'

const LocalesBar = ({ scrolled, intl: { locale } }) => {
  const locales = getLocales()
  const currentLocaleIndex = getIndexByAcronym(locale)
  const localesBarClassName = classNames(styles.localesBar, {
    [styles.defaultLocalesBar]: !scrolled,
    [styles.hideLocalesBar]: scrolled
  })
  const defaultLocale = getDefaultLocale()
  const renderLocales = locales.map((locale, index) => {
    const to = defaultLocale === locale.acronym ? '/' : `/${locale.acronym}`
    return (
      <Link key={ `localeF-${index}` }
        changeLocale
        className={ index === currentLocaleIndex && styles.active }
        to={ to } >
        { locale.fullForm }
      </Link>
    )
  })

  return (
    <div className={ localesBarClassName }>
      { renderLocales }
    </div>
  )
}

LocalesBar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired
}

export default injectIntl(LocalesBar)
