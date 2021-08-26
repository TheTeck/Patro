import React, { useState } from 'react';

import './SearchResultCard.scss';

export default function SearchResultCard (props) {

    const [inInviteMode, setInInviteMode] = useState(false);

    function handleToggleInviteMode () {
        setInInviteMode(prev => !prev);
    };
    function handleAddNewConnection () {
        props.handleAddInvite(props.user._id);
    };

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
                    <img className="user-image" src={props.user.photoUrl} />
                    <div className="user-text-wrapper">
                        <div className="user-text-username">{props.user.username}</div>
                        <div className="user-text-fullname">{props.user.fullname}</div>
                    </div>
                    <button onClick={handleToggleInviteMode} className="invite-btn user-invite-button">Connect</button>
                </>
            }
        </div>
    )
};