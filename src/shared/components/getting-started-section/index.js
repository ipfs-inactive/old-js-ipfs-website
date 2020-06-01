import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import isIPFS from 'is-ipfs'
import LiveEditor from 'shared/components/react-live/live-editor'
import Svg from 'shared/components/svg'
import Button from 'shared/components/button'
import Link from 'shared/components/link'
import SyntaxHighlighter from 'shared/components/syntax-highlighter'
import ReactMarkdown from 'react-markdown'
import {
  runCode,
  log,
  getIpfs,
  codeAdd,
  codeGet
} from 'shared/utils/react-live'
import hexagonsSvg from 'shared/media/images/hexagons.sprite.svg'
import styles from './index.module.css'

const ADD_CODE_DATA = 'Hello, <YOUR NAME HERE>'

class GettingStarted extends Component {
  state = {
    codeAdd: codeAdd(ADD_CODE_DATA),
    codeGet: codeGet('<YOUR CID HERE>'),
    outputAdd: '',
    outputGet: '',
    cid: ''
  }

  async componentDidMount () {
    try {
      this.IPFS = await getIpfs()
    } catch (err) {
      console.log(err)
      return toast.error('Error getting IPFS')
    }

    const node = await this.IPFS.create()
    // Add the data to IPFS so that it can be fetched instantly
    for await (const { cid } of node.add(ADD_CODE_DATA)) {
      this.setState({ cid: cid.toString(), codeGet: codeGet(cid) })
    }
  }

  render () {
    const { intl: { messages } } = this.props
    const {
      cid,
      codeAdd,
      codeGet,
      outputAdd,
      outputGet
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
            <div className={ styles.liveSnippet }>
              <div className={ styles.liveSnippetEditorContainer }>
                <LiveEditor name="add" code={ codeAdd } onChange={ code => this.setState({ codeAdd: code }) } language='js' />
                <button className={ styles.liveSnippetRun } onClick={ this.handleRunClick('add') }>Run</button>
              </div>
              <div className={ styles.liveSnippetPreview } >
                <p className={ styles.liveSnippetOutput }>{ messages.gettingStarted.output }</p>
                <pre>
                  <code>{ outputAdd }</code>
                </pre>
              </div>
            </div>
            <p className={ styles.liveSnippetTitle }>{ messages.gettingStarted.getDataFromIPFS }</p>
            <p className={ styles.liveSnippetSubtitle }>{ messages.gettingStarted.usingJavascript }</p>
            <div className={ styles.liveSnippet }>
              <div className={ styles.liveSnippetEditorContainer }>
                <LiveEditor name="get" code={ codeGet } onChange={ code => this.setState({ codeGet: code }) } language='js' />
                <button className={ styles.liveSnippetRun } onClick={ this.handleRunClick('get') }>Run</button>
              </div>
              <div className={ styles.liveSnippetPreview } >
                <p className={ styles.liveSnippetOutput }>{ messages.gettingStarted.output }</p>
                <pre>
                  <code>{ outputGet }</code>
                </pre>
              </div>
            </div>
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
      content = `${content}`
    }

    if (editor === 'add') {
      if (typeof content === 'string' && isIPFS.cid(content) && content !== this.state.cid) {
        this.setState({ codeGet: codeGet(content), outputGet: '', cid: content })
      }
      this.setState({ outputAdd: this.state.outputAdd ? `${this.state.outputAdd}\n${content}` : content })
    } else {
      this.setState({ outputGet: this.state.outputGet ? `${this.state.outputGet}\n${content}` : content })
    }
  }

  handleRunClick = (editor) => async () => {
    const handleLog = this.handleChange(editor)
    const scope = { IPFS: this.IPFS, console: log(handleLog) }
    const code = editor === 'add' ? this.state.codeAdd : this.state.codeGet
    const outputKey = editor === 'add' ? 'outputAdd' : 'outputGet'

    try {
      this.setState({ [outputKey]: '' })
      await runCode(code, scope)
    } catch (err) {
      console.error(err)
      this.setState({ [outputKey]: err.message })
    }
  }
}

GettingStarted.propTypes = {
  intl: PropTypes.object.isRequired
}

export default injectIntl(GettingStarted)
