import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'shared/components/button';
import cubePng from 'shared/media/images/cube.png';
import styles from './index.module.css';

const Hero = () => (
    <div className={ styles.container }>
        <div className={ styles.content }>
            <img src={ cubePng } />
            <FormattedMessage tagName="h1" id="heroWelcomeMessage" />
            <FormattedMessage tagName="p" id="heroTextDescription" />
            <div className={ styles.infoContainer }>
                <FormattedMessage tagName="span" id="heroCurrentVersion" />
                <FormattedMessage tagName="span" id="heroLatestUpdate" />
                <FormattedMessage tagName="span" id="heroDownloadsLastMonth" />
            </div>
            <div className={ styles.buttonContent }>
                <Button text="LEARN MORE" path="test" />
            </div>
        </div>
    </div>
);

export default Hero;
