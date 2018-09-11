import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Svg from 'shared/components/svg'
import ReactResizeDetector from 'react-resize-detector'
import classNames from 'classnames'

import arrowSvg from './images/arrow.sprite.svg'
import styles from './index.module.css'

class HorizontalScroller extends PureComponent {
  state = {
    showSliderButtons: false
  }

  componentDidMount () {
    this.currentScrollX = 0
  }

  render () {
    const { renderNavPills, className } = this.props
    const { showSliderButtons } = this.state
    const containerClasses = classNames(styles.container, className, {
      [styles.showButtons]: showSliderButtons
    })

    return (
      <div className={ containerClasses }>
        <div className={ styles.leftButton } onClick={ this.handleLeftButtonClick }>
          <Svg svg={ arrowSvg } />
        </div>
        <div className={ styles.rightButton } onClick={ this.handleRightButtonClick }>
          <Svg svg={ arrowSvg } />
        </div>
        <div className={ styles.scroller } ref={ this.handleScrollerRef }>
          <ReactResizeDetector handleWidth handleHeight onResize={ this.handleOnResizeScroller } />
          <div className={ styles.pillsWrapper } ref={ this.handlePillsWrapperRef }>
            { renderNavPills() }
          </div>
        </div>
      </div>
    )
  }

  handleOnResizeScroller = (width) => {
    const { showSliderButtons } = this.state
    this.pillsWrapperDivWidth = this.pillsWrapperRef.offsetWidth
    console.log('size div: ', this.pillsWrapperDivWidth)
    // +100 is used to take care of 50px margin added to both first and last buttons
    this.scrollValue = (this.pillsWrapperDivWidth + 100) / 4
    // -100 is used to take care of 50px margin added to first and last button when they're visible
    const shouldShow = showSliderButtons ? (this.pillsWrapperDivWidth - 100) > width : this.pillsWrapperDivWidth > width
    this.setState({
      showSliderButtons: shouldShow
    })
  }

  handleScrollerRef = (ref) => this.scrollerRef = ref

  handlePillsWrapperRef = (ref) => this.pillsWrapperRef = ref

  handleLeftButtonClick = () => this.swipeTo('left')

  handleRightButtonClick = () => this.swipeTo('right')

  swipeTo = (direction) => {
    if (this.scrollValue) {
      this.currentScrollX = direction === 'left'
        ? this.decreaseScrollValue()
        : this.increaseScrollValue()

      this.scrollerRef.scrollTo({
        top: 0,
        left: this.currentScrollX,
        behavior: 'smooth'
      })
      console.log(this.currentScrollX)
    }
  }

  decreaseScrollValue = () =>
  this.currentScrollX - this.scrollValue < 0
    ? this.currentScrollX
    : this.currentScrollX - this.scrollValue

  increaseScrollValue = () =>
  this.currentScrollX + this.scrollValue > this.pillsWrapperDivWidth
    ? this.currentScrollX
    : this.currentScrollX + this.scrollValue
}

HorizontalScroller.propTypes = {
  renderNavPills: PropTypes.func,
  className: PropTypes.string,
}

export default HorizontalScroller
