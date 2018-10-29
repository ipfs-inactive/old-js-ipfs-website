import React from 'react'

import Layout from 'shared/components/layout'

const NotFoundPage = ({ pageContext }) => {
  return (
    <Layout intlInfo={ pageContext }>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that does not exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
