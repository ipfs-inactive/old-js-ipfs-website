import React from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'

import HexSvg from 'shared/media/backgrounds/hexagons.svg'
// import data from 'shared/data/community'
import Button from 'shared/components/button'
import styles from './index.module.css'

const Community = ({ intl: { messages } }) => (
  <div className={ styles.container }>
    <div className={ styles.backgroundSvg }>
      <div className={ styles.hex1 }><HexSvg /></div>
      <div className={ styles.hex2 }><HexSvg /></div>
    </div>
    <div className={ styles.content }>
      <h1>{ messages.community.sectionTitle }</h1>
      <ReactMarkdown className={ styles.sectionDescription } source={ messages.community.sectionDesc } />
      <div className={ styles.socialLinksContainer }>
        <p>{ messages.community.socialNetworksText }</p>
        <div className={ styles.socialLinks }>
          <Button translationId="buttonIrcFreenode" path="/test" />
          <Button translationId="buttonGithub" path="/test" modifier="github" />
          <Button translationId="buttonTwitter" path="/test" modifier="twitter" />
        </div>
      </div>
    </div>
    {/* <iframe frameBorder="0" src={ data.contributorsLink } /> */}
  </div>
)

Community.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(Community)
