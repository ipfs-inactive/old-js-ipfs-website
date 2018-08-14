import React from 'react'

import Svg from 'shared/components/svg'
import companionSvg from './images/companion-logo.svg'
import companionImage from './images/companion.jpg'
import dwebArchiveImage from './images/dwebarchive.jpg'
import dwebArchiveSvg from './images/dwebarchive-logo.svg'
import filenationImage from './images/filenation.jpg'
import filenationSvg from './images/filenation-logo.svg'
import orbitchatImage from './images/orbitchat.jpg'
import orbitchatSvg from './images/orbitchat-logo.svg'
import paratiiSvg from './images/paratii-logo.svg'
import paratiiImage from './images/paratii.jpg'
import peerpadSvg from './images/peerpad-logo.svg'
import peerpadImage from './images/peerpad.jpg'

const projects = [
  {
    translationListIndex: 0,
    icon: <Svg svg={ paratiiSvg } />,
    image: paratiiImage,
    link: 'https://paratii.video'
  },
  {
    translationListIndex: 1,
    icon: <Svg svg={ filenationSvg } />,
    image: filenationImage,
    link: 'https://filenation.io'
  },
  {
    translationListIndex: 2,
    icon: <Svg svg={ dwebArchiveSvg } style={ { maxWidth: 90 } }/>,
    image: dwebArchiveImage,
    link: 'https://dweb.archive.org'
  },
  {
    translationListIndex: 3,
    icon: <Svg svg={ peerpadSvg } />,
    image: peerpadImage,
    link: 'https://peerpad.net'
  },
  {
    translationListIndex: 4,
    icon: <Svg svg={ companionSvg } />,
    image: companionImage,
    link: 'https://github.com/ipfs-shipyard/ipfs-companion'
  },
  {
    translationListIndex: 5,
    icon: <Svg svg={ orbitchatSvg } />,
    image: orbitchatImage,
    link: 'https://orbit.chat'
  }
]

export default projects
