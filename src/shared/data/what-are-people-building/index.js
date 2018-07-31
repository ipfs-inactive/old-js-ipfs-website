import React from 'react'

import CompanionSvg from 'shared/media/images/what-are-people-building/companion.svg'
import PeerpadSvg from 'shared/media/images/what-are-people-building/peerpad.svg'
import ParatiiSvg from 'shared/media/images/what-are-people-building/paratii.svg'
import FilenationSvg from 'shared/media/images/what-are-people-building/Filenation.svg'

import CompanionPrintScreen from 'shared/media/images/what-are-people-building/companion.jpg'
import FilenationPrintScreen from 'shared/media/images/what-are-people-building/filenation.jpg'
import PeerpadPrintScreen from 'shared/media/images/what-are-people-building/peerpad.jpg'
import DwebArchivePrintScreen from 'shared/media/images/what-are-people-building/dwebarchive.jpg'
import OrbitPrintScreen from 'shared/media/images/what-are-people-building/orbitchat.jpg'
import ParatiiPrintScreen from 'shared/media/images/what-are-people-building/paratii.jpg'

const projects = [
  {
    translationListIndex: 0,
    icon: <ParatiiSvg />,
    image: ParatiiPrintScreen,
    link: 'https://paratii.video'
  },
  {
    translationListIndex: 1,
    icon: <FilenationSvg />,
    image: FilenationPrintScreen,
    link: 'https://filenation.io'
  },
  {
    translationListIndex: 2,
    image: DwebArchivePrintScreen,
    link: 'https://github.com/internetarchive/dweb-archive'
  },
  {
    translationListIndex: 3,
    icon: <PeerpadSvg />,
    image: PeerpadPrintScreen,
    link: 'https://peerpad.net/'
  },
  {
    translationListIndex: 4,
    icon: <CompanionSvg />,
    image: CompanionPrintScreen,
    link: 'https://github.com/ipfs-shipyard/ipfs-companion'
  },
  {
    translationListIndex: 5,
    image: OrbitPrintScreen,
    link: 'https://orbit.chat'
  }
]

export default projects
