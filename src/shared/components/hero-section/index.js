import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import axios from 'axios'
import classNames from 'classnames'
import { distanceInWordsToNow } from 'date-fns'
import locales from 'utils/dateFnsLocales'
import Observer from '@researchgate/react-intersection-observer'
import ReactMarkdown from 'react-markdown'

import LocalesBar from 'shared/components/locales-bar'
import OutsideRingSvg from 'shared/media/backgrounds/outsidering.svg'
import MiddleRingSvg from 'shared/media/backgrounds/middlering.svg'
import InsideRingSvg from 'shared/media/backgrounds/insidering.svg'
import ArrowUp from 'shared/media/icons/arrow-up.svg'
import CubeSvg from 'shared/media/images/cube.svg'
import styles from './index.module.css'

const defaultScrollOptions = { offset: -66, align: 'top', duration: 800 }

class Hero extends Component {
  state = {
    info: undefined,
    errorMessage: undefined,
    inView: true
  }

  constructor (props) {
    super(props)

    const { messages } = this.props.intl
    this.messages = messages
  }

  componentDidMount () {
    this.scrollToComponent = require('react-scroll-to-component')
    const self = this
    this._ismounted = true

    axios.get('https://api.npms.io/v2/package/ipfs')
      .then(function ({ data: { collected } }) {
        self.handleAxiosResponse(collected)
      })
      .catch(function (error) {
        self.handleAxiosError(error)
      })
  }

  componentWillUnmount () {
    this._ismounted = false
  }

  render () {
    const { info, errorMessage, inView } = this.state
    const isDataLoaded = Boolean(info)
    const existsError = Boolean(errorMessage)
    const infoContainerClasses = classNames(styles.infoContainer, {
      [styles.hidden]: !isDataLoaded && !existsError,
      [styles.error]: !isDataLoaded && existsError
    })
    const observerClass = classNames({ [styles.animationOff]: !inView })
    const messages = this.messages

    return (
      <Observer onChange={ this.handleObserverView } className={ observerClass }>
        <div className={ styles.wrapperContainer }>
          <div className={ styles.container }>
            <LocalesBar className={ styles.localesBar } />
            <div className={ styles.orbitContainer } >
              <div className={ styles.orbits }>
                <div className={ styles.outsideRing }>
                  <OutsideRingSvg />
                </div>
                <div className={ styles.middleRing }>
                  <MiddleRingSvg />
                </div>
                <div className={ styles.insideRing }>
                  <InsideRingSvg />
                </div>
              </div>
            </div>
            <div className={ styles.content }>
              <CubeSvg />
              <h1>{ messages.hero.welcomeMessage }</h1>
              <ReactMarkdown source={ messages.hero.textDescription } />
              <div className={ infoContainerClasses }>
                { isDataLoaded && !existsError ? this.renderPkgInfo(info, isDataLoaded) : this.renderErrorMessage(errorMessage) }
              </div>
              <div className={ styles.arrowUp } onClick={ this.handleArrowClick }>
                <ArrowUp />
              </div>
            </div>
          </div>
        </div>
      </Observer>
    )
  }

  renderPkgInfo = (info, isDataLoaded) => {
    const pkgInfoArr = Object.values(info)

    return <div>{ pkgInfoArr.map((infoElement, index) => <span key={`pkgInfo-${index}`}>{ isDataLoaded ? infoElement : '' }</span>) }</div>
  }

  renderErrorMessage = (errorMessage) => (
    <div>
      <span>{ errorMessage }</span>
    </div>
  )

  handleObserverView = ({ isIntersecting }) => this.setState({ inView: isIntersecting })

  handleAxiosResponse = (data) => {
    const messages = this.messages

    const currentVersion = data.metadata.version
    const currentVersionStr = `${messages.hero.currentVersion} ${currentVersion}`

    const dateFnsLocale = this.getDateFnsCurrentLocale(locales)
    const isDateFnsLocaleFound = Boolean(dateFnsLocale)
    const dateFnsLocaleObject = isDateFnsLocaleFound ? { locale: dateFnsLocale } : {}
    const latestUpdateDate = new Date(data.metadata.date)
    const latestUpdateWords = distanceInWordsToNow(latestUpdateDate, dateFnsLocaleObject)
    const latestUpdateDateStr = `${messages.hero.latestUpdate} ${latestUpdateWords}`

    const downloads = this.calculateDownloads(data.npm.downloads, { lastMonth: true })
    const formattedDownloads = downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const downloadsStr = `${messages.hero.downloadsLastMonth} ${formattedDownloads}`

    const info = {
      currentVersionStr,
      latestUpdateDateStr,
      downloadsStr
    }

    this.setState({ info })
  }

  handleAxiosError = (error) => {
    let errorMessage = 'Something went wrong while fetching package data: '
    if (error.response) {
      errorMessage += `${error.response.status} status code.`
    } else if (error.request) {
      errorMessage += 'request was made but no response was received.'
    } else {
      errorMessage += error.message
    }
    this.setState({ errorMessage })
  }

  handleArrowClick = () => {
    const { featsRef } = this.props
    featsRef && this.scrollToComponent(featsRef, defaultScrollOptions)
  }

  calculateDownloads = (downloadsArr, options = { lastMonth: false }) => {
    const { lastMonth } = options
    const arrLength = downloadsArr.length
    let downloadsNumber = downloadsArr[arrLength - 1].count

    if (lastMonth) {
      downloadsArr.every((elem) => {
        if (this.compareDates(elem)) {
          downloadsNumber = elem.count
          return true
        }
        return false
      })
    }

    return downloadsNumber
  }

  compareDates = (object) => {
    const fromDate = new Date(object.from)
    const toDate = new Date(object.to)
    const fromYearNumber = fromDate.getFullYear()
    const toYearNumber = toDate.getFullYear()

    if (fromYearNumber === toYearNumber) {
      const fromMonthNumber = fromDate.getMonth()
      const toMonthNumber = toDate.getMonth()
      const monthsDiff = Math.abs(fromMonthNumber - toMonthNumber)
      return monthsDiff <= 1
    }

    return false
  }

  getDateFnsCurrentLocale = (locales) => {
    const currentLocale = this.props.intl.locale
    return locales[currentLocale]
  }
}

Hero.propTypes = {
  intl: PropTypes.object.isRequired,
  featsRef: PropTypes.object
}

export default injectIntl(Hero)
