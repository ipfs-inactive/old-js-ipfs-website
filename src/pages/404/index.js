import React from 'react'
import { injectIntl } from 'react-intl'

import styles from './index.module.css'

const NotFoundPage = ({ intl: { messages } }) => {
  return (
    <div>
      <h1 className={ styles.title }>{ messages.notFoundPage.mainMessage }</h1>
      <p>{ messages.notFoundPage.detailedMessage }</p>
    </div>
  )
}

export default injectIntl(NotFoundPage)
