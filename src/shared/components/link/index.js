import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'

class Link extends Component {
  render () {
    const { to, changeLocale, href, ...rest } = this.props
    const { intl } = this.context

    if (to) {
      const localelizedTo = intl.defaultLocale !== intl.locale ? `/${intl.locale}${to}` : to

      return <GatsbyLink { ...rest } to={ changeLocale ? to : localelizedTo } />
    }

    return (
      <a { ...rest } href={ href } target="_blank" rel="noopener noreferrer" />
    )
  }

    static propTypes = {
      to: PropTypes.string,
      href: PropTypes.string,
      changeLocale: PropTypes.bool
    }

    static contextTypes = {
      intl: PropTypes.object.isRequired
    }
}

export default Link
