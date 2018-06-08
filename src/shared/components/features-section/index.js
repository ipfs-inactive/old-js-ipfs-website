import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import FeatureItem from 'shared/components/features-section/feature-item';

import featsArr from 'shared/data/features';
import styles from './index.module.css';

const Features = ({ intl: { messages } }) => {
    const feats = featsArr.map((feat, index) =>
        (<FeatureItem key={ `feat-${index}` }
            title={ messages[feat.title] }
            description={ messages[feat.description] }
            icon={ feat.icon } />)
    );

    return (
        <div className={ styles.container }>
            <div className={ styles.content } >
                <FormattedMessage tagName="h1" id="featuresTitle" />
                <span className={ styles.sectionDescription }>
                    <FormattedMessage tagName="p" id="featuresSectionDesc" />
                </span>
                <div className={ styles.featuresContainer }>
                    { feats }
                </div>
            </div>
        </div>
    );
};

Features.propTypes = {
    intl: PropTypes.object.isRequired,
};

export default injectIntl(Features);
