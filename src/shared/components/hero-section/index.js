import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { toast } from 'react-toastify'
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
import CubeSvg from 'shared/media/images/cube.svg'
import styles from './index.module.css'

class Hero extends Component {
  state = {
    info: undefined,
    inView: true
  }

  componentDidMount () {
    axios.get('https://api.npms.io/v2/package/ipfs')
      .then(this.handleAxiosResponse)
      .catch(this.handleAxiosError)
  }

  render () {
    const { intl: { messages } } = this.props
    const { info, inView } = this.state
    const infoContainerClasses = classNames(styles.infoContainer, { [styles.show]: Boolean(info) })
    const wrapperContainerClasses = classNames(styles.wrapperContainer, { [styles.animationOff]: !inView })

    return (
      <Observer onChange={ this.handleObserverChange }>
        <div className={ wrapperContainerClasses }>
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
              <ReactMarkdown className={ styles.textDesc } source={ messages.hero.textDescription } />
              <div className={ infoContainerClasses }>
                { info && this.renderPkgInfo(info) }
              </div>
            </div>
          </div>
        </div>
      </Observer>
    )
  }

  renderPkgInfo = (info) => {
    const pkgInfoArr = Object.values(info)

    return <div>{ pkgInfoArr.map((infoElement, index) => <span key={ `pkgInfo-${index}` }>{ infoElement }</span>) }</div>
  }

  handleObserverChange = ({ isIntersecting }) => this.setState({ inView: isIntersecting })

  handleAxiosResponse = (response) => {
    const data = response.data.collected
    const { intl } = this.props
    const { messages } = intl

    const currentVersion = data.metadata.version
    const currentVersionStr = intl.formatMessage({ id: '_dummy', defaultMessage: messages.hero.currentVersion }, { version: currentVersion })

    const dateFnsLocale = this.getDateFnsCurrentLocale(locales)
    const isDateFnsLocaleFound = Boolean(dateFnsLocale)
    const dateFnsLocaleObject = isDateFnsLocaleFound ? { locale: dateFnsLocale } : {}
    const latestUpdateDate = new Date(data.metadata.date)
    const latestUpdateWords = distanceInWordsToNow(latestUpdateDate, dateFnsLocaleObject)
    const latestUpdateDateStr = intl.formatMessage({ id: '_dummy', defaultMessage: messages.hero.latestUpdate }, { date: latestUpdateWords })

    const downloads = this.calculateDownloads(data.npm.downloads, { lastMonth: true })
    const formattedDownloads = downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const downloadsStr = intl.formatMessage({ id: '_dummy', defaultMessage: messages.hero.downloadsLastMonth }, { count: formattedDownloads })

    const info = {
      currentVersionStr,
      latestUpdateDateStr,
      downloadsStr
    }

    this.setState({ info })
  }

  handleAxiosError = (error) => {
    console.error(error)

    const { messages } = this.props.intl

    toast.error(messages.hero.errorPckMessage)
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
