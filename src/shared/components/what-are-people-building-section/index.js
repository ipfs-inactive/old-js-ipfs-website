import React from 'react'
import { injectIntl } from 'react-intl'
import Carousel from 'shared/components/carousel'
import PropTypes from 'prop-types'

import HexSvg from 'shared/media/backgrounds/hexagons.svg'
import projectsArr from 'shared/data/what-are-people-building'
import styles from './index.module.css'

const WhatArePeopleBuilding = ({ intl: { messages: { whatArePeopleBuilding } } }) => (
  <div className={ styles.container }>
    <div className={ styles.backgroundSvg }>
      <div className={ styles.hex1 }><HexSvg /></div>
      <div className={ styles.hex2 }><HexSvg /></div>
    </div>
    <div className={ styles.content }>
      <h1>{ whatArePeopleBuilding.sectionTitle }</h1>
      <span className={ styles.sectionDescription }>
        <p>{ whatArePeopleBuilding.sectionDesc }</p>
      </span>
      <Carousel itemsList={ projectsArr } translationsList={ whatArePeopleBuilding.list } />
    </div>
  </div>
)

WhatArePeopleBuilding.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(WhatArePeopleBuilding)
