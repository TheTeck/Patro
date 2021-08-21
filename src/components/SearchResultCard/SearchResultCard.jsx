import React from 'react';

import './SearchResultCard.scss';

export default function SearchResultCard (props) {
    console.log("in the searchresultcard component")
    return (
        <div className="search-result-card-container">
            <img className="user-image" src={props.user.photoUrl} />
            <div className="user-text-wrapper">
                <div className="user-text-username">{props.user.username}</div>
                <div className="user-text-fullname">{props.user.fullname}</div>
            </div>
        </div>
    )
};