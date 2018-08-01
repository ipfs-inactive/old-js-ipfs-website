import React, { Component } from 'react'
import styles from './index.module.css'

class YoutubeEmbed extends Component {
  state = { clicked: false }
  render () {
    const id = this.props.link.split('v=')[1]
    return (
      <div onClick={ this.handleClick } className={ styles.youtubeEmbed } >
        { !this.state.clicked && <div>
          <img src={ `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }/>
          <div className={ styles.play }></div>
        </div> }
        { this.state.clicked && <iframe
          src={ `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` }
          frameBorder="0"
          allowFullScreen="1">
        </iframe> }
      </div>
    )
  }

  handleClick = () => {
    if (this.props.blockPlay) {
      return
    }
    this.setState({ clicked: true })
  }
}

export default YoutubeEmbed
