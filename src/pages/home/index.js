import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Hero from 'shared/components/hero-section'
import Features from 'shared/components/features-section'
import GettingStarted from 'shared/components/getting-started-section'
// import WhatCanYouBuild from 'shared/components/what-can-you-build-section'
import WhatArePeopleBuilding from 'shared/components/what-are-people-building-section'
import Gateway from 'shared/components/gateway-section'
import PublicationsAndTalks from 'shared/components/publications-and-talks-section'
import Community from 'shared/components/community-section'
import styles from './index.module.css'

class Home extends Component {
  state = {
    featsSectionRef: undefined
  }

  render () {
    const { featsSectionRef } = this.state
    return (
      <div className={ styles.container }>
        <Hero featsRef={ featsSectionRef } />
        <Features ref={ this.handleFeaturesRef } />
        <GettingStarted />
        <Gateway />
        {/* <WhatCanYouBuild /> */}
        <WhatArePeopleBuilding />
        <PublicationsAndTalks />
        <Community />
      </div>
    )
  }

  handleFeaturesRef = (ref) => {
    this.setState({ featsSectionRef: ReactDOM.findDOMNode(ref) })
  }
}

export default Home
