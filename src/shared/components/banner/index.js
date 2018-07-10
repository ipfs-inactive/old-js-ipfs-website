import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

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

    return (
      <div className={ isOpen ? styles.container : styles.hidden }>
        <div className={ styles.iconContainer }>
          <AlphaSvg />
        </div>
        <div className={ styles.textContainer }>
          <div className={ styles.test } >
            <FormattedMessage tagName="strong" id="bannerHighlightMessage" />
            <FormattedMessage id="bannerMessage" />
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

export default Banner
