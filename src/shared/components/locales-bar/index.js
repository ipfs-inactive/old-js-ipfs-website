import React from 'react';
import { injectIntl } from 'react-intl';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { getLocalesFullForm, getIndexByAcronym } from 'utils/getLocalesUtils';

import Link from 'shared/components/link';
import styles from './index.module.css';

const LocalesBar = ({ scrolled, intl: { locale } }) => {
    const localesFullForm = getLocalesFullForm();
    const currentLocaleIndex = getIndexByAcronym(locale);
    const localesBarClassName = classNames(styles.localesBar, {
        [styles.defaultLocalesBar]: !scrolled,
        [styles.hideLocalesBar]: scrolled,
    });
    const renderLocales = localesFullForm.map((locale, index) => (
        <Link key={ `localeF-${index}` } className={ index === currentLocaleIndex && styles.active } to="/" >{ locale }</Link>
    ));

    return (
        <div className={ localesBarClassName }>
            { renderLocales }
        </div>
    );
};

LocalesBar.propTypes = {
    scrolled: PropTypes.bool.isRequired,
    intl: PropTypes.object.isRequired,
};

export default injectIntl(LocalesBar);
