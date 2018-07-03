import React from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import { injectIntl } from 'react-intl'

import ProtocolIcon from '-!svg-react-loader!shared/media/images/pl-logo.svg'
import styles from './index.module.css'

const Footer = ({ className, intl: { messages } }) => (
  <footer className={classNames(styles.footer, className)}>
    <div className={styles.container}>
      <div className={styles.leftContent}>&copy; { messages.footerLeftContent }</div>
      <div className={styles.rightContent}>
        <div className={styles.text}>{ messages.footerRightContent }</div>
        <ProtocolIcon />
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  className: PropTypes.string,
  intl: PropTypes.object.isRequired
}

export default injectIntl(Footer)
