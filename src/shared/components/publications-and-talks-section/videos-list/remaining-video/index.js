import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

import styles from './index.module.css'

class RemainingVideo extends Component {
  render () {
    const { video, intl: { messages } } = this.props

    return (
      <div className={ styles.videoItemContainer } onClick={ this.handleRemainingVideoClick }>
        <div className={ styles.videoPlaceholder }>
          <ReactPlayer
            className={ styles.reactPlayer }
            url={ video.link }
            width="100%"
            height="100%" />
        </div>
        <p className={ styles.videoDescription }>{ messages[video.description] }</p>
      </div>
    )
  }

    handleRemainingVideoClick = () => {
      const { index } = this.props

      return this.props.onClick(index)
    }
}

RemainingVideo.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
}

export default injectIntl(RemainingVideo)
