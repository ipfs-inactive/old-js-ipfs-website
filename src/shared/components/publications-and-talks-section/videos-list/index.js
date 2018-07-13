import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import Carousel from 'shared/components/carousel'

import styles from './index.module.css'

const defaultScrollOptions = { offset: 0, align: 'center', duration: 600 }

class VideosList extends Component {
  constructor (props) {
    super(props)

    const { list } = props
    const activeIndex = list.findIndex(this.findActiveVideo)

    this.state = { activeIndex }
  }

  componentDidMount () {
    this.scrollToComponent = require('react-scroll-to-component')
  }

  render () {
    return (
      <div className={ styles.talksContainer }>
        { this.renderActiveVideo() }
        <div className={ styles.remainingVideosContainer }>
          { this.renderVideosCarousel() }
        </div>
      </div>
    )
  }

    renderActiveVideo = () => {
      const { activeIndex } = this.state
      const { list } = this.props
      const activeVideo = list[activeIndex]

      return (
        <div className={ styles.selectedVideo } ref={ this.handleAtiveVideoRef }>
          <ReactPlayer
            className={ styles.reactPlayer }
            url={ activeVideo.link }
            width="100%"
            height="100%" />
        </div>
      )
    }

    renderVideosCarousel = () => {
      const { list } = this.props
      const { activeIndex } = this.state
      return <Carousel itemsList={ list }
        modifier="videos"
        size={ 3 }
        onVideoClick={ this.handleRemainingVideoClick }
        activeIndex={ activeIndex } />
    }

    findActiveVideo = (video) => Boolean(video.active)

    handleRemainingVideoClick = (activeIndex) => {
      this.setState({ activeIndex })
      this.scrollToComponent(this.activeVideoRef, defaultScrollOptions)
    }

    handleAtiveVideoRef = (element) => {
      this.activeVideoRef = element
    }
}

VideosList.propTypes = {
  list: PropTypes.array.isRequired
}

export default VideosList
