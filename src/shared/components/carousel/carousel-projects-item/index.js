import React from 'react'
import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'

import Button from 'shared/components/button'
import styles from './index.module.css'

const CarouselProjectsItem = ({ icon, desc, link, image, index }) => {
  const shouldAlignLeft = index === 2
  const svgsClasses = classNames(styles.logo, {
    [styles.alignLeft]: shouldAlignLeft
  })
  return (
    <div className={ styles.container }>
      <div className={ styles.leftContainer }>
        <div className={ styles.topContainer }>
          { icon && <div className={ svgsClasses }>{ icon }</div> }
          <ReactMarkdown className={ styles.desc } source={ desc } />
        </div>
        <div className={ styles.bottomContainer }>
          <Button translationId="buttonLearnMore" href={ link } />
        </div>
      </div>
      <div className={ styles.rightContainer }><img src={ image } /></div>
    </div>
  )
}

CarouselProjectsItem.propTypes = {
  icon: PropTypes.element,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default CarouselProjectsItem
