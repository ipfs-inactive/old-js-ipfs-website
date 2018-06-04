import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import FeatureItem from 'shared/components/features-section/feature-item';
import Feat1Svg from '-!svg-react-loader!shared/media/images/feat1.svg';
import Feat2Svg from '-!svg-react-loader!shared/media/images/feat2.svg';
import Feat3Svg from '-!svg-react-loader!shared/media/images/feat3.svg';
import Feat4Svg from '-!svg-react-loader!shared/media/images/feat4.svg';
import Feat5Svg from '-!svg-react-loader!shared/media/images/feat5.svg';

import styles from './index.module.css';

const Features = ({ intl }) => {
    const featsArr = [
        {
            icon: <Feat1Svg />,
            title: intl.messages.featuresFeat1Title,
            description: intl.messages.featuresFeat1Desc,
        },
        {
            icon: <Feat2Svg />,
            title: intl.messages.featuresFeat2Title,
            description: intl.messages.featuresFeat2Desc,
        },
        {
            icon: <Feat3Svg />,
            title: intl.messages.featuresFeat3Title,
            description: intl.messages.featuresFeat3Desc,
        },
        {
            icon: <Feat4Svg />,
            title: intl.messages.featuresFeat4Title,
            description: intl.messages.featuresFeat4Desc,
        },
        {
            icon: <Feat5Svg />,
            title: intl.messages.featuresFeat5Title,
            description: intl.messages.featuresFeat5Desc,
        },
    ];

    const feats = featsArr.map((feat, index) =>
        <FeatureItem key={ index } title={ feat.title } description={ feat.description } icon={ feat.icon } />
    );

    return (
        <div className={ styles.container }>
            <div className={ styles.content } >
                <FormattedMessage tagName="h1" id="featuresTitle" />
                <span className={ styles.sectionDescription }>
                    <FormattedMessage tagName="p" id="featuresTextDescription" />
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
