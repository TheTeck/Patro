import React, { useState } from 'react';

import ConnectionFeed from '../../components/ConnectionFeed/ConnectionFeed';
import SearchBar from '../../components/SearchBar/SearchBar';
import connectionService from '../../utils/connectionService';
import './ConnectionsPage.scss';

import Header from '../../components/Header/Header';

export default function ConnectionsPage (props) {

    const [connections, setConnections] = useState(props.user.connections);
    const [showConnections, setShowConnections] = useState(true);

    function showSearchResults(value) {
        // use value here to filter users
        setShowConnections(false);
    };

    return (
        <>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div className="connections-page-container">
                <div className="connections-page-central-container">
                    <SearchBar showSeachResults={showSearchResults} />
                    {
                        showConnections ? <ConnectionFeed connections={connections} />
                        : "These are the search results"
                    }
                </div>
            </div>
        </>
    )
}