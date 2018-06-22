import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from 'shared/components/button';
import styles from './index.module.css';

const Community = () => (
    <div className={ styles.container }>
        <div className={ styles.content }>
            <FormattedMessage tagName="h1" id="communityTitle" />
            <span className={ styles.sectionDescription }>
                <FormattedMessage tagName="p" id="communityDesc" />
            </span>
            <div className={ styles.socialLinksContainer }>
                <p>Join Us!</p>
                <div className={ styles.socialLinks }>
                    <Button translationId="buttonLearnMore" path="test" />
                    <Button translationId="buttonLearnMore" path="test" modifier="github" />
                    <Button translationId="buttonLearnMore" path="test" modifier="twitter" />
                </div>
            </div>
        </div>
    </div>
);

export default Community;
