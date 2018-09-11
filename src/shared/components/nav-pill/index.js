import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './index.module.css'

class NavPill extends PureComponent {
  render() {
    const { index, title, active, onPillClick } = this.props;
    const pillClasses = classNames(styles.pill, {
      [styles.active]: active
    })

    const handleOnClick = () => {
      onPillClick(index)
    }

    return (
      <div className={ pillClasses } onClick={ handleOnClick }>
        <span>{ title }</span>
      </div>
    )
  }
}

NavPill.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default NavPill
