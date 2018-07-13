import React, { Component } from 'react'
import Slider from 'react-slick'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

import CarouselProjectsItem from 'shared/components/carousel/carousel-projects-item'
import CarouselVideosItem from 'shared/components/carousel/carousel-videos-item'
import './index.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

class Carousel extends Component {
  constructor () {
    super()

    this.state = {
      isMobile: undefined
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateWindowDimensions)
    this.setState({
      isMobile: window.innerWidth <= 768
    })
  }

  render () {
    let items
    const { itemsList, modifier, size, onVideoClick, activeIndex } = this.props
    const { isMobile } = this.state

    let numberOfSlidesToShow = size
    if (isMobile) {
      numberOfSlidesToShow = 1
    }

    if (modifier === 'projects') {
      items = itemsList.map((item, index) => (
        <CarouselProjectsItem key={ `carousel-item-${index}` }
          icon={ item.icon }
          desc={ item.description }
          image={ item.image } />
      ))
    } else if (modifier === 'videos') {
      items = itemsList.map((item, index) => (
        index !== activeIndex &&
          <CarouselVideosItem key={ `carousel-videos-item-${index}` }
            link={ item.link }
            title={ item.title }
            index={ index }
            onClick={ onVideoClick }
          />
      ))
    }

    const shouldRemovePadding = modifier === 'videos'
    const slideClassName = classNames({ noPadding: shouldRemovePadding })

    return (
      <Slider { ...{ ...settings, slidesToShow: numberOfSlidesToShow } } className={ slideClassName } >
        { items }
      </Slider>
    )
  }

  checkWindow = () => typeof window !== 'undefined'

  updateWindowDimensions = () => {
    const { isMobile } = this.state
    if ((window.innerWidth <= 768 && !isMobile) || (window.innerWidth > 768 && isMobile)) {
      this.setState(({ isMobile }) => ({ isMobile: !isMobile }))
    }
  }
}

Carousel.defaultProps = {
  modifier: 'projects',
  size: 1
}

Carousel.propTypes = {
  itemsList: PropTypes.array.isRequired,
  modifier: PropTypes.oneOf(['videos', 'projects']),
  size: PropTypes.number,
  activeIndex: PropTypes.number
}

export default Carousel
