import React from 'react'

import Svg from 'shared/components/svg'
import companionSvg from './images/companion-logo.svg'
import companionImage from './images/companion.jpg'
import dwebArchiveImage from './images/dwebarchive.jpg'
import dwebArchiveSvg from './images/dwebarchive-logo.svg'
import orbitchatImage from './images/orbitchat.jpg'
import orbitchatSvg from './images/orbitchat-logo.svg'
import peerpadSvg from './images/peerpad-logo.svg'
import peerpadImage from './images/peerpad.jpg'

/*
  These 2 props are used to prevent page reflow:
    - iconRatio: (height / width) * 100. We are calculating the icon ratio before it is loaded and set a paddingBottom to its wrapper div
    with this percentage to work as a placeholder while the logo is beeing loaded.
    - iconMaxWidth: When icons are squared their ratio would be almost 100%, that would make them too big. To circumvent that we set
    the container max-width to make the icon "scale down" keeping its ratio.
*/

const projects = [
  {
    translationListIndex: 0,
    icon: <Svg svg={ dwebArchiveSvg } />,
    iconRatio: '97.1%',
    iconMaxWidth: '90px',
    image: dwebArchiveImage,
    link: 'https://dweb.archive.org'
  },
  {
    translationListIndex: 1,
    icon: <Svg svg={ peerpadSvg } />,
    iconRatio: '32.4%',
    image: peerpadImage,
    link: 'https://peerpad.net'
  },
  {
    translationListIndex: 2,
    icon: <Svg svg={ companionSvg } />,
    iconRatio: '45%',
    image: companionImage,
    link: 'https://github.com/ipfs-shipyard/ipfs-companion'
  },
  {
    translationListIndex: 3,
    icon: <Svg svg={ orbitchatSvg } />,
    iconRatio: '36.6%',
    image: orbitchatImage,
    link: 'https://orbit.chat'
  }
]

export default projects
