import React from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import { defaultLocale, availableLocales } from 'shared/intl-config'

import Svg from 'shared/components/svg'
import iconAdd from 'shared/media/images/icon-add.sprite.svg'
import Link from 'shared/components/link'
import styles from './index.module.css'

const LocalesBar = ({ intl: { locale: currentLocale, messages }, className }) => {
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
      <Link className={ styles.addLanguage } href="https://github.com/ipfs/js.ipfs.io#internationalization-i18n">
        <Svg svg={ iconAdd } />
        { messages.buttons.buttonAddLanguage }
      </Link>
    </div>
  )
}

LocalesBar.propTypes = {
  intl: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default injectIntl(LocalesBar)
