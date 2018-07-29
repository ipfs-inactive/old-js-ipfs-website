import React from 'react'
import Prism from 'prismjs'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import 'prismjs/themes/prism-okaidia.css'
import styles from './index.module.css'

const SyntaxHighlighter = ({ codeStr, language, className }) => {
  const htmlCode = Prism.highlight(codeStr, Prism.languages.js, language)
  const preClasses = classNames(`language-${language}`, styles.preCustom)

  return (
    <div className={ styles.gatsbyHighlight + ' ' + className } >
      <pre className={ preClasses }>
        <code dangerouslySetInnerHTML={ { __html: htmlCode } } />
      </pre>
    </div>
  )
}

SyntaxHighlighter.propTypes = {
  codeStr: PropTypes.string.isRequired,
  language: PropTypes.oneOf(['bash', 'html', 'javascript']).isRequired
}

export default SyntaxHighlighter
