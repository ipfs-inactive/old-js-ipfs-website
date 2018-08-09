import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import ReactTooltip from 'react-tooltip'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.css'

class ToggleButton extends Component {
  render () {
    const { isActive, incompatible, inProgress, type, className } = this.props
    const { messages } = this.props.intl
    const wrapperClasses = classnames(styles.wrapper, className, {
      [styles.incompatible]: incompatible,
      [styles.inProgress]: inProgress
    })
    const sliderClasses = classnames(styles.slider, {
      [styles.round]: type === 'round',
      [styles.active]: isActive
    })
    const titleClasses = classnames(styles.title, {
      [styles.active]: isActive
    })

    return (
      <div data-tip data-for='incompatible-sw' className={ wrapperClasses }>
        <label className={ styles.switch } onClick={ this.handleToggleButton }>
          <span className={ sliderClasses } />
        </label>
        <span className={ titleClasses }>
          { this.getToggleText() }
        </span>
        {
          incompatible && (
            <ReactTooltip id='incompatible-sw' className={ styles.tooltip }>
              { messages.serviceWorker.incompatibleMessageText }
            </ReactTooltip>
          )
        }
      </div>
    )
  }

  handleToggleButton = () => {
    this.props.onClick()
  }

  getToggleText = () => {
    const { isActive, inProgress, intl: { messages } } = this.props

    if (!isActive) {
      return (!inProgress ? messages.serviceWorker.toggleText : messages.serviceWorker.activatingToggleText)
    }
    return messages.serviceWorker.activatedToggleText
  }
}

ToggleButton.defaultProps = {
  type: 'round'
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['round', 'rect']),
  className: PropTypes.string,
  incompatible: PropTypes.bool,
  inProgress: PropTypes.bool
}

export default injectIntl(ToggleButton)
