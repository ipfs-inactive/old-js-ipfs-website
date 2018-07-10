import React, { Component } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import axios from 'axios'
import classNames from 'classnames'
import { distanceInWordsToNow } from 'date-fns'
import locales from 'utils/dateFnsLocales'

import OrbitsSvg from 'shared/media/backgrounds/orbits.svg'
import Button from 'shared/components/button'
import cubePng from 'shared/media/images/cube.png'
import styles from './index.module.css'

class Hero extends Component {
  constructor () {
    super()

    this.state = {
      info: undefined,
      errorMessage: undefined
    }
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

    return (
      <div className={ styles.container }>
        <div className={ styles.orbitContainer } >
          <div className={ styles.orbits }> <OrbitsSvg /> </div>
        </div>
        <div className={ styles.content }>
          <img src={ cubePng } />
          <FormattedMessage tagName="h1" id="heroWelcomeMessage" />
          <FormattedMessage tagName="p" id="heroTextDescription" />
          <div className={ infoContainerClasses }>
            { isDataLoaded && !existsError ? this.renderPkgInfo(info, isDataLoaded) : this.renderErrorMessage(errorMessage) }
          </div>
          <div className={ styles.buttonContent }>
            <Button translationId="buttonLearnMore" path="test" />
          </div>
        </div>
      </div>
    )
  }

  renderPkgInfo = (info, isDataLoaded) => {
    const pkgInfoArr = Object.values(info)

    return <div>{ pkgInfoArr.map((infoElement, key) => <span key={`pkgInfo-${key}`}>{ isDataLoaded ? infoElement : '' }</span>) }</div>
  }

  renderErrorMessage = (errorMessage) => (
    <div>
      <span>{ errorMessage }</span>
    </div>
  )

  handleAxiosResponse = (data) => {
    const { messages } = this.props.intl

    const currentVersion = data.metadata.version
    const currentVersionStr = `${messages.heroCurrentVersion} ${currentVersion}`

    const dateFnsLocale = this.getDateFnsCurrentLocale(locales)
    const isDateFnsLocaleFound = Boolean(dateFnsLocale)
    const dateFnsLocaleObject = isDateFnsLocaleFound ? { locale: dateFnsLocale } : {}
    const latestUpdateDate = new Date(data.metadata.date)
    const latestUpdateWords = distanceInWordsToNow(latestUpdateDate, dateFnsLocaleObject)
    const latestUpdateDateStr = `${messages.heroLatestUpdate} ${latestUpdateWords}`

    const downloads = this.calculateDownloads(data.npm.downloads, { lastMonth: true })
    const formattedDownloads = downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const downloadsStr = `${messages.heroDownloadsLastMonth} ${formattedDownloads}`

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
