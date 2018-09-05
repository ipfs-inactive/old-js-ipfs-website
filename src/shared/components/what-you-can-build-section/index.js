import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { injectIntl } from 'react-intl'

import NavPill from 'shared/components/nav-pill'
import appsArr from 'shared/data/what-you-can-build'
import HorizontalScroller from 'shared/components/horizontal-scroller'
import styles from './index.module.css'

class WhatYouCanBuild extends PureComponent {
  state = {
    activePillIndex: 0
  }

  render () {
    const { messages } = this.props.intl
    const { activePillIndex } = this.state
    const activeLink = appsArr[activePillIndex].link
    const navPills = appsArr.map((app, index) => {
      return (
        <NavPill
          key={ `app-${index}` }
          index={ index }
          title={ app.title }
          active={ activePillIndex === index }
          onPillClick={ this.handlePillClick }
        />
      )
    })

    return (
      <div className={ styles.container }>
        <div className={ styles.content }>
          <h1>{ messages.whatYouCanBuild.sectionTitle }</h1>
          <ReactMarkdown className={ styles.sectionDescription } source={ messages.whatYouCanBuild.sectionDesc } />
          <HorizontalScroller itemsArray={ navPills }/>
          <div className={ styles.iframeContainer }>
            <iframe src={ `${activeLink}?view=split` }
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" />
          </div>
        </div>
      </div>
    )
  }

  handlePillClick = (index) => {
    this.setState({
      activePillIndex: index
    })
  }
}

export default injectIntl(WhatYouCanBuild)
