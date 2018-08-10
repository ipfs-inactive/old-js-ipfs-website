import React from 'react'
import { injectIntl } from 'react-intl'
import Carousel from 'shared/components/carousel'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import Svg from 'shared/components/svg'
import hexagonsSvg from 'shared/media/images/hexagons.sprite.svg'
import projectsArr from 'shared/data/what-are-people-building'
import styles from './index.module.css'

const WhatArePeopleBuilding = ({ intl: { messages } }) => (
  <div className={ styles.container }>
    <div className={ styles.backgroundSvg }>
      <div className={ styles.hex1 }><Svg svg={ hexagonsSvg } /></div>
      <div className={ styles.hex2 }><Svg svg={ hexagonsSvg } /></div>
    </div>
    <div className={ styles.content }>
      <h1>{ messages.whatArePeopleBuilding.sectionTitle }</h1>
      <ReactMarkdown className={ styles.sectionDescription } source={ messages.whatArePeopleBuilding.sectionDesc } />
      <Carousel itemsList={ projectsArr } translationsList={ messages.whatArePeopleBuilding.list } />
    </div>
  </div>
)

WhatArePeopleBuilding.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(WhatArePeopleBuilding)
