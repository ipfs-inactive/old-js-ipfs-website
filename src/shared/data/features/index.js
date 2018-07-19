import React from 'react'

import BrowserFeatSvg from 'shared/media/images/browser.svg'
import IpfsFeatSvg from 'shared/media/images/ipfs.svg'
import PeersFeatSvg from 'shared/media/images/peers.svg'
import WebFeatSvg from 'shared/media/images/web.svg'
import IpldFeatSvg from 'shared/media/images/ipld.svg'
import Libp2pFeatSvg from 'shared/media/images/libp2p.svg'
import DaemonFeatSvg from 'shared/media/images/window.svg'

const feats = [
  {
    icon: <BrowserFeatSvg />,
    translationListIndex: 0
  },
  {
    icon: <IpfsFeatSvg />,
    translationListIndex: 1
  },
  {
    icon: <PeersFeatSvg />,
    translationListIndex: 2
  },
  {
    icon: <WebFeatSvg />,
    translationListIndex: 3
  },
  {
    icon: <IpldFeatSvg />,
    translationListIndex: 4
  },
  {
    icon: <Libp2pFeatSvg />,
    translationListIndex: 5
  },
  {
    icon: <DaemonFeatSvg />,
    translationListIndex: 6
  },
  {
    icon: <DaemonFeatSvg />,
    translationListIndex: 7
  }
]

export default feats
