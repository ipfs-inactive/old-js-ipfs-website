import React from 'react';
import Slider from 'react-slick';
import { PropTypes } from 'prop-types';

import CarouselContent from 'shared/components/carousel/carousel-content';
import './index.css';

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Carousel = ({ itemsList }) => {
    const item = itemsList.map((item, index) => (
        <CarouselContent key={ `carousel-item-${index}` }
            icon={ item.icon }
            desc={ item.description }
            image={ item.image } />
    ));

    return (
        <Slider { ...settings }>
            { item }
        </Slider>
    );
};

Carousel.propTypes = {
    itemsList: PropTypes.array.isRequired,
};

export default Carousel;
