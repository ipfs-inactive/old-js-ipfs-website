import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import FeatureItem from 'shared/components/features-section/feature-item'

import featsArr from 'shared/data/features'
import styles from './index.module.css'

const Features = ({ intl: { messages: { features } } }) => {
  const translationFeats = features.list
  const feats = featsArr.map((feat, index) => {
    const translationFeat = translationFeats[feat.translationListIndex]
    return (
      <FeatureItem key={ `feat-${index}` }
        title={ translationFeat.title }
        description={ translationFeat.desc }
        icon={ feat.icon } />
    )
  })

  return (
    <div className={ styles.container }>
      <div className={ styles.content } >
        <h1>{ features.sectionTitle }</h1>
        <span className={ styles.sectionDescription }>
          <p>{ features.sectionDesc }</p>
        </span>
        <div className={ styles.featuresContainer }>
          { feats }
        </div>
      </div>
    </div>
  )
}

Features.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(Features)
