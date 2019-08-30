import React, { Component } from 'react'
import { withLive, Editor } from 'react-live'
import okaidia from './okaidia'

class LiveEditor extends Component {
  // static contextTypes = LiveProvider.childContextTypes

  constructor (props) {
    super(props)

    this.code = props.live.code
  }

  componentDidMount () {
    const { name, setRun } = this.props

    setRun && setRun(this.run, name)
  }

  componentDidUpdate () {
    this.code = this.props.live.code
  }

  run = () => {
    this.props.live.onChange(this.code)
  }

  render () {
    const { setRun, ...rest } = this.props

    return (
      <Editor
        theme={ okaidia }
        padding={ 15 }
        { ...rest }
        code={ this.props.live.code }
        onChange={ (code) => {
          this.code = code
        } }
      />
    )
  }
}

export default withLive(LiveEditor)
