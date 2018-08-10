import React from 'react'
import { injectIntl } from 'react-intl'
import ReactMarkdown from 'react-markdown'

import Accordion from './accordion'
import styles from './index.module.css'

const WhatCanYouBuild = ({ intl: { messages } }) => (
  <div className={ styles.container }>
    <div className={ styles.content }>
      <h1>{ messages.whatCanYouBuildTitle }</h1>
      <ReactMarkdown className={ styles.sectionDescription } source={ messages.whatCanYouBuildSectionDesc } />
    </div>
    <Accordion className={ styles.accordion } />
  </div>
)

export default injectIntl(WhatCanYouBuild)
