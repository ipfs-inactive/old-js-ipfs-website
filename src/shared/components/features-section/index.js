import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import FeatureItem from './feature-item'
import ReactMarkdown from 'react-markdown'

import featsArr from 'shared/data/features'
import Banner from 'shared/components/banner'
import styles from './index.module.css'

const Features = ({ intl: { messages } }) => {
  const translationFeats = messages.features.list
  const feats = featsArr.map((feat, index) => {
    const translationFeat = translationFeats[feat.translationListIndex]

    return (
      <FeatureItem
        key={ `feat-${index}` }
        className={ styles.featuresItem }
        title={ translationFeat.title }
        description={ translationFeat.desc }
        image={ feat.image } />
    )
  })

  return (
    <div className={ styles.container } >
      <Banner className={ styles.banner } />
      <div className={ styles.content } >
        <h1>{ messages.features.sectionTitle }</h1>
        <ReactMarkdown className={ styles.sectionDescription } source={ messages.features.sectionDesc } />
        <div className={ styles.featuresContainer }>
          { feats }
          { /* Repeat max items per row so that columns are aligned */ }
          <div className={ styles.featuresItem } />
          <div className={ styles.featuresItem } />
          <div className={ styles.featuresItem } />
          <div className={ styles.featuresItem } />
        </div>
      </div>
    </div>
  )
}

Features.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(Features)
