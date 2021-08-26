import React, { useState, useEffect } from 'react';

import ConnectionFeed from '../../components/ConnectionFeed/ConnectionFeed';
import SearchBar from '../../components/SearchBar/SearchBar';
import userService from '../../utils/userService';
import inviteService from '../../utils/inviteService';
import connectionService from '../../utils/connectionService';
import './ConnectionsPage.scss';

import Header from '../../components/Header/Header';

export default function ConnectionsPage (props) {

    const [connections, setConnections] = useState(props.user.connections);
    const [showConnections, setShowConnections] = useState(true);
    const [allUsers, setAllUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    function showSearchResults(value) {
        const filteredByValue = allUsers.filter(user => {
            return user._id !== props.user._id && 
                (user.username.toLowerCase().match(value.toLowerCase()) 
                || user.fullname.toLowerCase().match(value.toLowerCase()));
        });
        
        setFilteredUsers(filteredByValue)
        setShowConnections(false);
    };

    async function getAndSetTheUsers() {
        try {
            const users = await userService.getAll();
            setAllUsers(users.users);
        } catch (error) {
            console.log(error);
        }
    };

    async function handleAddInvite(userId) {
        try {
            inviteService.create(props.user._id, { invited: userId });
            getAndSetTheUsers();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAndSetTheUsers();
    }, []);

    return (
        <>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div className="connections-page-container">
                <div className="connections-page-central-container">
                    <SearchBar showSeachResults={showSearchResults} />
                    {
                        showConnections ? <ConnectionFeed filteredUsers={connections} isSearch={false} />
                        : <ConnectionFeed filteredUsers={filteredUsers} user={props.user} isSearch={true} handleAddInvite={handleAddInvite} />
                    }
                </div>
            </div>
        </>
    )
}