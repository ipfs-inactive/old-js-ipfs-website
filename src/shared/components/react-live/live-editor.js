import React, { Component } from 'react'
import { LiveProvider, Editor } from 'react-live'

export default class LiveEditor extends Component {
  static contextTypes = LiveProvider.childContextTypes

  constructor (props, context) {
    super(props, context)
    this.code = context.live.code
  }

  run () {
    this.context.live.onChange(this.code)
  }

  componentDidUpdate () {
    this.code = this.context.live.code
  }

  render () {
    return (
      <Editor
        { ...this.props }
        code={ this.context.live.code }
        onChange={ (code) => {
          this.code = code
        } }
      />
    )
  }
}
