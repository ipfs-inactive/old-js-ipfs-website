import React from 'react';
import { injectIntl } from 'react-intl';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Link from 'shared/components/link';

import styles from './index.module.css';

const Button = ({ translationId, path, className, intl: { messages }, modifier }) => (
    <Link to={ path } className={ styles.link } >
        <div className={ classNames(styles.customButton, className, styles[modifier]) }>
            { messages[translationId] }
        </div>
    </Link>
);

Button.defaultProps = {
    modifier: 'default',
};

Button.propTypes = {
    intl: PropTypes.object.isRequired,
    translationId: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
    modifier: PropTypes.oneOf(['default', 'github', 'twitter']),
};

export default injectIntl(Button);
