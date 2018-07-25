import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import stepsArr from 'shared/data/getting-started'
import SyntaxHighlighter from 'shared/components/syntax-highlighter'
import styles from './index.module.css'

const StepsList = ({ intl: { messages } }) => {
  const translationSteps = messages.gettingStarted.list
  const steps = stepsArr.map((step, index) => {
    const translationStep = translationSteps[step.translationListIndex]
    return (
      <div className={ styles.command } key={ `step-${index}` }>
        <ReactMarkdown className={ styles.title } source={ translationStep.title } />
        <div className={ styles.desc }>{ newLineToBreak(translationStep.desc) }</div>
        <SyntaxHighlighter codeStr={ step.codeStr } language={ step.language } />
        { translationStep.note && <ReactMarkdown className={ styles.note } source={ translationStep.note } /> }
      </div>
    )
  })

  return <div> { steps } </div>
}

function newLineToBreak (str) {
  return str.split('\n').map((text, index) => <ReactMarkdown key={ `text-${index}` } source={ text } />)
}

StepsList.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(StepsList)
