import React from 'react';

import './InviteCard.scss';

export default function InviteCard (props) {

    function handleAcceptClick () {
        props.handleAcceptInvite(props.filteredUser._id);
    }

    return (
        <div className="invite-card-container">
            <img className="user-image" src={props.filteredUser.photoUrl} />
            <div className="user-text-wrapper">
                <div className="user-text-username">{props.filteredUser.username}</div>
                <div className="user-text-fullname">{props.filteredUser.fullname}</div>
            </div>
            <button className="invite-btn user-invite-button" onClick={handleAcceptClick}>Accept</button>
        </div>
    )
};