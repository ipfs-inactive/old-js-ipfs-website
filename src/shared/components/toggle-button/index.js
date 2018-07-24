import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.css'

class ToggleButton extends Component {
  render () {
    const { isActive, type, className } = this.props
    const switchClasses = classnames(styles.switch, className)
    const sliderClasses = classnames(styles.slider, {
      [styles.round]: type === 'round',
      [styles.active]: isActive
    })

    return (
      <label className={ switchClasses } onClick={ this.handleToggleButton }>
        <span className={ sliderClasses } />
      </label>
    )
  }

  handleToggleButton = () => {
    this.props.onClick()
  }
}

ToggleButton.defaultProps = {
  type: 'round'
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['round', 'rect']),
  className: PropTypes.string
}

export default ToggleButton
