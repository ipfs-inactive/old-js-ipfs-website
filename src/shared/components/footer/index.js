import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.css';

const Footer = ({ className }) => (
    <footer className={ classNames(styles.footer, className) }>
        <div
            style={ {
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            } }>
            This is the footer
        </div>
    </footer>
);

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
