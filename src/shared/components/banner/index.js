import React from 'react'
import { FormattedMessage } from 'react-intl'

import closeSvg from 'shared/media/icons/close-button.svg'
import alphaSvg from 'shared/media/icons/alpha-sign.svg'
import styles from './index.module.css'

const Banner = () => (
  <div className={styles.container}>
    <div className={styles.iconContainer}>
      <img src={alphaSvg} />
    </div>
    <div className={styles.text}>
      <FormattedMessage tagName='strong' id='bannerHighlightMessage' />
      <FormattedMessage id='bannerMessage' />
    </div>
    <div className={styles.closeButtonContainer}>
      <img src={closeSvg} />
    </div>
  </div>
)

export default Banner
