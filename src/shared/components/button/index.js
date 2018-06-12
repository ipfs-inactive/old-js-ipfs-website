import React from 'react';
import { injectIntl } from 'react-intl';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Link from 'shared/components/link';

import styles from './index.module.css';

const Button = ({ translationId, path, className, intl: { messages } }) => (
    <Link to={ path } className={ styles.link } >
        <div className={ classNames(styles.customButton, className) }>
            { messages[translationId].toUpperCase() }
        </div>
    </Link>
);

Button.propTypes = {
    intl: PropTypes.object.isRequired,
    translationId: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default injectIntl(Button);
