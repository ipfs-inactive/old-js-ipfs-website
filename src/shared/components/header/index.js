import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Link from 'shared/components/link';
import Banner from 'shared/components/banner';
import styles from './index.module.css';

const Header = ({ className }) => (
    <header
        className={ classNames(styles.header, className) }>
        <Banner />
        <div
            style={ {
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            } }>
            <h1 style={ { margin: 0 } }>
                <Link
                    to="/"
                    style={ {
                        color: 'white',
                        textDecoration: 'none',
                    } }>
                    JS IPFS
                </Link>
            </h1>
        </div>
    </header>
);

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
