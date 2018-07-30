import React from 'react'

import Hero from 'shared/components/hero-section'
import Features from 'shared/components/features-section'
import GettingStarted from 'shared/components/getting-started-section'
// import WhatCanYouBuild from 'shared/components/what-can-you-build-section'
import WhatArePeopleBuilding from 'shared/components/what-are-people-building-section'
import Gateway from 'shared/components/gateway-section'
import PublicationsAndTalks from 'shared/components/publications-and-talks-section'
import Community from 'shared/components/community-section'
import styles from './index.module.css'

const Home = () => (
  <div className={ styles.container }>
    <Hero />
    <Features />
    <GettingStarted />
    <Gateway />
    { /* <WhatCanYouBuild /> */ }
    <WhatArePeopleBuilding />
    <PublicationsAndTalks />
    <Community />
  </div>
)

export default Home
