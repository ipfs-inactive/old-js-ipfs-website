import React, { Component } from 'react'
import classNames from 'classnames'
import Svg from 'shared/components/svg'
import styles from './index.module.css'
import playSvg from './media/play.sprite.svg'

class Youtube extends Component {
  state = { clicked: false }

  render () {
    const { link, blockPlay } = this.props
    const id = link.split('v=')[1]

    return (
      <div onClick={ this.handleClick } className={ styles.youtube } >
        { !this.state.clicked && (
          <div className={ classNames(styles.preview, blockPlay && styles.previewSmall) }>
            <img className={ styles.thumbnail } src={ `https://i.ytimg.com/vi/${id}/hqdefault.jpg` } alt="" />
            <div className={ styles.play }>
              <Svg svg={ playSvg } />
            </div>
          </div>
        ) }
        { this.state.clicked && (
          <iframe
            src={ `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` }
            frameBorder="0"
            allowFullScreen="1">
          </iframe>
        ) }
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

export default Youtube
