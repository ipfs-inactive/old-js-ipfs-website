import React from 'react'
import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'

import Button from 'shared/components/button'
import styles from './index.module.css'

const ProjectItem = ({ icon, desc, link, image, index, iconRatio, containerMaxWidth }) => (
  <div className={ styles.container }>
    <div className={ styles.leftContainer }>
      <div className={ styles.topContainer }>
        { icon &&
          <div className={ styles.logoWrapper } style={ { maxWidth: containerMaxWidth } }>
            <div className={ styles.logoContainer } style={ { paddingBottom: iconRatio } }>
              <div className={ styles.logo }>{ icon }</div>
            </div>
          </div>
        }
        <ReactMarkdown className={ styles.desc } source={ desc } />
      </div>
      <div className={ styles.bottomContainer }>
        <Button translationId="buttonLearnMore" href={ link } />
      </div>
    </div>
    <div className={ styles.rightContainer }>
      <div className={ styles.imageWrapper }>
        <img src={ image } alt="" />
      </div>
    </div>
  </div>
)

ProjectItem.propTypes = {
  icon: PropTypes.element,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  iconRatio: PropTypes.string.isRequired,
  containerMaxWidth: PropTypes.string
}

export default ProjectItem
