import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.css'

const HorizontalScroller = ({ itemsArray, className }) => {
  const scrollerClasses = classNames(styles.container, className)
  return (
    <div className={ scrollerClasses }>
      { itemsArray }
    </div>
  )
}

HorizontalScroller.propTypes = {
  itemsArray: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default HorizontalScroller
