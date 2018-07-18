import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import axios from 'axios'
import classNames from 'classnames'
import { distanceInWordsToNow } from 'date-fns'
import locales from 'utils/dateFnsLocales'

import OutsideRingSvg from 'shared/media/backgrounds/outsidering.svg'
import MiddleRingSvg from 'shared/media/backgrounds/middlering.svg'
import InsideRingSvg from 'shared/media/backgrounds/insidering.svg'
import Button from 'shared/components/button'
import cubePng from 'shared/media/images/cube.png'
import styles from './index.module.css'

class Hero extends Component {
  constructor (props) {
    super(props)

    this.state = {
      info: undefined,
      errorMessage: undefined
    }

    const { messages } = this.props.intl
    this.messages = messages
  }

  componentDidMount () {
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
    const { info, errorMessage } = this.state
    const isDataLoaded = Boolean(info)
    const existsError = Boolean(errorMessage)
    const infoContainerClasses = classNames(styles.infoContainer, {
      [styles.hidden]: !isDataLoaded && !existsError,
      [styles.error]: !isDataLoaded && existsError
    })
    const messages = this.messages

    return (
      <div className={ styles.container }>
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
          <img src={ cubePng } />
          <h1>{ messages.hero.welcomeMessage }</h1>
          <p>{ messages.hero.textDescription }</p>
          <div className={ infoContainerClasses }>
            { isDataLoaded && !existsError ? this.renderPkgInfo(info, isDataLoaded) : this.renderErrorMessage(errorMessage) }
          </div>
          <div className={ styles.buttonContent }>
            <Button translationId="buttonLearnMore" path="/test" />
          </div>
        </div>
      </div>
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
  intl: PropTypes.object.isRequired
}

export default injectIntl(Hero)
