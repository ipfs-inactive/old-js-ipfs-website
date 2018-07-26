import React from 'react'

// import CompanionSvg from 'shared/media/images/what-are-people-building/companion.svg'
import PeerpadSvg from 'shared/media/images/what-are-people-building/peerpad.svg'
import ParatiiSvg from 'shared/media/images/what-are-people-building/paratii.svg'

import CompanionPrintScreen from 'shared/media/images/what-are-people-building/companion.jpg'
import FilenationPrintScreen from 'shared/media/images/what-are-people-building/filenation.jpg'
import PeerpadPrintScreen from 'shared/media/images/what-are-people-building/peerpad.jpg'
import DwebArchivePrintScreen from 'shared/media/images/what-are-people-building/dwebarchive.jpg'
import OrbitPrintScreen from 'shared/media/images/what-are-people-building/orbitchat.jpg'
import ParatiiPrintScreen from 'shared/media/images/what-are-people-building/paratii.jpg'

const projects = [
  {
    translationListIndex: 0,
    // icon: <CompanionSvg />,
    image: CompanionPrintScreen,
    link: 'https://github.com/ipfs-shipyard/ipfs-companion'
  },
  {
    translationListIndex: 1,
    image: FilenationPrintScreen,
    link: 'https://github.com/FileNation/FileNation'
  },
  {
    translationListIndex: 2,
    icon: <PeerpadSvg />,
    image: PeerpadPrintScreen,
    link: 'https://github.com/ipfs-shipyard/peer-pad'
  },
  {
    translationListIndex: 3,
    image: DwebArchivePrintScreen,
    link: 'https://github.com/internetarchive/dweb-archive'
  },
  {
    translationListIndex: 4,
    image: OrbitPrintScreen,
    link: 'https://github.com/orbitdb/orbit'
  },
  {
    translationListIndex: 5,
    icon: <ParatiiSvg />,
    image: ParatiiPrintScreen,
    link: 'https://github.com/Paratii-Video/paratii-portal'
  }
]

export default projects
