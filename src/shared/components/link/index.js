import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'

class Link extends Component {
  render () {
    const { to, ...rest } = this.props
    const { intl } = this.context

    const localelizedTo = intl.defaultLocale !== intl.locale ? `/${intl.locale}${to}` : to

    return <GatsbyLink { ...rest } to={ localelizedTo } />
  }

    static propTypes = {
      to: PropTypes.string.isRequired
    }

    static contextTypes = {
      intl: PropTypes.object.isRequired
    }
}

export default Link
