import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './index.module.css';

const FeatureItem = ({ icon, title, description }) => (
    <div className={ styles.featureItem }>
        <div className={ styles.image }>
            { icon }
        </div>
        <p className={ styles.title }>{ title }</p>
        <p className={ styles.description }>{ description }</p>
    </div>
);

FeatureItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default FeatureItem;
