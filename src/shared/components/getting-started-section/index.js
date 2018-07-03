import React from 'react'
import { FormattedMessage } from 'react-intl'

import HexSvg from 'shared/media/backgrounds/hexagons.svg'
import StepsList from 'shared/components/getting-started-section/steps-list'
import Button from 'shared/components/button'
import styles from './index.module.css'

const GettingStarted = () =>
  (
    <div className={styles.container}>
      <div className={styles.backgroundSvg}>
        <div className={styles.hex1}><HexSvg /></div>
        <div className={styles.hex2}><HexSvg /></div>
      </div>
      <div className={styles.content}>
        <FormattedMessage tagName='h1' id='gettingStartedTitle' />
        <span className={styles.sectionDescription}>
          <FormattedMessage tagName='p' id='gettingStartedSectionDesc' />
        </span>
        <div className={styles.panel} >
          <StepsList />
        </div>
        <Button translationId='buttonLearnMore' path='test' />
      </div>
    </div>
  )

export default GettingStarted
