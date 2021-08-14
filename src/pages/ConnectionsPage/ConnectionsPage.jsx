import React, { useState } from 'react';

import ConnectionFeed from '../../components/ConnectionFeed/ConnectionFeed';
import connectionService from '../../utils/connectionService';
import './ConnectionsPage.scss';

import Header from '../../components/Header/Header';

export default function ConnectionsPage (props) {

    const [connections, setConnections] = useState(props.user.connections);

    return (
        <>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div className="connections-page-container">
                <div className="connections-page-central-container">
                    <ConnectionFeed connections={connections} />
                </div>
            </div>
        </>
    )
}