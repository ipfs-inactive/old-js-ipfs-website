import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import HexSvg from 'shared/media/backgrounds/hexagons.svg'
import StepsList from 'shared/components/getting-started-section/steps-list'
import Button from 'shared/components/button'
import styles from './index.module.css'

const GettingStarted = ({ intl: { messages } }) =>
  (
    <div className={ styles.container }>
      <div className={ styles.backgroundSvg }>
        <div className={ styles.hex1 }><HexSvg /></div>
        <div className={ styles.hex2 }><HexSvg /></div>
      </div>
      <div className={ styles.content }>
        <h1>{ messages.gettingStarted.sectionTitle }</h1>
        <ReactMarkdown className={ styles.sectionDescription } source={ messages.gettingStarted.sectionDesc } />
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
