import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { defaultLocale, availableLocales } from 'shared/intl-config'

import Link from 'shared/components/link'
import styles from './index.module.css'

class LocalesDropdown extends Component {
  state = {
    isOpen: false
  }

  componentDidMount () {
    window.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.handleOutsideClick)
  }

  render () {
    const { intl: { locale: currentLocale }, className } = this.props

    const dropdownClasses = classNames(styles.dropdown, className)
    const dropButtonClasses = classNames(styles.dropButton, {
      [styles.openedDropdown]: this.state.isOpen
    })
    const arrowClasses = classNames(styles.arrowIcon, styles.arrowBottom, {
      [styles.arrowBottom]: !this.state.isOpen,
      [styles.arrowTop]: this.state.isOpen
    })
    const dropdownContentClasses = classNames(styles.dropdownContent, {
      [styles.show]: this.state.isOpen
    })

    const availableLocalesOptions = availableLocales.map((locale, index) => {
      const isSameLocale = locale.acronym === currentLocale

      if (isSameLocale) {
        return null
      }

      const to = defaultLocale === locale.acronym ? '/' : `/${locale.acronym}`

      return (
        <Link key={ index }
          to={ to }
          prefixLocale={ false }>
          { locale.acronym.toUpperCase() }
        </Link>
      )
    })

    return (
      <div className={ dropdownClasses }>
        <button className={ dropButtonClasses } onClick={ this.handleToggleDropdown }>
          { currentLocale.toUpperCase() }
          <span className={ arrowClasses } />
        </button>
        <div className={ dropdownContentClasses }>
          { availableLocalesOptions }
        </div>
      </div>
    )
  }

    handleToggleDropdown = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    handleOutsideClick = (event) => {
      const btnClass = `.${styles.dropButton}`

      if (!event.target.matches(btnClass) && this.state.isOpen) {
        this.setState({
          isOpen: false
        })
      }
    }
}

LocalesDropdown.propTypes = {
  intl: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default injectIntl(LocalesDropdown)
