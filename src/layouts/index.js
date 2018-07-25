import 'shared/styles/index.css'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { addLocaleData, IntlProvider } from 'react-intl'
import localeData from 'react-intl/locale-data/<%= locale %>'
import Header from 'shared/components/header'
import Footer from 'shared/components/footer'
import messages from '../../intl/messages/<%= locale %>.json'
import styles from './index.module.css'

addLocaleData(localeData)

class Layout extends Component {
  componentDidMount () {
    require('intersection-observer')
  }

  render () {
    const { children } = this.props
    return (
      <IntlProvider locale="<%= locale %>" messages={ messages }>
        <div className={ styles.app }>
          <Helmet
            title="JS IPFS"
            meta={ [
              { name: 'description', content: 'JS IPFS website' },
              { name: 'keywords', content: 'gatsby, ipfs' }
            ] } />

          <Header className={ styles.header } />
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
