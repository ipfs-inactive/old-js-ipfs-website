import React from 'react';

import Link from 'shared/components/link';
import styles from './index.module.css';

const Navbar = () => (
    <div className={ styles.container }>
        <Link to="/"> TUTORIALS </Link>
        <Link to="/"> API </Link>
        <Link to="/"> CONTRIBUTE </Link>
        <Link to="/"> OPEN SOURCE </Link>
    </div>
);

export default Navbar;
