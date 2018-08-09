import React from 'react'

import Svg from 'shared/components/svg'
import videoStreamingSvg from 'shared/media/images/video-streaming.sprite.svg'
import realtimeSvg from 'shared/media/images/realtime.sprite.svg'
import blockchainSvg from 'shared/media/images/blockchain.sprite.svg'

const items = [
  {
    name: 'whatCanYouBuildItem1Name',
    image: <Svg svg={ videoStreamingSvg } />,
    title: 'whatCanYouBuildItem1Title',
    subtitle: 'whatCanYouBuildItem1Subtitle',
    desc: 'whatCanYouBuildItem1Desc',
    buttonInfo: {
      text: 'buttonLearnMore',
      path: '/'
    },
    videoLink: 'https://www.youtube.com/watch?v=5Uj6uR3fp-U'
  },
  {
    name: 'whatCanYouBuildItem2Name',
    image: <Svg svg={ realtimeSvg } />,
    title: 'whatCanYouBuildItem2Title',
    subtitle: 'whatCanYouBuildItem2Subtitle',
    desc: 'whatCanYouBuildItem2Desc',
    buttonInfo: {
      text: 'buttonLearnMore',
      path: '/'
    },
    videoLink: 'https://www.youtube.com/watch?v=5Uj6uR3fp-U'
  },
  {
    name: 'whatCanYouBuildItem3Name',
    image: <Svg svg={ blockchainSvg } />,
    title: 'whatCanYouBuildItem3Title',
    subtitle: 'whatCanYouBuildItem3Subtitle',
    desc: 'whatCanYouBuildItem3Desc',
    buttonInfo: {
      text: 'buttonLearnMore',
      path: '/'
    },
    videoLink: 'https://www.youtube.com/watch?v=5Uj6uR3fp-U'
  }
]

export default items
