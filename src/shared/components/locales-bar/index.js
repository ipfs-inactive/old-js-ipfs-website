import React from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import { defaultLocale, availableLocales } from 'shared/intl-config'

import Link from 'shared/components/link'
import styles from './index.module.css'

const LocalesBar = ({ intl: { locale: currentLocale }, className }) => {
  const localesBarClassName = classNames(styles.localesBar, className)
  const renderLocales = availableLocales.map((locale, index) => {
    const to = defaultLocale === locale.acronym ? '/' : `/${locale.acronym}/`

    return (
      <Link key={ `locale-${index}` }
        prefixLocale={ false }
        className={ classNames(currentLocale === locale.acronym && styles.active) }
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
  intl: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default injectIntl(LocalesBar)
