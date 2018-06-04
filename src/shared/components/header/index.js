import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import DesktopNavbar from 'shared/components/navbar/desktop';
import MobileNavbar from 'shared/components/navbar/mobile';
// import Banner from 'shared/components/banner';
import styles from './index.module.css';

const Header = ({ className }) => (
    <header className={ classNames(styles.header, className) }>
        {/* <Banner /> */}
        <DesktopNavbar />
        <MobileNavbar />
    </header>
);

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
