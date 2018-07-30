import React, { Component } from 'react'
import Slider from 'react-slick'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

import CarouselProjectsItem from 'shared/components/carousel/carousel-projects-item'
import CarouselVideosItem from 'shared/components/carousel/carousel-videos-item'
import './index.css'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

class Carousel extends Component {
  state = {
    isMobile: undefined
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateWindowDimensions)

    this.timeout = setTimeout(() => {
      this.setState({
        isMobile: window.innerWidth <= 768
      })
    }, 15)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  render () {
    let items
    const { itemsList, modifier, size, onVideoClick, activeIndex, translationsList } = this.props
    const { isMobile } = this.state

    let numberOfSlidesToShow = size
    if (isMobile) {
      numberOfSlidesToShow = 1
    }

    if (modifier === 'projects') {
      items = itemsList.map((item, index) => {
        const translationIndex = item.translationListIndex
        return (
          <CarouselProjectsItem key={ `carousel-item-${index}` }
            icon={ item.icon }
            desc={ translationsList[translationIndex].desc }
            link={ item.link }
            image={ item.image } />
        )
      })
    } else if (modifier === 'videos') {
      items = itemsList.map((item, index) => {
        return (
          index !== activeIndex &&
            <CarouselVideosItem key={ `carousel-videos-item-${index}` }
              link={ item.link }
              title={ item.title }
              index={ index }
              onClick={ onVideoClick }
            />
        )
      })
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
  activeIndex: PropTypes.number,
  translationsList: PropTypes.array
}

export default Carousel
