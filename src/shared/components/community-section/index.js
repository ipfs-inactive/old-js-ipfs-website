import React from 'react'
import { FormattedMessage } from 'react-intl'

import HexSvg from 'shared/media/backgrounds/hexagons.svg'
// import data from 'shared/data/community'
import Button from 'shared/components/button'
import styles from './index.module.css'

const Community = () => (
  <div className={ styles.container }>
    <div className={ styles.backgroundSvg }>
      <div className={ styles.hex1 }><HexSvg /></div>
      <div className={ styles.hex2 }><HexSvg /></div>
    </div>
    <div className={ styles.content }>
      <FormattedMessage tagName="h1" id="communityTitle" />
      <span className={ styles.sectionDescription }>
        <FormattedMessage tagName="p" id="communityDesc" />
      </span>
      <div className={ styles.socialLinksContainer }>
        <FormattedMessage tagName="p" id="communitySocialTitle" />
        <div className={ styles.socialLinks }>
          <Button translationId="buttonIrcFreenode" path="test" />
          <Button translationId="buttonGithub" path="test" modifier="github" />
          <Button translationId="buttonTwitter" path="test" modifier="twitter" />
        </div>
      </div>
    </div>
    {/* <iframe frameBorder="0" src={ data.contributorsLink } /> */}
  </div>
)

export default Community
