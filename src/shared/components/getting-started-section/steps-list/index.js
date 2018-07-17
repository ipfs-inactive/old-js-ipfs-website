import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import stepsArr from 'shared/data/getting-started'
import SyntaxHighlighter from 'shared/components/syntax-highlighter'
import styles from './index.module.css'

const StepsList = ({ intl: { messages } }) => {
  const translationSteps = messages.gettingStarted.list
  const steps = stepsArr.map((step, index) => {
    const translationStep = translationSteps[step.translationListIndex]
    return (
      <div className={ styles.command } key={ `step-${index}` }>
        <p className={ styles.title }>{ translationStep.title }</p>
        <p className={ styles.desc }>{ newLineToBreak(translationStep.desc) }</p>
        <SyntaxHighlighter codeStr={ step.codeStr } language={ step.language } />
        { translationStep.note && <p className={ styles.note } >{ translationStep.note }</p> }
      </div>
    )
  })

  return <div> { steps } </div>
}

function newLineToBreak (str) {
  return str.split('\n').map((text, index) => <span key={ `text-${index}` }>{ text }<br /></span>)
}

StepsList.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(StepsList)
