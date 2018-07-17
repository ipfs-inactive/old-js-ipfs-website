import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'

import CloseSvg from 'shared/media/icons/close-button.svg'
import AlphaSvg from 'shared/media/icons/alpha-sign.svg'
import styles from './index.module.css'

class Banner extends Component {
  constructor () {
    super()

    this.state = {
      isOpen: true
    }
  }

  render () {
    const { isOpen } = this.state
    const { intl: { messages: { banner } } } = this.props

    return (
      <div className={ isOpen ? styles.container : styles.hidden }>
        <div className={ styles.iconContainer }>
          <AlphaSvg />
        </div>
        <div className={ styles.wrapContainer }>
          <div className={ styles.textContainer } >
            <strong>{ banner.highlightMessage }</strong>
            <span>{ banner.message }</span>
          </div>
        </div>
        <div className={ styles.closeButtonContainer } onClick={ this.handleCloseButtonClick }>
          <CloseSvg />
        </div>
      </div>
    )
  }

    handleCloseButtonClick = () => {
      this.setState({
        isOpen: false
      })
    };
}

Banner.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(Banner)
