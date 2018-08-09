import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Arrow = ({ direction, onClick }) => {
  const containerClasses = classNames(styles.container, styles[direction])

  return (
    <button onClick={ onClick } className={ containerClasses }>
      <span className={ styles.arrow } />
    </button>
  )
}

Arrow.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(['left', 'right']).isRequired
}

export default Arrow
