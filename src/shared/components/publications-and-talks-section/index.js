import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import Svg from 'shared/components/svg'
import hexagonsSvg from 'shared/media/images/hexagons.sprite.svg'
import videosArr from 'shared/data/publications-and-talks'
import VideosList from './videos-list'
import styles from './index.module.css'

const PublicationsAndTalks = ({ intl: { messages } }) => (
  <div className={ styles.container }>
    <div className={ styles.backgroundSvg }>
      <div className={ styles.hex1 }><Svg svg={ hexagonsSvg } /></div>
      <div className={ styles.hex2 }><Svg svg={ hexagonsSvg } /></div>
    </div>
    <div className={ styles.content } >
      <h1>{ messages.publicationsAndTalks.sectionTitle }</h1>
      <ReactMarkdown className={ styles.sectionDescription } source={ messages.publicationsAndTalks.sectionDesc } />
      <VideosList list={ videosArr } />
    </div>
  </div>
)

PublicationsAndTalks.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(PublicationsAndTalks)
