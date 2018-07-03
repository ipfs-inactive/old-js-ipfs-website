import React from 'react'
import { FormattedMessage } from 'react-intl'

import Accordion from 'shared/components/what-can-you-build-section/accordion'
import styles from './index.module.css'

const WhatCanYouBuild = () => (
  <div className={ styles.container }>
    <div className={ styles.content }>
      <FormattedMessage tagName="h1" id="whatCanYouBuildTitle" />
      <span className={ styles.sectionDescription }>
        <FormattedMessage tagName="p" id="whatCanYouBuildSectionDesc" />
      </span>
    </div>
    <Accordion className={ styles.accordion } />
  </div>
)

export default WhatCanYouBuild
