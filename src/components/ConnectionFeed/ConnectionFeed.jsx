import React from 'react';

import ConnectionCard from '../ConnectionCard/ConnectionCard';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import './ConnectionFeed.scss';

export default function ConnectionFeed (props) {
    return (
        <div className="connection-feed-container">
            {
                props.filteredUsers.length === 0 ? "No matches found." :
                (
                    props.filteredUsers.map(filteredUser => {
                        return (
                            <>
                                {
                                    props.mode === "search" ? <SearchResultCard key={filteredUser._id} filteredUser={filteredUser} user={props.user} handleAddInvite={props.handleAddInvite} />
                                    : props.mode === "connections" ? <ConnectionCard key={filteredUser._id} connection={filteredUser} />
                                    : <div>{filteredUser}</div>
                                }
                            </>
                        )
                    })
                )
            }
        </div>
    )
};