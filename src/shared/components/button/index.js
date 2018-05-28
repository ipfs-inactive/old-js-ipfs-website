import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import styles from './index.module.css';

const Button = ({ text, path, customClass }) => (
    <div className={ classNames(styles.customButton, customClass) }>
        { text }
    </div>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string,
    customClass: PropTypes.string,
};

export default Button;
