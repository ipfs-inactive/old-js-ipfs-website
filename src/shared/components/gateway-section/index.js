import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import classNames from 'classnames'
import { isCompatible, register, unregister, getRegistration } from 'shared/service-worker/registration'
import Observer from '@researchgate/react-intersection-observer'
import ReactMarkdown from 'react-markdown'

import GatewaySvgAnimation from 'shared/components/gateway-section/gateway-svg-animation'
import ToggleButton from './toggle-button'
import styles from './index.module.css'

class GatewaySection extends Component {
  state = {
    isActive: false,
    inView: false,
    incompatible: false,
    inProgress: false
  }

  componentDidMount () {
    getRegistration()
      .then((registration) => {
        registration && this.setState({ isActive: true })
      })
      .catch((err) => console.error(err))

    this.setState({ icompatible: !(isCompatible()) })
  }

  render () {
    const { isActive, inView, icompatible, inProgress } = this.state
    const { messages } = this.props.intl
    const contentClasses = classNames(styles.content, {
      [styles.active]: isActive
    })

    return (
      <div className={ styles.container }>
        <div className={ contentClasses }>
          <h1>{ messages.serviceWorker.sectionTitle }</h1>
          <span className={ styles.sectionDescription }>
            <p>{ messages.serviceWorker.sectionDesc }</p>
          </span>
          <div className={ styles.message }>
            <h6 className={ styles.title }>{ messages.serviceWorker.activationSuccessTitle }</h6>
            <ReactMarkdown source={ messages.serviceWorker.activationSuccessText } />
          </div>
          <Observer onChange={ this.handleObserverChange } >
            <GatewaySvgAnimation isActive={ isActive } inView={ inView } />
          </Observer>
          <ToggleButton
            isActive={ isActive }
            onClick={ this.handleToggleClick }
            className={ styles.toggle }
            incompatible={ icompatible }
            inProgress={ inProgress } />
          <ToastContainer
            className={ styles.toastContainer }
            transition={ Slide }
            pauseOnHover={ false } />
        </div>
      </div>
    )
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
        .then(() => this.setState({ isActive: false }))
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
