import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import localesConfig from '../../../../intl/config.js';

import Link from 'shared/components/link';
import styles from './index.module.css';

class LocalesDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false,
        };

        this.availableLocales = localesConfig.availableLocales;
        this.currentLocale = props.intl.locale;

        this.handleToggleDropdown = this.handleToggleDropdown.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleOutsideClick);
    }

    render() {
        const dropdownClasses = classNames(styles.dropdown, {
            [styles.desktopMargin]: !!this.props.desktopMargin,
        });
        const dropButtonClasses = classNames(styles.dropButton, {
            [styles.openedDropdown]: this.state.isOpened,
        });
        const arrowClasses = classNames(styles.arrowIcon, styles.arrowBottom, {
            [styles.arrowBottom]: !this.state.isOpened,
            [styles.arrowTop]: this.state.isOpened,
        });
        const dropdownContentClasses = classNames(styles.dropdownContent, {
            [styles.show]: this.state.isOpened,
        });

        const availableLocalesOptions = this.availableLocales.map((locale, index) => {
            const isSameLocale = locale === this.currentLocale;

            if (isSameLocale) {
                return null;
            }

            return <Link key={ index } to="/">{ locale.toUpperCase() }</Link>;
        });

        return (
            <div className={ dropdownClasses }>
                <button className={ dropButtonClasses } onClick={ this.handleToggleDropdown }>
                    { this.currentLocale.toUpperCase() }
                    <span className={ arrowClasses } />
                </button>
                <div className={ dropdownContentClasses }>
                    {availableLocalesOptions}
                </div>
            </div>
        );
    }

    handleToggleDropdown() {
        this.setState({
            isOpened: !this.state.isOpened,
        });
    }

    handleOutsideClick(event) {
        const btnClass = `.${styles.dropButton}`;

        if (!event.target.matches(btnClass) && this.state.isOpened) {
            this.setState({
                isOpened: false,
            });
        }
    }
}

LocalesDropdown.propTypes = {
    intl: PropTypes.object.isRequired,
    desktopMargin: PropTypes.bool,
};

export default injectIntl(LocalesDropdown);
