/* eslint-disable import/first, no-new-func */
/* global ReactIntlLocaleData:false */
typeof window !== 'undefined' && require('intersection-observer')

import 'shared/styles/index.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { addLocaleData, IntlProvider } from 'react-intl'
import Footer from 'shared/components/footer'
import { withPrefix } from 'gatsby'

import styles from './index.module.css'

const loadLocaleData = function (intl) {
  const fn = Function(intl.localeDataCode)
  const fnThis = typeof window !== 'undefined' ? window : global

  fn.call(fnThis)
  addLocaleData(ReactIntlLocaleData[intl.loadedAcronym])
}

class Layout extends Component {
  render () {
    this.maybeLoadLocaleData()

    const { children, pageContext: { intl } } = this.props

    return (
      <IntlProvider locale={ intl.acronym } messages={ intl.messages }>
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
            ] }
            script={ [
              { src: 'https://camp.ipfs.io/ribbon.min.js', async: true }
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

  maybeLoadLocaleData () {
    const { intl } = this.props.pageContext

    if (this.previousIntl !== intl) {
      this.previousIntl = intl
      loadLocaleData(intl)
    }
  }
}

Layout.propTypes = {
  children: PropTypes.object,
  pageContext: PropTypes.object.isRequired
}

export default Layout
