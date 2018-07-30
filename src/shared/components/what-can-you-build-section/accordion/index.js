import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import itemsArr from 'shared/data/what-can-you-build'
import AccordionItem from 'shared/components/what-can-you-build-section/accordion/accordion-item'
import styles from './index.module.css'

const scrollToComponent = typeof window !== 'undefined' && require('react-scroll-to-component')
const defaultScrollOptions = { offset: -150, align: 'top', duration: 600 }

class Accordion extends Component {
  state = {
    openedItemIndex: -1
  };

  render () {
    const { className } = this.props
    const accordionClasses = classNames(styles.accordion, className)
    const { openedItemIndex } = this.state
    const items = itemsArr.map((item, index) => {
      const isOpen = openedItemIndex === index

      return (
        <AccordionItem
          key={ `accordionItem-${index}` }
          item={ item }
          index={ index }
          onClick={ this.handleAccordionItemClick }
          isOpen={ isOpen } />
      )
    })

    return (
      <div className={ accordionClasses } ref={ this.handleAccordionItemRef }>
        { items }
      </div>
    )
  }

    handleAccordionItemClick = (accordionItemIndex) => {
      this.setState(({ openedItemIndex }) => ({
        openedItemIndex: accordionItemIndex === openedItemIndex ? -1 : accordionItemIndex
      }))

      scrollToComponent(this.accordionItemRef, defaultScrollOptions)
    }

    handleAccordionItemRef = (element) => {
      this.accordionItemRef = element
    }
}

Accordion.propTypes = {
  className: PropTypes.string
}

export default Accordion
