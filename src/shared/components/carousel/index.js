import React from 'react'
import Slider from 'react-slick'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

import withMobileSizeDetection from 'shared/components/with-mobile-size-detection'
import Arrow from 'shared/components/carousel/arrow'
import ProjectsItem from './projects-item'
import VideosItem from './videos-item'
import './index.css'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <Arrow direction="left"/>,
  nextArrow: <Arrow direction="right"/>
}

const Carousel = ({ itemsList, modifier, size, onVideoClick, activeIndex, translationsList, isMobile }) => {
  let items
  const numberOfSlidesToShow = isMobile ? 1 : size
  const finalSettings = { ...settings, slidesToShow: numberOfSlidesToShow }

  // This logic should be removed from this component. It should receive 'items' as a prop.
  if (modifier === 'projects') {
    items = itemsList.map((item, index) => {
      const translationIndex = item.translationListIndex
      return (
        <ProjectsItem key={ `carousel-item-${index}` }
          icon={ item.icon }
          desc={ translationsList[translationIndex].desc }
          link={ item.link }
          image={ item.image }
          index={ index }
          iconRatio={ item.iconRatio }
          iconMaxWidth={ item.iconMaxWidth } />
      )
    })
  } else if (modifier === 'videos') {
    items = itemsList.map((item, index) => {
      return (
        index !== activeIndex &&
            <VideosItem key={ `carousel-videos-item-${index}` }
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
    <Slider { ...finalSettings }
      className={ slideClassName }
      lazyLoad='ondemand' >
      { items }
    </Slider>
  )
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

export default withMobileSizeDetection(Carousel)
