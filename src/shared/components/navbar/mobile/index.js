import React, { Component } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import LocalesDropdown from 'shared/components/locales-dropdown';
import Link from 'shared/components/link';
import styles from './index.module.css';

class MobileNavbar extends Component {
    constructor() {
        super();

        this.state = {
            isOpened: false,
            scrolled: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMenuListRef = this.handleMenuListRef.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const menuListHeight = this.state.isOpened ? this.menuListElem && this.menuListElem.scrollHeight : 0;
        const navbarContainerClasses = classNames(styles.navbarContainer, {
            [styles.navbarContainerScrolled]: this.state.scrolled || this.state.isOpened,
        });
        const menuIconClass = classNames(styles.menuIconWrapper, {
            [styles.openedMenuIcon]: this.state.isOpened,
        });

        return (
            <div className={ styles.container }>
                <div className={ navbarContainerClasses }>
                    <div className={ menuIconClass } onClick={ this.handleMenuClick } >
                        <div className={ styles.bar1 } />
                        <div className={ styles.bar2 } />
                        <div className={ styles.bar3 } />
                    </div>
                    <div className={ styles.localesDropdownContainer }>
                        <LocalesDropdown />
                    </div>
                </div>
                <ul className={ styles.menuList } ref={ this.handleMenuListRef } style={ { maxHeight: menuListHeight } } >
                    <Helmet>
                        <script async defer src="https://buttons.github.io/buttons.js" />
                    </Helmet>
                    <li>
                        <Link className={ styles.menuLink } to="/"> TUTORIALS </Link>
                    </li>
                    <li>
                        <Link className={ styles.menuLink } to="/"> API </Link>
                    </li>
                    <li>
                        <Link className={ styles.menuLink } to="/"> CONTRIBUTE </Link>
                    </li>
                    <li className={ styles.githubContributers }>
                        <Link className={ styles.menuLink } to="/"> OPEN SOURCE </Link>
                        <a className="github-button" href="https://github.com/ntkme/github-buttons" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">
                            Star
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

    handleScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 30 && !this.state.scrolled) {
            this.setState({
                scrolled: true,
            });
        } else if (scrollY <= 30 && this.state.scrolled) {
            this.setState({
                scrolled: false,
            });
        }
    }

    handleMenuClick() {
        this.setState({
            isOpened: !this.state.isOpened,
        });
    }

    handleMenuListRef(element) {
        this.menuListElem = element;
    }
}

export default MobileNavbar;
