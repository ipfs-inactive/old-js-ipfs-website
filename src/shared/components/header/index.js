import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

import LocalesBar from 'shared/components/locales-bar'
import DesktopNavbar from 'shared/components/navbar/desktop'
import MobileNavbar from 'shared/components/navbar/mobile'
import styles from './index.module.css'

class Header extends Component {
  constructor () {
    super()

    this.state = {
      scrolled: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const localesBarHeight = this.localesBarElem && this.localesBarElem.clientHeight
    const { className } = this.props
    const { scrolled } = this.state

    return (
      <header className={ classNames(styles.header, className) }>
        <LocalesBar scrolled={ scrolled } ref={ this.handleLocalesBarRef } />
        <DesktopNavbar scrolled={ scrolled } localesBarHeight={ localesBarHeight } />
        <MobileNavbar />
      </header>
    )
  }

    handleScroll = () => {
      const scrollY = window.scrollY
      const { scrolled } = this.state

      if (scrollY > 50 && !scrolled) {
        this.setState({
          scrolled: true
        })
      } else if (scrollY <= 50 && scrolled) {
        this.setState({
          scrolled: false
        })
      }
    }

    handleLocalesBarRef = (elementRef) => {
      this.localesBarElem = ReactDOM.findDOMNode(elementRef)
    }
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
