import React from 'react';

import Item1Svg from 'shared/media/images/videostreaming.svg';
import Item2Svg from 'shared/media/images/realtime.svg';
import Item3Svg from 'shared/media/images/blockchain.svg';

const items = [
    {
        name: 'whatCanYouBuildItem1Name',
        image: <Item1Svg />,
        title: 'whatCanYouBuildItem1Title',
        subtitle: 'whatCanYouBuildItem1Subtitle',
        desc: 'whatCanYouBuildItem1Desc',
        buttonInfo: {
            text: 'buttonLearnMore',
            path: '/',
        },
        videoLink: 'https://www.youtube.com/watch?v=5Uj6uR3fp-U',
    },
    {
        name: 'whatCanYouBuildItem2Name',
        image: <Item2Svg />,
        title: 'whatCanYouBuildItem2Title',
        subtitle: 'whatCanYouBuildItem2Subtitle',
        desc: 'whatCanYouBuildItem2Desc',
        buttonInfo: {
            text: 'buttonLearnMore',
            path: '/',
        },
        videoLink: 'https://www.youtube.com/watch?v=5Uj6uR3fp-U',
    },
    {
        name: 'whatCanYouBuildItem3Name',
        image: <Item3Svg />,
        title: 'whatCanYouBuildItem3Title',
        subtitle: 'whatCanYouBuildItem3Subtitle',
        desc: 'whatCanYouBuildItem3Desc',
        buttonInfo: {
            text: 'buttonLearnMore',
            path: '/',
        },
        videoLink: 'https://www.youtube.com/watch?v=5Uj6uR3fp-U',
    },
];

export default items;
