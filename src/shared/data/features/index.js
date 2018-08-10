import React from 'react'

import Svg from 'shared/components/svg'
import browserFeatSvg from './images/browser.sprite.svg'
import ipfsFeatSvg from './images/ipfs.sprite.svg'
import peersFeatSvg from './images/peers.sprite.svg'
import webFeatSvg from './images/web.sprite.svg'
import ipldFeatSvg from './images/ipld.sprite.svg'
import libp2pFeatSvg from './images/libp2p.sprite.svg'
import daemonFeatSvg from './images/window.sprite.svg'
import signatureFeatSvg from './images/signature.sprite.svg'

const feats = [
  {
    image: <Svg svg={ browserFeatSvg } />,
    translationListIndex: 0
  },
  {
    image: <Svg svg={ ipfsFeatSvg } />,
    translationListIndex: 1
  },
  {
    image: <Svg svg={ peersFeatSvg } />,
    translationListIndex: 2
  },
  {
    image: <Svg svg={ webFeatSvg } />,
    translationListIndex: 3
  },
  {
    image: <Svg svg={ ipldFeatSvg } />,
    translationListIndex: 4
  },
  {
    image: <Svg svg={ libp2pFeatSvg } />,
    translationListIndex: 5
  },
  {
    image: <Svg svg={ daemonFeatSvg } />,
    translationListIndex: 6
  },
  {
    image: <Svg svg={ signatureFeatSvg } />,
    translationListIndex: 7
  }
]

export default feats
