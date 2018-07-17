import React from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import { injectIntl } from 'react-intl'

import ProtocolIcon from 'shared/media/images/pl-logo.svg'
import styles from './index.module.css'

const Footer = ({ className, intl: { messages: { footer } } }) => (
  <footer className={ classNames(styles.footer, className) }>
    <div className={ styles.container }>
      <div className={ styles.leftContent }>&copy; { footer.leftContent }</div>
      <div className={ styles.rightContent }>
        <div className={ styles.text }>{ footer.rightContent }</div>
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
