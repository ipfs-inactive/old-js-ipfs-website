import React from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import { injectIntl } from 'react-intl'

import Svg from 'shared/components/svg'
import protocolLogoSvg from './images/pl-logo.svg'
import styles from './index.module.css'

const Footer = ({ className, intl: { messages } }) => (
  <footer className={ classNames(styles.footer, className) }>
    <div className={ styles.container }>
      <div className={ styles.leftContent }>&copy; { messages.footer.leftContent }</div>
      <div className={ styles.rightContent }>
        <div className={ styles.text }>{ messages.footer.rightContent }</div>
        <Svg className={ styles.protocolLogo } svg={ protocolLogoSvg } />
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  className: PropTypes.string,
  intl: PropTypes.object.isRequired
}

export default injectIntl(Footer)
