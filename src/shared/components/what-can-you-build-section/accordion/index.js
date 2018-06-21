import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import itemsArr from 'shared/data/what-can-you-build';
import AccordionItem from 'shared/components/what-can-you-build-section/accordion/accordion-item';
import styles from './index.module.css';

class Accordion extends Component {
    constructor() {
        super();

        this.state = {
            openedItemIndex: -1,
        };
    }

    render() {
        const { className } = this.props;
        const accordionClasses = classNames(styles.accordion, className);
        const { openedItemIndex } = this.state;
        const items = itemsArr.map((item, index) => {
            const isOpen = openedItemIndex === index;

            return (
                <AccordionItem
                    key={ `accordionItem-${index}` }
                    item={ item }
                    index={ index }
                    onClick={ this.handleAccordionItemClick }
                    isOpen={ isOpen } />
            );
        });

        return (
            <div className={ accordionClasses } >
                { items }
            </div>
        );
    }

    handleAccordionItemClick = (accordionItemIndex) => {
        this.setState(({ openedItemIndex }) => ({
            openedItemIndex: accordionItemIndex === openedItemIndex ? -1 : accordionItemIndex,
        }));
    }
}

Accordion.propTypes = {
    className: PropTypes.string,
};

export default Accordion;
