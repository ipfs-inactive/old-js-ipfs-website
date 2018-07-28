import React, { Component } from 'react'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import Link from 'shared/components/link'
import styles from './index.module.css'

class DesktopNavbar extends Component {
  render () {
    const { isSticky, intl: { messages } } = this.props
    const navbarClasses = classNames(styles.container,
      {
        [styles.sticky]: isSticky
      })

    return (
      <div className={ navbarClasses } >
        <div className={ styles.navbarMenu }>
          <Helmet>
            <script async defer src="https://buttons.github.io/buttons.js" />
          </Helmet>
          <div className={ styles.link } onClick={ this.handleGettingStartedClick }> { messages.navbar.item1 } </div>
          <Link href="https://github.com/ipfs/js-ipfs/tree/master/examples#js-ipfs-examples-and-tutorials">
            { messages.navbar.item2 }
          </Link>
          <Link href="https://github.com/ipfs/interface-ipfs-core/tree/master/SPEC">
            { messages.navbar.item3 }
          </Link>
          <Link href="https://github.com/ipfs/js-ipfs">
            { messages.navbar.item4 }
          </Link>
          <a className="github-button" href="https://github.com/ipfs/js-ipfs" data-show-count="true" aria-label="Star ipfs/js-ipfs on GitHub">
              Star
          </a>
        </div>
      </div>
    )
  }

  handleGettingStartedClick = () => {
    this.props.onGoToGettingStarted()
  }
}

DesktopNavbar.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
  onGoToGettingStarted: PropTypes.func
}

export default injectIntl(DesktopNavbar)
