import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const HorizontalScroller = ({ itemsArray }) => {
  return (
    <div className={ styles.container }>
      { itemsArray }
    </div>
  )
}

HorizontalScroller.propTypes = {
  itemsArray: PropTypes.array.isRequired
}

export default HorizontalScroller
