import React from 'react';

import Button from 'shared/components/button';
import cubePng from 'shared/media/images/cube.png';
import styles from './index.module.css';

const Hero = () => (
    <div className={ styles.container }>
        <div className={ styles.content }>
            <img src={ cubePng } />
            <h1>WELCOME MESSAGE</h1>
            <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. s eget urna mollis ornare vel eu leo.
                Maecenas sed diam eget risus varius blaecenas sed diam eget risus varius blandit sit amet non magna.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={ styles.infoContainer }>
                <span>Current version: 0.27.0</span>
                <span>Latest update: 11 hours ago</span>
                <span>Downloads last month: 396,020</span>
            </div>
            <div className={ styles.buttonContent }>
                <Button text="LEARN MORE" path="test" />
            </div>
        </div>
    </div>
);

export default Hero;
