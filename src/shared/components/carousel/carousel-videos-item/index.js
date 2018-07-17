import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

import styles from './index.module.css'

class CarouselVideosItem extends Component {
  render () {
    const { link, title } = this.props

    return (
      <div className={ styles.videoItemContainer } onClick={ this.handleRemainingVideoClick }>
        <div className={ styles.videoPlaceholder }>
          <ReactPlayer
            className={ styles.reactPlayer }
            url={ link }
            width="100%"
            height="100%" />
        </div>
        <p className={ styles.videoTitle }>{ title }</p>
      </div>
    )
  }

  handleRemainingVideoClick = () => {
    const { index, onClick } = this.props

    return onClick(index)
  }
}

CarouselVideosItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CarouselVideosItem
