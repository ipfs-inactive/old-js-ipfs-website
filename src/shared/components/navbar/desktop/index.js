import React from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import Link from 'shared/components/link'
import styles from './index.module.css'

const DesktopNavbar = ({ scrolled, localesBarHeight, intl: { messages } }) => {
  const navbarClasses = classNames(styles.container,
    {
      [styles.default]: !scrolled,
      [styles.scrolled]: scrolled
    })
  const currentTranslateYValue = scrolled ? localesBarHeight : 0

  return (
    <div className={navbarClasses} style={{ transform: `translateY(-${currentTranslateYValue}px)` }}>
      <div className={styles.navbarMenu}>
        <Helmet>
          <script async defer src='https://buttons.github.io/buttons.js' />
        </Helmet>
        <Link to='/'> { messages.navMenuItem1.toUpperCase() } </Link>
        <Link to='/'> { messages.navMenuItem2.toUpperCase() } </Link>
        <Link to='/'> { messages.navMenuItem3.toUpperCase() } </Link>
        <Link to='/'> { messages.navMenuItem4.toUpperCase() } </Link>
        <a className='github-button' href='https://github.com/ntkme/github-buttons' data-show-count='true' aria-label='Star ntkme/github-buttons on GitHub'>
                        Star
        </a>
      </div>
    </div>
  )
}

DesktopNavbar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
  localesBarHeight: PropTypes.number
}

export default injectIntl(DesktopNavbar)
