import React, { Component } from 'react'
import { withLive } from 'react-live'

class LivePreview extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.live.element !== this.props.live.element
  }

  render () {
    const Element = this.props.live.element

    return (
      <div >
        { Element && <Element/> }
      </div>
    )
  }
}

export default withLive(LivePreview)
