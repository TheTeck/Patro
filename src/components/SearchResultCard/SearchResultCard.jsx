import React, { useState } from 'react';

import './SearchResultCard.scss';

export default function SearchResultCard (props) {

    const [inInviteMode, setInInviteMode] = useState(false);

    function handleToggleInviteMode () {
        setInInviteMode(prev => !prev);
    };
    function handleAddNewConnection () {
        handleToggleInviteMode();
        props.handleAddInvite(props.filteredUser._id);
    };

    console.log(props.user)

    return (
        <div className="search-result-card-container">
            {
                inInviteMode ? 
                <div className="confirm-invite-container">
                    <div className="confirm-invite-text">Connect with this user?</div>
                    <button onClick={handleAddNewConnection} className="invite-btn confirm-invite-button material-icons">check</button>
                    <button onClick={handleToggleInviteMode} className="invite-btn cancel-invite-button material-icons">cancel</button>
                </div> 
                :
                <>
                    <img className="user-image" src={props.filteredUser.photoUrl} />
                    <div className="user-text-wrapper">
                        <div className="user-text-username">{props.filteredUser.username}</div>
                        <div className="user-text-fullname">{props.filteredUser.fullname}</div>
                    </div>
                    {
                        props.filteredUser.invitesFrom.includes(props.user._id) ?
                        <button className="invite-btn user-already-invited-button">Pending</button>
                        : <button onClick={handleToggleInviteMode} className="invite-btn user-invite-button">Connect</button>
                    }
                </>
            }
        </div>
    )
};