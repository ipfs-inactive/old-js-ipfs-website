import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'shared/components/link';

const Home = () => (
    <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great <FormattedMessage id="foo" />.</p>
        <Link to="/page-2/">Go to page 2</Link>
    </div>
);

export default Home;
