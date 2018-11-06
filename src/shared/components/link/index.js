import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

class Link extends Component {
  render () {
    const { to, href, prefixLocale, ...rest } = this.props

    if (to) {
      return <GatsbyLink { ...rest } to={ this.buildTo() } />
    }

    return (
      <a { ...rest } href={ href } target="_blank" rel="noopener noreferrer" />
    )
  }

  buildTo () {
    const { to, prefixLocale } = this.props
    const { intl } = this.context

    let finalTo = ''

    if (prefixLocale && intl.defaultLocale !== intl.locale) {
      finalTo += `/${intl.locale}`
    }

    // Ensure trailing slash to avoid gateway redirects
    // The IPFS gateway automatically redirects to <url>/ if there's trailing /
    finalTo += to.replace(/\/+$/, '')
    finalTo += '/'

    return finalTo
  }
}

Link.defaultProps = {
  prefixLocale: true
}

Link.propTpes = {
  to: PropTypes.string,
  href: PropTypes.string,
  prefixLocale: PropTypes.bool
}

Link.contextTypes = {
  intl: PropTypes.object.isRequired
}

export default Link
