import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

import RemainingVideo from 'shared/components/publications-and-talks-section/videos-list/remaining-video'
import styles from './index.module.css'

class VideosList extends Component {
  constructor (props) {
    super(props)

    const { list } = props
    const activeIndex = list.findIndex(this.findActiveVideo)

    this.state = { activeIndex }
  }

  render () {
    return (
      <div className={ styles.talksContainer }>
        { this.renderActiveVideo() }
        <div className={ styles.remainingVideosContainer }>
          { this.renderRemainingVideos() }
        </div>
      </div>
    )
  }

    renderActiveVideo = () => {
      const { activeIndex } = this.state
      const { list } = this.props
      const activeVideo = list[activeIndex]

      return (
        <div className={ styles.selectedVideo }>
          <ReactPlayer
            className={ styles.reactPlayer }
            url={ activeVideo.link }
            width="100%"
            height="100%" />
        </div>
      )
    }

    renderRemainingVideos = () => {
      const { list } = this.props
      const { activeIndex } = this.state

      return list.map((video, index) => (
        index !== activeIndex &&
                <RemainingVideo video={ video } key={ `video-${index}` } index={ index } onClick={ this.handleRemainingVideoClick } />
      ))
    }

    findActiveVideo = (video) => Boolean(video.active)

    handleRemainingVideoClick = (activeIndex) => {
      this.setState({ activeIndex })
    }
}

VideosList.propTypes = {
  list: PropTypes.array.isRequired
}

export default VideosList
