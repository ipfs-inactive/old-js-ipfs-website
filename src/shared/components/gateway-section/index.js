import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import classNames from 'classnames'
import { register, getRegistration } from 'shared/service-worker/register'
import Observer from 'react-intersection-observer'
import ReactMarkdown from 'react-markdown'

import GatewaySvgAnimation from 'shared/components/gateway-section/gateway-svg-animation'
import ToggleButton from 'shared/components/toggle-button'
import styles from './index.module.css'

class GatewaySection extends Component {
  constructor () {
    super()

    this.state = {
      isActive: false,
      inView: false
    }
  }

  componentDidMount () {
    getRegistration()
      .then((registration) => {
        registration && this.setState({ isActive: true })
      })
  }

  render () {
    const { isActive, inView } = this.state
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
            <h6 className={ styles.title }>{ messages.serviceWorker.message.title }</h6>
            <ReactMarkdown source={ messages.serviceWorker.message.text } />
          </div>
          <Observer onChange={ this.handleObserverView } >
            <GatewaySvgAnimation isActive={ isActive } inView={ inView } />
          </Observer>
          <ToggleButton isActive={ isActive }
            onClick={ this.handleToggleClick }
            className={ styles.toggle }
            title={ messages.serviceWorker.toggleButtonText }/>
        </div>
      </div>
    )
  }

  handleToggleClick = () => {
    const { isActive } = this.state

    if (isActive) {
      getRegistration()
        .then((registration) => {
          if (registration) {
            console.log('reg', registration)
            return registration.unregister()
          }
        })
        .then(() => {
          this.setState({ isActive: false })
        })
    } else {
      register()
        .then(() => {
          this.setState({ isActive: true })
        })
        .catch(() => console.log('failed to register'))
    }
  }

  handleObserverView = (inView) => this.setState({ inView })
}

export default injectIntl(GatewaySection)
