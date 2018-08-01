import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import classNames from 'classnames'
import { isCompatible, register, unregister, getRegistration } from 'shared/service-worker/registration'
import Observer from '@researchgate/react-intersection-observer'

import GatewaySvgAnimation from 'shared/components/gateway-section/gateway-svg-animation'
import ToggleButton from './toggle-button'
import styles from './index.module.css'

const scrollToComponent = typeof window !== 'undefined' && require('react-scroll-to-component')
const defaultScrollOptions = { offset: 0, align: 'bottom', duration: 600 }

class GatewaySection extends Component {
  state = {
    isActive: false,
    inView: false,
    incompatible: false,
    inProgress: false,
    isMessageVisible: true
  }

  componentDidMount () {
    getRegistration()
      .then((registration) => {
        registration && this.setState({ isActive: true })
      })
      .catch((err) => console.error(err))

    this.setState({ incompatible: !(isCompatible()) })
  }

  componentWillUnmount () {
    clearTimeout(this.scrollTimeout)
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.isActive && this.state.isActive) {
      this.scrollTimeout = setTimeout(() => {
        scrollToComponent(this.sectionContainerRef, defaultScrollOptions)
      }, 2300)
    }
  }

  render () {
    const { isActive, inView, incompatible, inProgress, isMessageVisible } = this.state
    const { messages } = this.props.intl
    const contentClasses = classNames(styles.content, {
      [styles.active]: isActive
    })

    return (
      <div className={ styles.container } ref={ this.handleContainerRef }>
        <div className={ contentClasses }>
          <h1>{ messages.serviceWorker.sectionTitle }</h1>
          <span className={ styles.sectionDescription }>
            <p>{ messages.serviceWorker.sectionDesc }</p>
          </span>
          <Observer onChange={ this.handleObserverChange } >
            <GatewaySvgAnimation isActive={ isActive }
              inView={ inView }
              isMessageVisible={ isMessageVisible }
              onMessageCloseClick={ this.handleCloseClick }
            />
          </Observer>
          <ToggleButton
            isActive={ isActive }
            onClick={ this.handleToggleClick }
            className={ styles.toggle }
            incompatible={ incompatible }
            inProgress={ inProgress } />
          <ToastContainer
            className={ styles.toastContainer }
            transition={ Slide }
            pauseOnHover={ false } />
        </div>
      </div>
    )
  }

  handleCloseClick = () => {
    this.setState({ isMessageVisible: false })
  }

  handleContainerRef = (element) => {
    this.sectionContainerRef = element
  }

  handleToggleClick = () => {
    const { messages } = this.props.intl

    // Can't activate service-worker if serving from `/ipfs/xxx` or `/ipns/xxx` because
    // it must be served from the root
    if (/^\/(?:ipfs|ipns)\/[^/]+/.test(window.location.pathname)) {
      return toast.warning(messages.serviceWorker.nonRootScopeWarningMessage)
    }

    const { isActive } = this.state

    this.setState({ inProgress: true })

    if (isActive) {
      unregister()
        .then(() => this.setState({ isActive: false, isMessageVisible: true }))
        .catch(() => toast.error(messages.serviceWorker.deactivationErrorMessage))
        .finally(() => this.setState({ inProgress: false }))
    } else {
      register()
        .then(() => this.setState({ isActive: true }))
        .catch(() => toast.error(messages.serviceWorker.activationErrorMessage))
        .finally(() => this.setState({ inProgress: false }))
    }
  }

  handleObserverChange = ({ isIntersecting }) => this.setState({ inView: isIntersecting })
}

export default injectIntl(GatewaySection)
