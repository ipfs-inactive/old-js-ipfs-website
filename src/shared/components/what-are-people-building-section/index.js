import React from 'react';
import { FormattedMessage } from 'react-intl';
import Carousel from 'shared/components/carousel';

import HexSvg from 'shared/media/backgrounds/hexagons.svg';
import projectsArr from 'shared/data/what-are-people-building';
import styles from './index.module.css';

const WhatArePeopleBuilding = () => (
    <div className={ styles.container }>
        <div className={ styles.backgroundSvg }>
            <div className={ styles.hex1 }><HexSvg /></div>
            <div className={ styles.hex2 }><HexSvg /></div>
        </div>
        <div className={ styles.content }>
            <FormattedMessage tagName="h1" id="whatPeopleAreBuildingTitle" />
            <span className={ styles.sectionDescription }>
                <FormattedMessage tagName="p" id="whatPeopleAreBuildingSectionDesc" />
            </span>
            <Carousel itemsList={ projectsArr } />
        </div>
    </div>
);

export default WhatArePeopleBuilding;
