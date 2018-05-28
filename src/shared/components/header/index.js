import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Navbar from 'shared/components/navbar';
import styles from './index.module.css';

const Header = ({ className }) => (
    <header className={ classNames(styles.header, className) }>
        <Navbar />
    </header>
);

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
