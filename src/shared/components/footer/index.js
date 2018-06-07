import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import ProtocolIcon from '-!svg-react-loader!shared/media/images/pl-logo.svg';
import styles from './index.module.css';

const Footer = ({ className }) => (
    <footer className={ classNames(styles.footer, className) }>
        <div className={ styles.container }>
            <div className={ styles.leftContent }>© Protocol Labs | Except as noted, content licensed CC-BY 3.0</div>
            <div className={ styles.rightContent }>
                <div className={ styles.text }>IPFS.JS was started and is sponsored by</div>
                <ProtocolIcon />
            </div>
        </div>
    </footer>
);

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
