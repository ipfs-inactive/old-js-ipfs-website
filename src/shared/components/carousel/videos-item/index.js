import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Youtube from 'shared/components/youtube'

import styles from './index.module.css'

class VideosItem extends Component {
  render () {
    const { link, title } = this.props

    return (
      <div className={ styles.videoItemContainer } onClick={ this.handleRemainingVideoClick }>
        <Youtube link={ link } blockPlay />
        <p className={ styles.videoTitle }>{ title }</p>
      </div>
    )
  }

  handleRemainingVideoClick = () => {
    const { index, onClick } = this.props

    return onClick(index)
  }
}

VideosItem.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default VideosItem
