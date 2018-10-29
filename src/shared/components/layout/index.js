/* eslint-disable import/first */
typeof window !== 'undefined' && require('intersection-observer')

import 'shared/styles/index.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { addLocaleData, IntlProvider } from 'react-intl'
import classNames from 'classnames'
import Footer from 'shared/components/footer'
import { withPrefix } from 'gatsby'

import styles from './index.module.css'

class Layout extends Component {
  constructor (props) {
    super(props)

    const localeData = require(`react-intl/locale-data/${props.intlInfo.acronym}`)

    addLocaleData(localeData)
  }

  render () {
    const { children, className, intlInfo: { messages, acronym } } = this.props

    return (
      <IntlProvider locale={ acronym } messages={ messages }>
        <div className={ classNames(styles.app, className) }>
          <Helmet
            defaultTitle="JS IPFS"
            meta={ [
              { name: 'description', content: 'JS IPFS website' },
              { name: 'msapplication-TileColor', content: '#2f3951' },
              { name: 'theme-color', content: '#ffffff' }
            ] }
            link={ [
              { rel: 'apple-touch-icon', sizes: '180x180', href: withPrefix('/favicon/apple-touch-icon.png') },
              { rel: 'icon', sizes: '32x32', href: withPrefix('/favicon/favicon-32x32.png'), type: 'image/png' },
              { rel: 'icon', sizes: '16x16', href: withPrefix('/favicon/favicon-16x16.png'), type: 'image/png' },
              { rel: 'mask-icon', href: withPrefix('/favicon/safari-pinned-tab.svg'), color: '#0a1732' }
            ] } >
          </Helmet>

          <main className={ styles.children }>
            { children }
          </main>
          <Footer className={ styles.footer } />
        </div>
      </IntlProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  intlInfo: PropTypes.object.isRequired
}

export default Layout
