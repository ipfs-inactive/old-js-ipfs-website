import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { LiveProvider, LiveError } from 'react-live'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LiveEditor from 'shared/components/react-live/live-editor'
import LivePreview from 'shared/components/react-live/live-preview'
import Svg from 'shared/components/svg'
import Button from 'shared/components/button'
import Link from 'shared/components/link'
import SyntaxHighlighter from 'shared/components/syntax-highlighter'
import ReactMarkdown from 'react-markdown'
import {
  transformCode,
  log,
  getIpfs,
  codeAdd,
  codeGet
} from 'shared/utils/react-live'
import hexagonsSvg from 'shared/media/images/hexagons.sprite.svg'
import styles from './index.module.css'

const CID_LENGTH = 46

class GettingStarted extends Component {
  state = {
    runAdd: false,
    runGet: false,
    ipfsLoaded: false,
    outputAdd: '',
    outputGet: '',
    cid: 'QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A'
  }

  constructor (props) {
    super(props)
    this.scopeAdd = null
    this.scopeGet = null
    this.ipfs = null
  }

  componentDidMount () {
    getIpfs().then(stubed => {
      this.ipfs = stubed
      this.scopeAdd = { IPFS: this.ipfs, console: log(this.handleChange('add')) }
      this.scopeGet = { IPFS: this.ipfs, console: log(this.handleChange('get')) }
      this.setState({ ipfsLoaded: true })
    }).catch((err) => {
      console.log(err)
      toast.error('Error getting IPFS')
    })
  }

  render () {
    const { intl: { messages } } = this.props
    const {
      cid,
      runAdd,
      runGet,
      outputAdd,
      outputGet,
      ipfsLoaded
    } = this.state

    return (
      <div className={ styles.container } id="gsContainer">
        <div className={ styles.backgroundSvg }>
          <div className={ styles.hex1 }><Svg svg={ hexagonsSvg } /></div>
          <div className={ styles.hex2 }><Svg svg={ hexagonsSvg } /></div>
        </div>
        <div className={ styles.content }>
          <h1>{ messages.gettingStarted.sectionTitle }</h1>
          <ReactMarkdown className={ styles.sectionDescription } source={ messages.gettingStarted.sectionDesc } />
          <div className={ styles.panel } >
            <p className={ styles.liveSnippetTitle }>{ messages.gettingStarted.addDataToIPFS }</p>
            <LiveProvider key="add" code={ codeAdd } scope={ this.scopeAdd } mountStylesheet={ false } transformCode={ transformCode }>
              <div className={ styles.liveSnippet }>
                <div className={ styles.liveSnippetEditorContainer }>
                  <LiveEditor name="add" setRun={ this.handleSetRun } language='js' />
                  <button className={ styles.liveSnippetRun } onClick={ this.handleRunClick('add') }>Run</button>
                </div>
                <div className={ styles.liveSnippetPreview } >
                  <p className={ styles.liveSnippetOutput }>{ messages.gettingStarted.output }</p>
                  <pre>
                    <code>{ outputAdd }</code>
                  </pre>
                  { (ipfsLoaded && runAdd) && <LivePreview/> }
                  { ipfsLoaded && <LiveError/> }
                </div>
              </div>
            </LiveProvider>
            <p className={ styles.liveSnippetTitle }>{ messages.gettingStarted.getDataFromIPFS }</p>
            <p className={ styles.liveSnippetSubtitle }>{ messages.gettingStarted.usingJavascript }</p>
            <LiveProvider key="get" code={ codeGet(cid) } scope={ this.scopeGet } mountStylesheet={ false } transformCode={ transformCode }>
              <div className={ styles.liveSnippet }>
                <div className={ styles.liveSnippetEditorContainer }>
                  <LiveEditor name="get" setRun={ this.handleSetRun } language='js' />
                  <button className={ styles.liveSnippetRun } onClick={ this.handleRunClick('get') }>Run</button>
                </div>
                <div className={ styles.liveSnippetPreview } >
                  <p className={ styles.liveSnippetOutput }>{ messages.gettingStarted.output }</p>
                  <pre>
                    <code>{ outputGet }</code>
                  </pre>
                  { (ipfsLoaded && runGet) && <LivePreview/> }
                  { ipfsLoaded && <LiveError/> }
                </div>
              </div>
            </LiveProvider>
            <p className={ styles.liveSnippetSubtitle }>{ messages.gettingStarted.usingCli }</p>
            <div className={ styles.liveSnippetCliContainer }>
              <SyntaxHighlighter codeStr={ `npm install ipfs -g
jsipfs cat ${cid}` } language='bash' />
            </div>

            <p className={ styles.liveSnippetSubtitle }>{ messages.gettingStarted.usingGateway }</p>
            <Link className={ styles.liveSnippetLink } href={ `https://ipfs.io/ipfs/${cid}` }>{ `https://ipfs.io/ipfs/${cid}` }</Link>
          </div>
          <Button translationId="buttonLearnMore" href="https://github.com/ipfs/js-ipfs/tree/master/examples#js-ipfs-examples-and-tutorials" />
        </div>
      </div>
    )
  }

  handleSetRun = (func, name) => {
    if (name === 'add') {
      this.addCode = func
    } else if (name === 'get') {
      this.getCode = func
    }
  }

  handleChange = (editor) => (content) => {
    if (content instanceof Error) {
      content = content.message
    }

    if (typeof content !== 'string') {
      return
    }

    if (editor === 'add') {
      if (typeof content === 'string' && content.length === CID_LENGTH && content !== this.state.cid) {
        this.setState({ cid: content })
      }
      this.setState({ outputAdd: content })
    } else {
      this.setState({ outputGet: content })
    }
  }

  handleRunClick = (editor) => () => {
    if (editor === 'add') {
      this.setState({ runAdd: true, runGet: false, outputGet: '' })
      this.addCode()
    } else {
      this.setState({ runGet: true })
      this.getCode()
    }
  }
}

GettingStarted.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(GettingStarted)
