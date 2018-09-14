import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { injectIntl } from 'react-intl'
import classNames from 'classnames'

import withMobileSizeDetection from 'shared/components/with-mobile-size-detection'
import NavPill from 'shared/components/nav-pill'
import appsArr from 'shared/data/what-you-can-build'
import HorizontalScroller from 'shared/components/horizontal-scroller'
import styles from './index.module.css'

class WhatYouCanBuild extends PureComponent {
  state = {
    activePillIndex: 0,
    isIframeLoaded: false
  }

  render () {
    const { isMobile, intl: { messages } } = this.props
    const { activePillIndex, isIframeLoaded } = this.state
    const activeLink = appsArr[activePillIndex].link
    const editorView = isMobile ? 'editor' : 'split'

    return (
      <div className={ styles.container }>
        <div className={ styles.content }>
          <h1>{ messages.whatYouCanBuild.sectionTitle }</h1>
          <ReactMarkdown className={ styles.sectionDescription } source={ messages.whatYouCanBuild.sectionDesc } />
          <HorizontalScroller className={ styles.horizontalScroller }>
            { this.renderNavPills() }
          </HorizontalScroller>
          { this.renderIframeContainer(isIframeLoaded, activeLink, editorView) }
        </div>
      </div>
    )
  }

  renderNavPills = () => appsArr.map((app, index) => (
    <NavPill
      key={ `app-${index}` }
      index={ index }
      title={ app.title }
      active={ this.state.activePillIndex === index }
      onPillClick={ this.handlePillClick }
    />
  ))

  renderIframeContainer = (isIframeLoaded, activeLink, editorView) => {
    const loadingContainerClasses = classNames(styles.loadingContainer, {
      [styles.hideLoading]: isIframeLoaded
    })

    return (
      <div className={ styles.iframeContainer }>
        <iframe src={ `${activeLink}?view=${editorView}` }
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
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
}

export default withMobileSizeDetection(injectIntl(WhatYouCanBuild))
