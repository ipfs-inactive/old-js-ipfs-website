import React from 'react';
import { injectIntl } from 'react-intl';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Link from 'shared/components/link';

import styles from './index.module.css';

const Button = ({ translationId, path, customClass, intl: { messages } }) => (
    <Link to={ path } className={ styles.link } >
        <div className={ classNames(styles.customButton, customClass) }>
            { messages[translationId].toUpperCase() }
        </div>
    </Link>
);

Button.propTypes = {
    intl: PropTypes.object.isRequired,
    translationId: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    customClass: PropTypes.string,
};

export default injectIntl(Button);
