import React from 'react';
import { FormattedMessage } from 'react-intl';

import HexSvg from 'shared/media/backgrounds/hexagons.svg';
import videosArr from 'shared/data/publications-and-talks';
import VideosList from 'shared/components/publications-and-talks-section/videos-list';
import styles from './index.module.css';

const PublicationsAndTalks = () => (
    <div className={ styles.container }>
        <div className={ styles.backgroundSvg }>
            <div className={ styles.hex1 }><HexSvg /></div>
            <div className={ styles.hex2 }><HexSvg /></div>
        </div>
        <div className={ styles.content } >
            <FormattedMessage tagName="h1" id="publicationsAndTalksTitle" />
            <span className={ styles.sectionDescription }>
                <FormattedMessage tagName="p" id="publicationsAndTalksSectionDesc" />
            </span>
            <VideosList list={ videosArr } />
        </div>
    </div>
);

export default PublicationsAndTalks;
