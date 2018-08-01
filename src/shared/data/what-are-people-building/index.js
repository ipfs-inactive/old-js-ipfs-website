import React from 'react'

import ParatiiSvg from 'shared/media/images/what-are-people-building/paratii.svg'
import FileNationSvg from 'shared/media/images/what-are-people-building/filenation.svg'
import DwebArchiveSvg from 'shared/media/images/what-are-people-building/dwebarchive.svg'
import PeerpadSvg from 'shared/media/images/what-are-people-building/peerpad.svg'
import CompanionSvg from 'shared/media/images/what-are-people-building/companion.svg'
import OrbitSvg from 'shared/media/images/what-are-people-building/orbitchat.svg'

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
    icon: <FileNationSvg />,
    image: FilenationPrintScreen,
    link: 'https://filenation.io'
  },
  {
    translationListIndex: 2,
    icon: <DwebArchiveSvg />,
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
    icon: <OrbitSvg />,
    image: OrbitPrintScreen,
    link: 'https://orbit.chat'
  }
]

export default projects
