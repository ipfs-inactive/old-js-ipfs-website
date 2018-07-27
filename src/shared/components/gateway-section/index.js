import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import classNames from 'classnames'
import { isCompatible, register, unregister, getRegistration } from 'shared/service-worker/registration'
import Observer from '@researchgate/react-intersection-observer'
import ReactMarkdown from 'react-markdown'

import GatewaySvgAnimation from 'shared/components/gateway-section/gateway-svg-animation'
import ToggleButton from 'shared/components/toggle-button'
import styles from './index.module.css'

class GatewaySection extends Component {
  constructor () {
    super()

    this.state = {
      isActive: false,
      inView: false,
      incompatible: false
    }
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
    const { isActive, inView, icompatible } = this.state
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
            incompatible={ icompatible }/>
        </div>
      </div>
    )
  }

  handleToggleClick = () => {
    const { isActive } = this.state

    if (isActive) {
      unregister()
        .then(() => {
          this.setState({ isActive: false })
        })
        .catch(() => console.log('failed to unregister'))
    } else {
      register()
        .then(() => {
          this.setState({ isActive: true })
        })
        .catch(() => console.log('failed to register'))
    }
  }

  handleObserverView = ({ isIntersecting }) => this.setState({ inView: isIntersecting })
}

export default injectIntl(GatewaySection)
