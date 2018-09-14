import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Svg from 'shared/components/svg'

import arrowSvg from '../images/arrow.sprite.svg'
import styles from './index.module.css'

const Arrow = ({ direction, handleOnClick, className, active }) => {
  const containerClasses = classNames(styles.container, className, styles[direction])
  const buttonClasses = classNames(styles.button, {
    [styles.inactive]: !active
  })

  return (
    <div className={ containerClasses }>
      <div className={ buttonClasses } onClick={ handleOnClick }>
        <Svg svg={ arrowSvg } />
      </div>
    </div>
  )
}

Arrow.defaultProps = {
  direction: 'right'
}

Arrow.propTypes = {
  direction: PropTypes.string,
  handleOnClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool
}

export default Arrow
