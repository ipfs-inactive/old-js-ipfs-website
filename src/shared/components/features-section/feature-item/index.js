import React from 'react'
import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'

import styles from './index.module.css'

const FeatureItem = ({ icon, title, description }) => (
  <div className={ styles.featureItem }>
    <div className={ styles.image }>
      { icon }
    </div>
    <ReactMarkdown className={ styles.title } source={ title } />
    <ReactMarkdown className={ styles.description } source={ description } />
  </div>
)

FeatureItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default FeatureItem
