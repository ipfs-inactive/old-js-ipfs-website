import React from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'

import AlphaSvg from 'shared/media/icons/alpha-sign.svg'
import styles from './index.module.css'

const Banner = ({ intl: { messages } }) => (
  <div className={ styles.container }>
    <div className={ styles.iconContainer }>
      <AlphaSvg />
    </div>
    <div className={ styles.wrapContainer }>
      <div className={ styles.textContainer } >
        <strong>{ messages.banner.highlightMessage }</strong>
        <span>{ messages.banner.message }</span>
      </div>
    </div>
  </div>
)

Banner.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(Banner)
