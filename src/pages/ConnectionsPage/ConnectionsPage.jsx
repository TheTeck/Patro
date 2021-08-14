import React from 'react';

import ConnectionFeed from '../../components/ConnectionFeed/ConnectionFeed';
import connectionService from '../../utils/connectionService';
import './ConnectionsPage.scss';

import Header from '../../components/Header/Header';

export default function ConnectionsPage (props) {
    return (
        <>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div className="connections-page-container">
                <ConnectionFeed />
            </div>
        </>
    )
}