import React, { Component } from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import Link from 'shared/components/link';
import LocalesDropdown from 'shared/components/locales-dropdown';
import styles from './index.module.css';

class DesktopNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const navbarClasses = classNames(styles.container,
            {
                [styles.default]: !this.state.scrolled,
                [styles.scrolled]: this.state.scrolled,
            });
        const { messages } = this.props.intl;

        return (
            <div className={ navbarClasses }>
                <div className={ styles.navbarMenu }>
                    <Helmet>
                        <script async defer src="https://buttons.github.io/buttons.js" />
                    </Helmet>
                    <Link to="/"> { messages.navMenuItem1.toUpperCase() } </Link>
                    <Link to="/"> { messages.navMenuItem2.toUpperCase() } </Link>
                    <Link to="/"> { messages.navMenuItem3.toUpperCase() } </Link>
                    <Link to="/"> { messages.navMenuItem4.toUpperCase() } </Link>
                    <a className="github-button" href="https://github.com/ntkme/github-buttons" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">
                        Star
                    </a>
                    <LocalesDropdown desktopMargin />
                </div>
            </div>
        );
    }

    handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 50 && !this.state.scrolled) {
            this.setState({
                scrolled: true,
            });
        } else if (scrollY <= 50 && this.state.scrolled) {
            this.setState({
                scrolled: false,
            });
        }
    }
}

DesktopNavbar.propTypes = {
    intl: PropTypes.object.isRequired,
};

export default injectIntl(DesktopNavbar);
