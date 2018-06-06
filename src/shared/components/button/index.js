import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Link from 'shared/components/link';

import styles from './index.module.css';

const Button = ({ text, path, customClass }) => (
    <Link to={ path } className={ styles.testing } >
        <div className={ classNames(styles.customButton, customClass) }>
            { text }
        </div>
    </Link>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string,
    customClass: PropTypes.string,
};

export default Button;
