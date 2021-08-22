import React, { useState } from 'react';

import ConnectionFeed from '../../components/ConnectionFeed/ConnectionFeed';
import SearchBar from '../../components/SearchBar/SearchBar';
import userService from '../../utils/userService';
import connectionService from '../../utils/connectionService';
import './ConnectionsPage.scss';

import Header from '../../components/Header/Header';

export default function ConnectionsPage (props) {

    const [connections, setConnections] = useState(props.user.connections);
    const [showConnections, setShowConnections] = useState(true);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function showSearchResults(value) {
        try {
            const allUsers = await userService.getAll();
            const filteredByValue = allUsers.users.filter(user => {
                return user.username.toLowerCase().match(value.toLowerCase()) 
                    || user.fullname.toLowerCase().match(value.toLowerCase());
            });
            setFilteredUsers(filteredByValue)
        } catch (error) {
            console.log(error);
        }
        setShowConnections(false);
    };

    return (
        <>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div className="connections-page-container">
                <div className="connections-page-central-container">
                    <SearchBar showSeachResults={showSearchResults} />
                    {
                        showConnections ? <ConnectionFeed users={connections} isSearch={false} />
                        : <ConnectionFeed users={filteredUsers} isSearch={true} />
                    }
                </div>
            </div>
        </>
    )
}