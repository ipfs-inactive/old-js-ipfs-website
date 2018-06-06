import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import HexSvg from 'shared/media/backgrounds/hexagons.svg';
import stepsArr from 'shared/data/getting-started';
import SyntaxHighlighter from 'shared/components/syntax-highlighter';
import Button from 'shared/components/button';
import styles from './index.module.css';

const GettingStarted = ({ intl }) => {
    const messages = intl.messages;

    const steps = stepsArr.map((step, index) =>
        (
            <div className={ styles.command } key={ index }>
                <p className={ styles.title }>{ messages[step.title] }</p>
                <p className={ styles.desc }>{ newLineToBreak(messages[step.desc]) }</p>
                <SyntaxHighlighter codeStr={ step.codeStr } />
                { step.note && <p className={ styles.note } >{ messages[step.note] }</p> }
            </div>
        )
    );

    return (
        <div className={ styles.container }>
            <div className={ styles.backgroundSvg }>
                <div className={ styles.hex1 }><HexSvg /></div>
                <div className={ styles.hex2 }><HexSvg /></div>
            </div>
            <div className={ styles.content }>
                <FormattedMessage tagName="h1" id="gettingStartedTitle" />
                <span className={ styles.sectionDescription }>
                    <FormattedMessage tagName="p" id="gettingStartedSectionDesc" />
                </span>
                <div className={ styles.panel } >
                    { steps }
                </div>
                <Button text="LEARN MORE" path="test" />
            </div>
        </div>
    );
};

function newLineToBreak(str) {
    return str.split('\n').map((text, index) => <span key={ index }>{ text }<br /></span>);
}

GettingStarted.propTypes = {
    intl: PropTypes.object.isRequired,
};

export default injectIntl(GettingStarted);
