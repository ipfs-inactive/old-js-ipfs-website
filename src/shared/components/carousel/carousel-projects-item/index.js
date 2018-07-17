import React from 'react'
import { PropTypes } from 'prop-types'

import Button from 'shared/components/button'
import styles from './index.module.css'

const CarouselProjectsItem = ({ icon, desc, image }) => (
  <div className={ styles.container }>
    <div className={ styles.leftContainer }>
      <div className={ styles.topContainer }>
        <div className={ styles.logo }>{ icon }</div>
        <div className={ styles.desc }>{ desc }</div>
      </div>
      <div className={ styles.bottomContainer }>
        <Button translationId="buttonLearnMore" path="/test" />
      </div>
    </div>
    <div className={ styles.rightContainer }><img src={ image } /></div>
  </div>
)

CarouselProjectsItem.propTypes = {
  icon: PropTypes.element.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default CarouselProjectsItem
