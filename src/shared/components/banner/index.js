import React from 'react';
import { FormattedMessage } from 'react-intl';

import closeSvg from 'shared/media/icons/close-button.svg';
import alphaSvg from 'shared/media/icons/alpha-sign.svg';
import styles from './index.module.css';

const Banner = () => (
    <div className={ styles.container }>
        <div className={ styles.iconContainer }>
            <img src={ alphaSvg } />
        </div>
        <div className={ styles.text }>
            <p>
                <b><FormattedMessage id="bannerHighlightMessage" />.</b> <FormattedMessage id="bannerMessage" />
            </p>
        </div>
        <div className={ styles.closeButtonContainer }>
            <img src={ closeSvg } />
        </div>
    </div>
);

export default Banner;
