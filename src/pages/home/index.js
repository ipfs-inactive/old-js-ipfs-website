import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'shared/components/link';

import { register, unregister } from 'shared/service-worker/register';

class Home extends Component {
    componentDidMount() {
        // Force a clean state of the service worker, as user must interact for enabling it
        unregister();
    }

    render() {
        return (
            <div>
                <h1>Hi people</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great <FormattedMessage id="foo" />.</p>
                <Link to="/page-2/">Go to page 2</Link>
                <button onClick={ this.handleServiceWorkerClick }>
                    <FormattedMessage id="service-worker" />
                </button>
            </div>
        );
    }

    handleServiceWorkerClick() {
        register();
    }
}

export default Home;
