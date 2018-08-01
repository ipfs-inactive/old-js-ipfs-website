import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { LiveProvider, LiveError } from 'react-live'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LiveEditor from 'shared/components/react-live/live-editor'
import LivePreview from 'shared/components/react-live/live-preview'
import HexSvg from 'shared/media/backgrounds/hexagons.svg'
import Button from 'shared/components/button'
import Link from 'shared/components/link'
import {
  transformCode,
  log,
  getIpfs,
  codeAdd,
  codeGet
} from 'utils/react-live-utils'
import styles from './index.module.css'
import SyntaxHighlighter from 'shared/components/syntax-highlighter'
import 'prismjs/themes/prism-okaidia.css'

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
    this.refAdd = React.createRef()
    this.refGet = React.createRef()
    this.ipfs = null
  }

  componentDidMount () {
    getIpfs().then(stubed => {
      this.ipfs = stubed
      this.scopeAdd = {IPFS: this.ipfs, console: log(this.handleChange('add'))}
      this.scopeGet = {IPFS: this.ipfs, console: log(this.handleChange('get'))}
      this.setState({ipfsLoaded: true})
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
          <div className={ styles.hex1 }><HexSvg /></div>
          <div className={ styles.hex2 }><HexSvg /></div>
        </div>
        <div className={ styles.content }>
          <h1>{ messages.gettingStarted.sectionTitle }</h1>
          <span className={ styles.sectionDescription }>
            <p>{ messages.gettingStarted.sectionDesc }</p>
          </span>
          <div className={ styles.panel } >
            <p className={ styles.liveSnippetTitle }>{ messages.gettingStarted.addDataToIPFS }</p>
            <LiveProvider key="add" className={ styles.liveSnippet } code={ codeAdd } scope={ this.scopeAdd } mountStylesheet={ false } transformCode={ transformCode }>
              <div className={ styles.liveSnippetEditorContainer }>
                <LiveEditor ref={ this.refAdd } className={ 'language-js ' + styles.liveSnippetEditor }/>
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
            </LiveProvider>
            <p className={ styles.liveSnippetTitle }>{ messages.gettingStarted.getDataFromIPFS }</p>
            <p className={ styles.liveSnippetSubtitle }>{ messages.gettingStarted.usingJavascript }</p>
            <LiveProvider key="get" className={ styles.liveSnippet } code={ codeGet(cid) } scope={ this.scopeGet } mountStylesheet={ false } transformCode={ transformCode }>

              <div className={ styles.liveSnippetEditorContainer }>
                <LiveEditor ref={ this.refGet } className={ 'language-js ' + styles.liveSnippetEditor }/>
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

  handleChange = (editor) => (content) => {
    if (content instanceof Error) {
      content = content.message
    }

    if (typeof content !== 'string') {
      return
    }

    if (editor === 'add') {
      if (typeof content === 'string' && content.length === CID_LENGTH && content !== this.state.cid) {
        this.setState({cid: content})
      }
      this.setState({outputAdd: content})
    } else {
      this.setState({outputGet: content})
    }
  }

  handleRunClick = (editor) => () => {
    if (editor === 'add') {
      this.setState({ runAdd: true, runGet: false, outputGet: '' })
      this.refAdd.current.run()
    } else {
      this.setState({ runGet: true })
      this.refGet.current.run()
    }
  }
}

GettingStarted.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(GettingStarted)
