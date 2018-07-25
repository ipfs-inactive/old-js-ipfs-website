import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.css'

class ToggleButton extends Component {
  render () {
    const { isActive, type, className, title } = this.props
    const wrapperClasses = classnames(styles.wrapper, className)
    const sliderClasses = classnames(styles.slider, {
      [styles.round]: type === 'round',
      [styles.active]: isActive
    })

    return (
      <div className={ wrapperClasses }>
        <label className={ styles.switch } onClick={ this.handleToggleButton }>
          <span className={ sliderClasses } />
        </label>
        <span className={ styles.title }>{ title }</span>
      </div>
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
  title: PropTypes.string,
  type: PropTypes.oneOf(['round', 'rect']),
  className: PropTypes.string
}

export default ToggleButton
