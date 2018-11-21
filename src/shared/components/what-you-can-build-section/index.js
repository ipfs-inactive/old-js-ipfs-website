import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { injectIntl } from 'react-intl'
import classNames from 'classnames'
import Observer from '@researchgate/react-intersection-observer'
import Link from 'shared/components/link'

import NavPill from 'shared/components/nav-pill'
import appsData from 'shared/data/what-you-can-build'
import HorizontalScroller from 'shared/components/horizontal-scroller'
import styles from './index.module.css'

class WhatYouCanBuild extends PureComponent {
  state = {
    isVisible: false,
    activePillIndex: 0,
    isIframeLoaded: false
  }

  render () {
    const { intl: { messages } } = this.props
    const { isVisible, activePillIndex, isIframeLoaded } = this.state
    const activeLink = appsData.apps[activePillIndex].link

    return (
      <Observer onChange={ this.handleObserverChange }>
        <div className={ styles.container }>
          <div className={ styles.content }>
            <h1>{ messages.whatYouCanBuild.sectionTitle }</h1>
            <ReactMarkdown className={ styles.sectionDescription } source={ messages.whatYouCanBuild.sectionDesc } />
            <HorizontalScroller className={ styles.horizontalScroller }>
              { this.renderNavPills() }
            </HorizontalScroller>
            { isVisible && this.renderIframeContainer(isIframeLoaded, activeLink) }
            <p>
              { messages.whatYouCanBuild.suggestion.text }
              <Link href={ appsData.repoLink } >
                { messages.whatYouCanBuild.suggestion.linkText }
              </Link>
            </p>
          </div>
        </div>
      </Observer>
    )
  }

  renderNavPills = () => appsData.apps.map((app, index) => (
    <NavPill
      key={ `app-${index}` }
      index={ index }
      title={ app.title }
      active={ this.state.activePillIndex === index }
      onPillClick={ this.handlePillClick }
    />
  ))

  renderIframeContainer = (isIframeLoaded, activeLink) => {
    const loadingContainerClasses = classNames(styles.loadingContainer, {
      [styles.hideLoading]: isIframeLoaded
    })

    return (
      <div className={ styles.iframeContainer }>
        <iframe title="codepen-example"
          scrolling="no"
          src={ `${activeLink}?theme-id=dark&default-tab=js,result&embed-version=2` }
          onLoad={ this.handleIframeLoad } />
        <div className={ loadingContainerClasses }>
          <div className={ styles.loadingCircle } />
          <span>Loading, please wait...</span>
        </div>
      </div>
    )
  }

  handleIframeLoad = () => this.setState({ isIframeLoaded: true })

  handlePillClick = (index) =>
    this.setState(({ activePillIndex }) => ({
      activePillIndex: index,
      isIframeLoaded: activePillIndex === index
    }))

  handleObserverChange = ({ isIntersecting }) => {
    // Lazy load iframe content to avoid unnecessary loads on page load
    (!this.state.isVisible && isIntersecting) && this.setState({ isVisible: true })
  }
}

export default injectIntl(WhatYouCanBuild)
