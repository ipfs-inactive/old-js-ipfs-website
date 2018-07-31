import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'

import MobileGatewaySvg from 'shared/media/images/gateway-section/mobile-gateway.svg'
import MobileGatewayBeams1 from 'shared/media/images/gateway-section/mobile-gateway-beams-1.svg'
import MobileGatewayBlueBeams from 'shared/media/images/gateway-section/mobile-gateway-blue-beams.svg'

import MobileServiceWorkerBeam1 from 'shared/media/images/gateway-section/mobile-serviceworker-yellowbeam-1.svg'
import MobileServiceWorkerBeam2 from 'shared/media/images/gateway-section/mobile-serviceworker-yellowbeam-2.svg'
import MobileServiceWorkerArrowBeams from 'shared/media/images/gateway-section/mobile-serviceworker-arrow-beams.svg'

import MobileBeamsNodes1 from 'shared/media/images/gateway-section/mobile-beams-nodes-1.svg'
import MobileBeamsNodes2 from 'shared/media/images/gateway-section/mobile-beams-nodes-2.svg'
import MobileBeamsNodes3 from 'shared/media/images/gateway-section/mobile-beams-nodes-3.svg'
import MobileBeamsNodes4 from 'shared/media/images/gateway-section/mobile-beams-nodes-4.svg'

import GatewaySvg from 'shared/media/images/gateway-section/gateway.svg'
import GatewayBlueBeams from 'shared/media/images/gateway-section/gateway-blue-beams.svg'
import GatewayWhiteBeam1 from 'shared/media/images/gateway-section/gateway-whitebeam-1.svg'
import GatewayWhiteBeam2 from 'shared/media/images/gateway-section/gateway-whitebeam-2.svg'

import ServiceWorkerBeam1 from 'shared/media/images/gateway-section/serviceworker-yellowbeam-1.svg'
import ServiceWorkerBeam2 from 'shared/media/images/gateway-section/serviceworker-yellowbeam-2.svg'
import ServiceWorkerBeam3 from 'shared/media/images/gateway-section/serviceworker-yellowbeam-3.svg'
import ServiceWorkerBeam4 from 'shared/media/images/gateway-section/serviceworker-yellowbeam-4.svg'
import ServiceWorkerArrowBeams from 'shared/media/images/gateway-section/service-worker-arrow-beams.svg'

import BeamsNodes1 from 'shared/media/images/gateway-section/beams-nodes-1.svg'
import BeamsNodes2 from 'shared/media/images/gateway-section/beams-nodes-2.svg'
import BeamsNodes3 from 'shared/media/images/gateway-section/beams-nodes-3.svg'
import BeamsNodes4 from 'shared/media/images/gateway-section/beams-nodes-4.svg'
import BeamsNodes5 from 'shared/media/images/gateway-section/beams-nodes-5.svg'
import BeamsNodes6 from 'shared/media/images/gateway-section/beams-nodes-6.svg'
import BeamsNodes7 from 'shared/media/images/gateway-section/beams-nodes-7.svg'
import BeamsNodes8 from 'shared/media/images/gateway-section/beams-nodes-8.svg'
import BeamsNodes9 from 'shared/media/images/gateway-section/beams-nodes-9.svg'
import BeamsNodes10 from 'shared/media/images/gateway-section/beams-nodes-10.svg'
import BeamsNodes11 from 'shared/media/images/gateway-section/beams-nodes-11.svg'
import BeamsNodes12 from 'shared/media/images/gateway-section/beams-nodes-12.svg'

import CloseIcon from 'shared/media/icons/close-icon.svg'

import styles from './index.module.css'

class GatewaySvgAnimation extends Component {
  render () {
    const { isActive, inView, isMessageVisible, intl: { messages } } = this.props
    const containerClasses = classNames(styles.container, {
      [styles.active]: isActive,
      [styles.animationOff]: !inView,
      [styles.messageClosed]: isActive && !isMessageVisible
    })

    return (
      <div className={ containerClasses }>
        { this.renderDesktopGateway() }
        { this.renderMobileGateway() }
        <div className={ styles.message }>
          <div className={ styles.header }>
            <div className={ styles.title }>
              { messages.serviceWorker.activationSuccessTitle }
            </div>
            <div className={ styles.close }>
              <CloseIcon onClick={ this.handleCloseClick }/>
            </div>
          </div>
          <div className={ styles.body }>
            <ReactMarkdown source={ messages.serviceWorker.activationSuccessText } />
          </div>
        </div>
      </div>
    )
  }

