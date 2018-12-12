import React from 'react'

import ScreenSizeProvider from 'shared/components/screen-size-provider'
import Hero from 'shared/components/hero-section'
import Features from 'shared/components/features-section'
import GettingStarted from 'shared/components/getting-started-section'
import WhatYouCanBuild from 'shared/components/what-you-can-build-section'
import WhatArePeopleBuilding from 'shared/components/what-are-people-building-section'
import Gateway from 'shared/components/gateway-section'
import PublicationsAndTalks from 'shared/components/publications-and-talks-section'
import Community from 'shared/components/community-section'

const Home = () => (
  <div>
    <ScreenSizeProvider>
      <Hero />
      <Features />
      <GettingStarted />
      <Gateway />
      <WhatArePeopleBuilding />
      <WhatYouCanBuild />
      <PublicationsAndTalks />
      <Community />
    </ScreenSizeProvider>
  </div>
)

export default Home
