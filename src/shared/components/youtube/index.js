import React, { PureComponent } from 'react'
import classNames from 'classnames'
import Svg from 'shared/components/svg'
import styles from './index.module.css'
import playSvg from './media/play.sprite.svg'
import ReactYoutube from 'react-youtube'

class Youtube extends PureComponent {
  youtubePlayerState = {
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5
  }

  state = { clicked: false, isVisible: true }

  componentDidUpdate (prevProps) {
    const currentLink = this.props.link
    const prevLink = prevProps.link

    prevLink !== currentLink && this.setState({ clicked: false, isVisible: true })
  }

  render () {
    const { link, blockPlay } = this.props
    const { clicked, isVisible } = this.state
    const id = link.split('v=')[1]
    const opts = { playerVars: { start: 1 } }
    const placeholderClasses = classNames(styles.placeholder,
      blockPlay && styles.placeholderSmall,
      !isVisible && styles.hide,
      clicked && styles.clicked
    )

    return (
      <div className={ styles.youtube }>
        <div className={ placeholderClasses } onClick={ this.handlePreviewClick }>
          <img className={ styles.thumbnail } src={ `https://i.ytimg.com/vi/${id}/hqdefault.jpg` } alt="" />
          <div className={ styles.play }>
            <Svg svg={ playSvg } />
          </div>
        </div>
        <ReactYoutube
          videoId={ id }
          opts={ opts }
          onReady={ this.handleOnReady }
          onStateChange={ this.handleOnStateChange }
          onPause={ this.handleOnPause }
        />
      </div>
    )
  }

  handleOnReady = (event) => (this.player = event.target)

  handleOnStateChange = (event) => (this.playerState = event.target.getPlayerState())

  handleOnPause = (event) => {
    /*
      The way the youtube API works when navigating through the seekbar, is:
      1 - Pauses the video (2)
      2 - Enters the buffering stage (3)
      3 - Plays the video (1)
      Before starting buffering it always pauses, so we need to check if the state will keep paused or
      change again, and a timeout seems to do the trick.
      If we had a callback `onSeek` this wouldn't be a problem.
    */
    setTimeout(() => this.playerState === this.youtubePlayerState.PAUSED && this.setState({ isVisible: true }), 175)
  }

  handlePreviewClick = () => {
    if (this.props.blockPlay) return

    this.setState({ clicked: true, isVisible: false })
    this.player.playVideo()
  }
}

export default Youtube
