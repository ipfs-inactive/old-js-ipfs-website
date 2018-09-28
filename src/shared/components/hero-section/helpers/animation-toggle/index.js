import React from 'react'
import classNames from 'classnames'
import { PropTypes } from 'prop-types'

import styles from './index.module.css'

const AnimationToggle = ({ className, title, onToggleClick }) => {
  const buttonClasses = classNames(styles.animationToggleButton, className)

  const handleClick = () => onToggleClick()

  return (
    <div className={ buttonClasses } onClick={ handleClick }>
      { title }
    </div>
  )
}

AnimationToggle.propTypes = {
  className: PropTypes.string,
  onToggleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default AnimationToggle
