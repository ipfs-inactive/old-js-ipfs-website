import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactResizeDetector from 'react-resize-detector'
import classNames from 'classnames'

import Arrow from './arrow'
import styles from './index.module.css'

class HorizontalScroller extends PureComponent {
  state = {
    showSliderButtons: false,
    isLeftArrowActive: false,
    isRightArrowActive: true
  }

  componentDidMount () {
    this.currentScrollX = 0
  }

  render () {
    const { children, className } = this.props
    const { showSliderButtons, isLeftArrowActive, isRightArrowActive } = this.state
    const containerClasses = classNames(styles.container, className, {
      [styles.showButtons]: showSliderButtons
    })

    return (
      <div className={ containerClasses }>
        <Arrow className={ styles.arrow }
          direction="left"
          handleOnClick={ this.handleLeftButtonClick }
          active={ isLeftArrowActive }/>
        <Arrow className={ styles.arrow }
          direction="right"
          handleOnClick={ this.handleRightButtonClick }
          active={ isRightArrowActive }/>
        <div className={ styles.scroller } ref={ this.handleScrollerRef } onScroll={ this.handleOnScroll }>
          <ReactResizeDetector handleWidth
            handleHeight
            onResize={ this.handleOnResizeScroller } />
          <div className={ styles.pillsWrapper } ref={ this.handlePillsWrapperRef }>
            { children }
          </div>
        </div>
      </div>
    )
  }

  handleOnResizeScroller = (width) => {
    const { showSliderButtons } = this.state
    const pillsWrapperDivWidth = this.pillsWrapperRef.offsetWidth
    /*
      maxScrollValue is the diference between the pills wrapper-div (contains all the pills)
      and the scroller-div (pills visible area)
    */
    this.maxScrollValue = pillsWrapperDivWidth - this.scrollerRef.offsetWidth
    /*
      scrollValue is the number of pixels that scroller-div should scroll when arrows are clicked.
      scrollValue has a min value of 350 and a maxValue depending on maxScrollValue,
      and it will allow users to click 2 times on the arrows to reach the last pills.
     */
    this.scrollValue = Math.ceil(this.maxScrollValue / 2) > 350
      ? Math.ceil(this.maxScrollValue / 2)
      : 350
    // -100 is used to take care of 50px margin added to first and last button when they're visible
    const shouldShow = showSliderButtons ? (pillsWrapperDivWidth - 100) > width : pillsWrapperDivWidth > width
    this.setState({
      showSliderButtons: shouldShow
    })
  }

  handleOnScroll = () => {
    this.currentScrollX = this.scrollerRef.scrollLeft

    this.setState({
      isLeftArrowActive: this.currentScrollX > 0,
      isRightArrowActive: this.currentScrollX < this.maxScrollValue
    })
  }

  handleScrollerRef = (ref) => { this.scrollerRef = ref }

  handlePillsWrapperRef = (ref) => { this.pillsWrapperRef = ref }

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
    }
  }

  decreaseScrollValue = () =>
    this.currentScrollX <= 0 ? this.currentScrollX : this.currentScrollX - this.scrollValue

  increaseScrollValue = () =>
    this.currentScrollX >= this.maxScrollValue
      ? this.currentScrollX
      : this.currentScrollX + this.scrollValue
}

HorizontalScroller.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default HorizontalScroller
