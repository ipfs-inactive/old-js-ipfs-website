import React from 'react';
import { injectIntl } from 'react-intl';
import { PropTypes } from 'prop-types';

import Button from 'shared/components/button';
import styles from './index.module.css';

const CarouselContent = ({ icon, desc, image, intl: { messages } }) => (
    <div className={ styles.container }>
        <div className={ styles.leftContainer }>
            <div className={ styles.topContainer }>
                <div className={ styles.logo }>{ icon }</div>
                <div className={ styles.desc }>{ messages[desc] }</div>
            </div>
            <div className={ styles.bottomContainer }>
                <Button translationId="buttonLearnMore" path="test" />
            </div>
        </div>
        <div className={ styles.rightContainer }><img src={ image } /></div>
    </div>
);

CarouselContent.propTypes = {
    icon: PropTypes.element.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired,
    intl: PropTypes.object.isRequired,
};

export default injectIntl(CarouselContent);