  renderDesktopGateway = () => (
    <div className={ styles.desktop }>
      <GatewaySvg />
      <div className={ styles.gatewayBlueBeams }>
        <GatewayBlueBeams />
      </div>
      <div className={ styles.gatewayWhiteBeam1 }>
        <GatewayWhiteBeam1 />
      </div>
      <div className={ styles.gatewayWhiteBeam2 }>
        <GatewayWhiteBeam2 />
      </div>
      <div className={ styles.serviceWorkerBeam1 }>
        <ServiceWorkerBeam1 />
      </div>
      <div className={ styles.serviceWorkerBeam2 }>
        <ServiceWorkerBeam2 />
      </div>
      <div className={ styles.serviceWorkerBeam3 }>
        <ServiceWorkerBeam3 />
      </div>
      <div className={ styles.serviceWorkerBeam4 }>
        <ServiceWorkerBeam4 />
      </div>
      <div className={ styles.serviceWorkerArrowBeams }>
        <ServiceWorkerArrowBeams />
      </div>
      <div className={ styles.beamsNodes1 }>
        <BeamsNodes1 />
      </div>
      <div className={ styles.beamsNodes2 }>
        <BeamsNodes2 />
      </div>
      <div className={ styles.beamsNodes3 }>
        <BeamsNodes3 />
      </div>
      <div className={ styles.beamsNodes4 }>
        <BeamsNodes4 />
      </div>
      <div className={ styles.beamsNodes5 }>
        <BeamsNodes5 />
      </div>
      <div className={ styles.beamsNodes6 }>
        <BeamsNodes6 />
      </div>
      <div className={ styles.beamsNodes7 }>
        <BeamsNodes7 />
      </div>
      <div className={ styles.beamsNodes8 }>
        <BeamsNodes8 />
      </div>
      <div className={ styles.beamsNodes9 }>
        <BeamsNodes9 />
      </div>
      <div className={ styles.beamsNodes10 }>
        <BeamsNodes10 />
      </div>
      <div className={ styles.beamsNodes11 }>
        <BeamsNodes11 />
      </div>
      <div className={ styles.beamsNodes12 }>
        <BeamsNodes12 />
      </div>
    </div>
  )

  renderMobileGateway = () => (
    <div className={ styles.mobile }>
      <MobileGatewaySvg />
      <div className={ styles.gatewayBlueBeams }>
        <MobileGatewayBlueBeams />
      </div>
      <div className={ styles.gatewayWhiteBeam1 }>
        <MobileGatewayBeams1 />
      </div>
      <div className={ styles.serviceWorkerBeam1 }>
        <MobileServiceWorkerBeam1 />
      </div>
      <div className={ styles.serviceWorkerBeam2 }>
        <MobileServiceWorkerBeam2 />
      </div>
      <div className={ styles.serviceWorkerArrowBeams }>
        <MobileServiceWorkerArrowBeams />
      </div>
      <div className={ styles.beamsNodes1 }>
        <MobileBeamsNodes1 />
      </div>
      <div className={ styles.beamsNodes2 }>
        <MobileBeamsNodes2 />
      </div>
      <div className={ styles.beamsNodes3 }>
        <MobileBeamsNodes3 />
      </div>
      <div className={ styles.beamsNodes4 }>
        <MobileBeamsNodes4 />
      </div>
    </div>
  )

  handleCloseClick = () => {
    const { onMessageCloseClick } = this.props

    onMessageCloseClick()
  }
}

GatewaySvgAnimation.propTypes = {
  isActive: PropTypes.bool.isRequired,
  inView: PropTypes.bool,
  isMessageVisible: PropTypes.bool,
  onMessageCloseClick: PropTypes.func
}

export default injectIntl(GatewaySvgAnimation)
