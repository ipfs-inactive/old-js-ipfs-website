import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import Observer from '@researchgate/react-intersection-observer'

import DesktopNavbar from 'shared/components/navbar/desktop'
import MobileNavbar from 'shared/components/navbar/mobile'
import styles from './index.module.css'

const defaultScrollOptions = { offset: -66, align: 'top', duration: 800 }

class Header extends Component {
  state = {
    isSticky: false,
    gettingStartedElement: undefined
  }

  componentDidMount () {
    this.scrollToComponent = require('react-scroll-to-component')
    this.setState({
      gettingStartedElement: document.getElementById('gsContainer')
    })
  }

  render () {
    const { className } = this.props
    const { isSticky } = this.state

    return (
      <header className={ classNames(styles.header, className) }>
        <Observer className={ styles.target } onChange={ this.handleObserverChange }>
          <span />
        </Observer>
        <DesktopNavbar isSticky={ isSticky } onGoToGettingStarted={ this.handleGoToGettingStarted } />
        <MobileNavbar onGoToGettingStarted={ this.handleGoToGettingStarted } />
      </header>
    )
  }

  handleObserverChange = ({ isIntersecting }) => this.setState({ isSticky: !isIntersecting })

  handleGoToGettingStarted = () => {
    this.scrollToComponent(this.gettingStartedElement, defaultScrollOptions)
  }
}

Header.propTypes = {
  className: PropTypes.string
}

export default Header
