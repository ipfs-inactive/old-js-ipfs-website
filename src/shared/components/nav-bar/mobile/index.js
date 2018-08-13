import React, { Component } from 'react'
import Helmet from 'react-helmet'
import classNames from 'classnames'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import LocalesDropdown from 'shared/components/locales-dropdown'
import Link from 'shared/components/link'
import styles from './index.module.css'

class MobileNavBar extends Component {
  state = {
    isOpen: false,
    scrolled: false
  };

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const menuListHeight = this.state.isOpen ? this.menuListElem && this.menuListElem.scrollHeight : 0
    const navBarContainerClasses = classNames(styles.navBarContainer, {
      [styles.navBarContainerScrolled]: this.state.scrolled || this.state.isOpen
    })
    const hamburgerClasses = classNames(styles.hamburger, {
      [styles.hamburgerOpened]: this.state.isOpen
    })
    const { messages } = this.props.intl

    return (
      <div className={ styles.container }>
        <div className={ navBarContainerClasses }>
          <div className={ hamburgerClasses } onClick={ this.handleMenuClick } >
            <div className={ styles.bar1 } />
            <div className={ styles.bar2 } />
            <div className={ styles.bar3 } />
          </div>
          <LocalesDropdown className={ styles.localesDropdown } />
        </div>
        <ul className={ styles.menuList } ref={ this.handleMenuListRef } style={ { maxHeight: menuListHeight } } >
          <Helmet>
            <script async defer src="https://buttons.github.io/buttons.js" />
          </Helmet>
          <li><div className={ styles.menuLink } onClick={ this.handleGettingStartedClick }> { messages.navBar.item1 } </div> </li>
          <li><Link className={ styles.menuLink } href="https://github.com/ipfs/js-ipfs/tree/master/examples#js-ipfs-examples-and-tutorials"> { messages.navBar.item2 } </Link> </li>
          <li><Link className={ styles.menuLink } href="https://github.com/ipfs/interface-ipfs-core/tree/master/SPEC"> { messages.navBar.item3 } </Link> </li>
          <li className={ styles.githubContributers }>
            <Link className={ styles.menuLink } href="https://github.com/ipfs/js-ipfs"> { messages.navBar.item4 } </Link>
            <a className="github-button"
              href="https://github.com/ipfs/js-ipfs"
              data-show-count="true"
              aria-label="Star ipfs/js-ipfs on GitHub">
                Star
            </a>
          </li>
        </ul>
      </div>
    )
  }

    handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > 30 && !this.state.scrolled) {
        this.setState({
          scrolled: true
        })
      } else if (scrollY <= 30 && this.state.scrolled) {
        this.setState({
          scrolled: false
        })
      }
    }

    handleMenuClick = () => {
      this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
    }

    handleMenuListRef = (element) => {
      this.menuListElem = element
    }

    handleGettingStartedClick = () => {
      this.setState({ isOpen: false })
      this.props.onGoToGettingStarted()
    }
}

MobileNavBar.propTypes = {
  intl: PropTypes.object.isRequired,
  onGoToGettingStarted: PropTypes.func
}

export default injectIntl(MobileNavBar)
