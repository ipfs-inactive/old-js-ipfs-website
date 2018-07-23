import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import Observer from 'react-intersection-observer'

import DesktopNavbar from 'shared/components/navbar/desktop'
import MobileNavbar from 'shared/components/navbar/mobile'
import styles from './index.module.css'

class Header extends Component {
  constructor () {
    super()

    this.state = {
      isSticky: false
    }
  }

  render () {
    const localesBarHeight = this.localesBarElem && this.localesBarElem.clientHeight
    const { className } = this.props
    const { isSticky } = this.state

    return (
      <header className={ classNames(styles.header, className) }>
        <Observer className={ styles.target } onChange={ this.handleObserverView } />
        <DesktopNavbar isSticky={ isSticky } localesBarHeight={ localesBarHeight } />
        <MobileNavbar />
      </header>
    )
  }

  handleObserverView = (inView) => this.setState({ isSticky: !inView })
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
