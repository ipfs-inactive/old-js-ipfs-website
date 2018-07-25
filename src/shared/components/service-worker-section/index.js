import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import classNames from 'classnames'

import ServiceWorkerSvg from 'shared/media/images/service-worker.svg'
import ToggleButton from 'shared/components/toggle-button'
import styles from './index.module.css'

class ServiceWorkerSection extends Component {
  constructor () {
    super()

    this.state = {
      isActive: true
    }
  }

  render () {
    const { isActive } = this.state
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
          <ServiceWorkerSvg />
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
    this.setState({
      isActive: !isActive
    })
  }
}

export default injectIntl(ServiceWorkerSection)
