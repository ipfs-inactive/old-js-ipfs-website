import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'shared/components/link';
import styles from './index.module.css';

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            scrolled: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
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

        return (
            <div className={ navbarClasses }>
                <Link to="/"> TUTORIALS </Link>
                <Link to="/"> API </Link>
                <Link to="/"> CONTRIBUTE </Link>
                <Link to="/"> OPEN SOURCE </Link>
            </div>
        );
    }

    handleScroll() {
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

export default Navbar;
