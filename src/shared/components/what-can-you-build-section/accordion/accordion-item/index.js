import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import Button from 'shared/components/button'
import Svg from 'shared/components/svg'
import hexagonsBigSvg from 'shared/media/images/hexagons-big.sprite.svg'
import styles from './index.module.css'

class AccordionItem extends Component {
  render () {
    const { isOpen, item: { name, image, title, subtitle, desc, buttonInfo, videoLink }, intl: { messages } } = this.props
    const panelVerticalPadding = this.panelElem && this.panelElem.offsetHeight
    const panelHeight = isOpen ? this.panelElem && (panelVerticalPadding + this.panelElem.scrollHeight) : 0

    return (
      <div>
        <button className={ styles.accordionButton } onClick={ this.handleButtonClick } >
          { messages[name] }
        </button>
        <div className={ styles.panel } ref={ this.handlePanelRef } style={ { maxHeight: panelHeight } }>
          <div className={ styles.backgroundSvgLine1 }>
            <div className={ styles.hex1 }><Svg svg={ hexagonsBigSvg } /></div>
            <div className={ styles.hex2 }><Svg svg={ hexagonsBigSvg } /></div>
          </div>
          <div className={ styles.backgroundSvgLine2 }>
            <div className={ styles.hex3 }><Svg svg={ hexagonsBigSvg } /></div>
          </div>
          <div className={ styles.panelContent }>
            <div className={ styles.panelLeftContent } >
              <div className={ styles.imageAndTextContainer }>
                <div className={ styles.img }>{ image }</div>
                <h2>{ messages[name] }</h2>
              </div>
            </div>
            <div className={ styles.panelRightContent } >
              <h2>{ messages[title] }</h2>
              <div className={ styles.videoWrapper } >
                <ReactPlayer
                  className={ styles.reactPlayer }
                  url={ videoLink }
                  width="100%"
                  height="100%" />
              </div>
              <h6>{ messages[subtitle] }</h6>
              <p>
                { messages[desc] }
              </p>
              <div className={ styles.button }>
                <Button translationId={ buttonInfo.text } path={ buttonInfo.path } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

    handleButtonClick = () => {
      const { index } = this.props

      this.props.onClick(index)
    }

    handlePanelRef = (element) => {
      this.panelElem = element
    }
}

AccordionItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired
}

export default injectIntl(AccordionItem)
