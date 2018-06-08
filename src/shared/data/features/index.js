import React from 'react';

import Feat1Svg from '-!svg-react-loader!shared/media/images/feat1.svg';
import Feat2Svg from '-!svg-react-loader!shared/media/images/feat2.svg';
import Feat3Svg from '-!svg-react-loader!shared/media/images/feat3.svg';
import Feat4Svg from '-!svg-react-loader!shared/media/images/feat4.svg';
import Feat5Svg from '-!svg-react-loader!shared/media/images/feat5.svg';

const feats = [
    {
        icon: <Feat1Svg />,
        title: 'featuresFeat1Title',
        description: 'featuresFeat1Desc',
    },
    {
        icon: <Feat2Svg />,
        title: 'featuresFeat2Title',
        description: 'featuresFeat2Desc',
    },
    {
        icon: <Feat3Svg />,
        title: 'featuresFeat3Title',
        description: 'featuresFeat3Desc',
    },
    {
        icon: <Feat4Svg />,
        title: 'featuresFeat4Title',
        description: 'featuresFeat4Desc',
    },
    {
        icon: <Feat5Svg />,
        title: 'featuresFeat5Title',
        description: 'featuresFeat5Desc',
    },
];

export default feats;
