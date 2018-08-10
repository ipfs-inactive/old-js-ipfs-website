import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.module.css'

// See: https://github.com/Karify/external-svg-sprite-loader

const SpriteSvg = ({ svg, ...rest }) => (
  <i { ...rest }>
    <svg viewBox={ svg.viewBox }>
      <use xlinkHref={ svg.symbol } />
    </svg>
  </i>
)

SpriteSvg.propTypes = {
  svg: PropTypes.object.isRequired
}

const InlineSvg = ({ svg, ...rest }) => (
  <i
    { ...rest }
    dangerouslySetInnerHTML={ { __html: svg } } />
)

InlineSvg.propTypes = {
  svg: PropTypes.string.isRequired
}

const ImageSvg = ({ ...rest }) => (
  <img alt="" { ...rest } />
)

const Svg = (props) => {
  const { svg, className, ...rest } = props
  const finalProps = {
    ...rest,
    className: classNames(styles.svg, className)
  }

  if (typeof svg !== 'string') {
    return <SpriteSvg { ...finalProps } svg={ svg } />
  }

  if (svg.indexOf('<') === 0) {
    return <InlineSvg { ...finalProps } svg={ svg } />
  }

  return <ImageSvg { ...finalProps } src={ svg } />
}

Svg.propTypes = {
  svg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string
}

export default Svg
