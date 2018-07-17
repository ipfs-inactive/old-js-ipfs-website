import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import HexSvg from 'shared/media/backgrounds/hexagons.svg'
import StepsList from 'shared/components/getting-started-section/steps-list'
import Button from 'shared/components/button'
import styles from './index.module.css'

const GettingStarted = ({ intl: { messages: { gettingStarted } } }) =>
  (
    <div className={ styles.container }>
      <div className={ styles.backgroundSvg }>
        <div className={ styles.hex1 }><HexSvg /></div>
        <div className={ styles.hex2 }><HexSvg /></div>
      </div>
      <div className={ styles.content }>
        <h1>{ gettingStarted.sectionTitle }</h1>
        <span className={ styles.sectionDescription }>
          <p>{ gettingStarted.sectionDesc }</p>
        </span>
        <div className={ styles.panel } >
          <StepsList />
        </div>
        <Button translationId="buttonLearnMore" path="/test" />
      </div>
    </div>
  )

GettingStarted.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(GettingStarted)
