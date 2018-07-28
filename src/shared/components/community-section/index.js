import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Observer from '@researchgate/react-intersection-observer'

import HexSvg from 'shared/media/backgrounds/hexagons.svg'
import data from 'shared/data/community'
import Button from 'shared/components/button'
import styles from './index.module.css'

class Community extends Component {
  state = {
    showContributors: false
  }

  render () {
    const { intl: { messages } } = this.props
    const { showContributors } = this.state

    return (
      <Observer onChange={ this.handleObserverChange }>
        <div className={ styles.container }>
          <div className={ styles.backgroundSvg }>
            <div className={ styles.hex1 }><HexSvg /></div>
            <div className={ styles.hex2 }><HexSvg /></div>
          </div>
          <div className={ styles.content }>
            <h1>{ messages.community.sectionTitle }</h1>
            <ReactMarkdown className={ styles.sectionDescription } source={ messages.community.sectionDesc } />
            <div className={ styles.socialLinksContainer }>
              <p>{ messages.community.socialNetworksText }</p>
              <div className={ styles.socialLinks }>
                <Button translationId="buttonIrcFreenode" path="/test" />
                <Button translationId="buttonGithub" path="/test" modifier="github" />
                <Button translationId="buttonTwitter" path="/test" modifier="twitter" />
              </div>
            </div>
          </div>
          { showContributors && <iframe frameBorder="0" src={ data.contributorsLink } /> }
        </div>
      </Observer>
    )
  }

  handleObserverChange = ({ isIntersecting }) => {
    // Lazy render the contributors pictures to avoid downloading a lot of images at page load
    if (!this.state.showContributors && isIntersecting) {
      this.setState({ showContributors: true })
    }
  }
}

Community.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(Community)
