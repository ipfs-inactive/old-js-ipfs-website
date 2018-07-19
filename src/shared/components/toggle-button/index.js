import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.css'

class ToggleButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: props.initialState || false
    }
  }

  render () {
    const { isActive } = this.state
    const { type } = this.props
    const sliderClasses = classnames(styles.slider, {
      [styles.round]: type === 'round',
      [styles.active]: isActive
    })

    return (
      <label className={ styles.switch } onClick={ this.handleToggleButton }>
        <span className={ sliderClasses } />
      </label>
    )
  }

  handleToggleButton = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }))
  }
}

ToggleButton.defaultProps = {
  type: 'round'
}

ToggleButton.propTypes = {
  initialState: PropTypes.bool,
  type: PropTypes.oneOf(['round', 'rect'])
}

export default ToggleButton
