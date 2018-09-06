import React, { Component } from 'react'
import ScreenSizeContext from 'shared/components/screen-size-context'

class ScreenSizeProvider extends Component {
  state = {
    isMobile: undefined,
    width: undefined,
    height: undefined
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)

    this.setState({
      isMobile: window.innerWidth <= 768,
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  render () {
    return (
      <ScreenSizeContext.Provider value={ { state: this.state } }>
        { this.props.children }
      </ScreenSizeContext.Provider>
    )
  }

  handleResize = () =>
    this.setState({
      isMobile: window.innerWidth <= 768,
      width: window.innerWidth,
      height: window.innerHeight
    })
}

export default ScreenSizeProvider
