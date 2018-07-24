import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { FormattedMessage } from 'react-intl'

import Hero from 'shared/components/hero-section'
import Features from 'shared/components/features-section'
import GettingStarted from 'shared/components/getting-started-section'
import ServiceWorkerSection from 'shared/components/service-worker-section'
// import WhatCanYouBuild from 'shared/components/what-can-you-build-section'
import WhatArePeopleBuilding from 'shared/components/what-are-people-building-section'
import PublicationsAndTalks from 'shared/components/publications-and-talks-section'
import Community from 'shared/components/community-section'
import styles from './index.module.css'

import { register, unregister } from 'shared/service-worker/register'

class Home extends Component {
  constructor () {
    super()

    this.state = {
      featsSectionRef: undefined
    }
  }

  componentDidMount () {
    // Force a clean state of the service worker, as user must interact for enabling it
    unregister()
  }

  render () {
    const { featsSectionRef } = this.state
    return (
      <div className={ styles.container }>
        <Hero featsRef={ featsSectionRef } />
        <Features ref={ this.handleFeaturesRef } />
        <GettingStarted />
        <ServiceWorkerSection />
        {/* <WhatCanYouBuild /> */}
        <WhatArePeopleBuilding />
        <PublicationsAndTalks />
        <Community />
        <div className={ styles.serviceWorker }>
          <button onClick={ this.handleServiceWorkerClick }>
            <FormattedMessage id="service-worker" />
          </button>
        </div>
      </div>
    )
  }

  handleFeaturesRef = (ref) => {
    this.setState({ featsSectionRef: ReactDOM.findDOMNode(ref) })
  }

  handleServiceWorkerClick () {
    register()
  }
}

export default Home
