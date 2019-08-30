import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Highlight, { Prism } from 'prism-react-renderer'
import styles from './index.module.css'
import okaidia from '../react-live/okaidia'

const SyntaxHighlighter = ({ codeStr, language, className, theme }) => {
  const preClasses = classNames(`language-${language}`, styles.preCustom)

  return (
    <div className={ styles.gatsbyHighlight + ' ' + className } >
      <Highlight Prism={ Prism } code={ codeStr } theme={ theme || okaidia } language={ language }>
        { ({ tokens, getLineProps, getTokenProps, style }) => (
          <pre aria-hidden='true' style={ style } className={ preClasses }>
            { tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div { ...getLineProps({ line, key: i }) }>
                { line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span { ...getTokenProps({ token, key }) } />
                )) }
              </div>
            )) }
          </pre>
        ) }
      </Highlight>
    </div>
  )
}

SyntaxHighlighter.propTypes = {
  codeStr: PropTypes.string.isRequired,
  language: PropTypes.oneOf(['bash', 'html', 'javascript']).isRequired
}

export default SyntaxHighlighter
