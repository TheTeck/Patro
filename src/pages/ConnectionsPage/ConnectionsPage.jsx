import React, { useState, useEffect, useContext } from 'react';

import ConnectionFeed from '../../components/ConnectionFeed/ConnectionFeed';
import SearchBar from '../../components/SearchBar/SearchBar';
import userService from '../../utils/userService';
import inviteService from '../../utils/inviteService';
import connectionService from '../../utils/connectionService';
import { UserContext } from '../../UserContext';
import './ConnectionsPage.scss';

import Header from '../../components/Header/Header';

export default function ConnectionsPage (props) {

    const user = useContext(UserContext);

    const [connections, setConnections] = useState(user.connections);
    const [invites, setInvites] = useState(user.invitesFrom);
    const [showConnections, setShowConnections] = useState(true);
    const [allUsers, setAllUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [ifInvites, setIfInvites] = useState(!!user.invitesFrom.length);
    const [showInvites, setShowInvites] = useState(false);

    function showSearchResults(value) {
        if (!value) {
            setShowConnections(true);
            setShowInvites(false);
        } else {
            const filteredByValue = allUsers.filter(filteredUser => {
                return filteredUser._id !== user._id && 
                    (filteredUser.username.toLowerCase().match(value.toLowerCase()) 
                    || filteredUser.fullname.toLowerCase().match(value.toLowerCase()));
            });

            setFilteredUsers(filteredByValue)
            setShowConnections(false);
            setShowInvites(false);
        }   
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
            inviteService.create(user._id, { invited: userId });
            getAndSetTheUsers();
        } catch (error) {
            console.log(error);
        }
    };

    async function handleAcceptInvite (inviteId) {
        try {
            const inviteList = await inviteService.deleteInvite(user._id, inviteId);
            setInvites(inviteList.data);
            setIfInvites(!!inviteList.data);
            // Add each user to each other's connection list
        } catch (error) {
            console.log(error);
        }
    };

    function handleShowInvites () {
        const inviters = allUsers.filter(filteredUser => {
            return user.invitesFrom.includes(filteredUser._id);
        });
        setInvites(inviters);
        setShowInvites(true);
        setShowConnections(false);
    }

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
                        ifInvites && !showInvites ? <div className="invite-notification">*Connections Pending
                            <button onClick={handleShowInvites}>View</button></div> : <></>
                    }
                    {
                        showConnections ? <ConnectionFeed filteredUsers={connections} mode="connections" />
                        : showInvites ? <>
                            <div className="accept-text">Accept Connection Invite?</div>
                            <ConnectionFeed filteredUsers={invites} mode="invites" handleAcceptInvite={handleAcceptInvite} />
                        </>
                        : <ConnectionFeed filteredUsers={filteredUsers} mode="search" handleAddInvite={handleAddInvite} />
                    }
                </div>
            </div>
        </>
    )
}