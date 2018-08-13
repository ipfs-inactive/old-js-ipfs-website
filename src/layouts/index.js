/* eslint-disable import/first */
typeof window !== 'undefined' && require('intersection-observer')

import 'shared/styles/index.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeData from 'react-intl/locale-data/<%= locale %>'
import Footer from 'shared/components/footer'
import messages from '../../intl/messages/<%= locale %>.json'
import { withPrefix } from 'gatsby-link'

import styles from './index.module.css'

addLocaleData(localeData)

class Layout extends Component {
  render () {
    const { children } = this.props

    return (
      <IntlProvider locale="<%= locale %>" messages={ messages }>
        <div className={ styles.app }>
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
            { children() }
          </main>
          <Footer className={ styles.footer } />
        </div>
      </IntlProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
