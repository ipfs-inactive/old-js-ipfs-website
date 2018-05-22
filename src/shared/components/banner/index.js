import React from 'react';
import styles from './index.module.css';

const Banner = () => (
    <div className={ styles.container }>
        <div className={ styles.icon }>α</div>
        <div className={ styles.text }>
            Our app is in Alpha state. The codebase hasnt been audited by
            Security specialists and it shouldnt be used to store, share or publish sensitive information
        </div>
        <div className={ styles.closeButton }>
            x
        </div>
    </div>
);

export default Banner;
