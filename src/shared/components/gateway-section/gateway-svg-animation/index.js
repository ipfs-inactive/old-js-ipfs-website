import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'

import Svg from 'shared/components/svg'
import mobileGatewaySvg from '../images/animation/mobile-gateway.inline.svg'
import mobileGatewayBeams1 from '../images/animation/mobile-gateway-beams-1.inline.svg'
import mobileGatewayBlueBeams from '../images/animation/mobile-gateway-blue-beams.inline.svg'

import mobileServiceWorkerBeam1 from '../images/animation/mobile-serviceworker-yellowbeam-1.inline.svg'
import mobileServiceWorkerBeam2 from '../images/animation/mobile-serviceworker-yellowbeam-2.inline.svg'
import mobileServiceWorkerArrowBeams from '../images/animation/mobile-serviceworker-arrow-beams.inline.svg'

import mobileBeamsNodes1 from '../images/animation/mobile-beams-nodes-1.inline.svg'
import mobileBeamsNodes2 from '../images/animation/mobile-beams-nodes-2.inline.svg'
import mobileBeamsNodes3 from '../images/animation/mobile-beams-nodes-3.inline.svg'
import mobileBeamsNodes4 from '../images/animation/mobile-beams-nodes-4.inline.svg'

import gatewaySvg from '../images/animation/gateway.inline.svg'
import gatewayBlueBeams from '../images/animation/gateway-blue-beams.inline.svg'
import gatewayWhiteBeam1 from '../images/animation/gateway-whitebeam-1.inline.svg'
import gatewayWhiteBeam2 from '../images/animation/gateway-whitebeam-2.inline.svg'

import serviceWorkerBeam1 from '../images/animation/serviceworker-yellowbeam-1.inline.svg'
import serviceWorkerBeam2 from '../images/animation/serviceworker-yellowbeam-2.inline.svg'
import serviceWorkerBeam3 from '../images/animation/serviceworker-yellowbeam-3.inline.svg'
import serviceWorkerBeam4 from '../images/animation/serviceworker-yellowbeam-4.inline.svg'
import serviceWorkerArrowBeams from '../images/animation/service-worker-arrow-beams.inline.svg'

import beamsNodes1 from '../images/animation/beams-nodes-1.inline.svg'
import beamsNodes2 from '../images/animation/beams-nodes-2.inline.svg'
import beamsNodes3 from '../images/animation/beams-nodes-3.inline.svg'
import beamsNodes4 from '../images/animation/beams-nodes-4.inline.svg'
import beamsNodes5 from '../images/animation/beams-nodes-5.inline.svg'
import beamsNodes6 from '../images/animation/beams-nodes-6.inline.svg'
import beamsNodes7 from '../images/animation/beams-nodes-7.inline.svg'
import beamsNodes8 from '../images/animation/beams-nodes-8.inline.svg'
import beamsNodes9 from '../images/animation/beams-nodes-9.inline.svg'
import beamsNodes10 from '../images/animation/beams-nodes-10.inline.svg'
import beamsNodes11 from '../images/animation/beams-nodes-11.inline.svg'
import beamsNodes12 from '../images/animation/beams-nodes-12.inline.svg'

import closeIconSvg from '../images/close-icon.sprite.svg'

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
              <Svg svg={ closeIconSvg } onClick={ this.handleCloseClick }/>
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
      <Svg svg={ gatewaySvg } />
      <div className={ styles.gatewayBlueBeams }>
        <Svg svg={ gatewayBlueBeams } />
      </div>
      <div className={ styles.gatewayWhiteBeam1 }>
        <Svg svg={ gatewayWhiteBeam1 } />
      </div>
      <div className={ styles.gatewayWhiteBeam2 }>
        <Svg svg={ gatewayWhiteBeam2 } />
      </div>
      <div className={ styles.serviceWorkerBeam1 }>
        <Svg svg={ serviceWorkerBeam1 } />
      </div>
      <div className={ styles.serviceWorkerBeam2 }>
        <Svg svg={ serviceWorkerBeam2 } />
      </div>
      <div className={ styles.serviceWorkerBeam3 }>
        <Svg svg={ serviceWorkerBeam3 } />
      </div>
      <div className={ styles.serviceWorkerBeam4 }>
        <Svg svg={ serviceWorkerBeam4 } />
      </div>
      <div className={ styles.serviceWorkerArrowBeams }>
        <Svg svg={ serviceWorkerArrowBeams } />
      </div>
      <div className={ styles.beamsNodes1 }>
        <Svg svg={ beamsNodes1 } />
      </div>
      <div className={ styles.beamsNodes2 }>
        <Svg svg={ beamsNodes2 } />
      </div>
      <div className={ styles.beamsNodes3 }>
        <Svg svg={ beamsNodes3 } />
      </div>
      <div className={ styles.beamsNodes4 }>
        <Svg svg={ beamsNodes4 } />
      </div>
      <div className={ styles.beamsNodes5 }>
        <Svg svg={ beamsNodes5 } />
      </div>
      <div className={ styles.beamsNodes6 }>
        <Svg svg={ beamsNodes6 } />
      </div>
      <div className={ styles.beamsNodes7 }>
        <Svg svg={ beamsNodes7 } />
      </div>
      <div className={ styles.beamsNodes8 }>
        <Svg svg={ beamsNodes8 } />
      </div>
      <div className={ styles.beamsNodes9 }>
        <Svg svg={ beamsNodes9 } />
      </div>
      <div className={ styles.beamsNodes10 }>
        <Svg svg={ beamsNodes10 } />
      </div>
      <div className={ styles.beamsNodes11 }>
        <Svg svg={ beamsNodes11 } />
      </div>
      <div className={ styles.beamsNodes12 }>
        <Svg svg={ beamsNodes12 } />
      </div>
    </div>
  )

  renderMobileGateway = () => (
    <div className={ styles.mobile }>
      <Svg svg={ mobileGatewaySvg } />
      <div className={ styles.gatewayBlueBeams }>
        <Svg svg={ mobileGatewayBlueBeams } />
      </div>
      <div className={ styles.gatewayWhiteBeam1 }>
        <Svg svg={ mobileGatewayBeams1 } />
      </div>
      <div className={ styles.serviceWorkerBeam1 }>
        <Svg svg={ mobileServiceWorkerBeam1 } />
      </div>
      <div className={ styles.serviceWorkerBeam2 }>
        <Svg svg={ mobileServiceWorkerBeam2 } />
      </div>
      <div className={ styles.serviceWorkerArrowBeams }>
        <Svg svg={ mobileServiceWorkerArrowBeams } />
      </div>
      <div className={ styles.beamsNodes1 }>
        <Svg svg={ mobileBeamsNodes1 } />
      </div>
      <div className={ styles.beamsNodes2 }>
        <Svg svg={ mobileBeamsNodes2 } />
      </div>
      <div className={ styles.beamsNodes3 }>
        <Svg svg={ mobileBeamsNodes3 } />
      </div>
      <div className={ styles.beamsNodes4 }>
        <Svg svg={ mobileBeamsNodes4 } />
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
