import React from 'react'
import { Editor } from 'react-live'
import okaidia from './okaidia'

export default function LiveEditor ({ code, onChange, ...rest }) {
  return (
    <Editor
      theme={ okaidia }
      padding={ 15 }
      { ...rest }
      code={ code }
      onChange={ onChange }
    />
  )
}
