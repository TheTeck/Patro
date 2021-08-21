import React from 'react';

import ConnectionCard from '../ConnectionCard/ConnectionCard';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import './ConnectionFeed.scss';

export default function ConnectionFeed (props) {
    return (
        <div className="connection-feed-container">
            {
                props.users.length === 0 ? "No Connections Yet" :
                (
                    props.users.map(user => {
                        return (
                            <>
                                {
                                    props.isSearch ? <SearchResultCard key={user._id} user={user} />
                                    : <ConnectionCard key={user._id} connection={user} />
                                }
                            </>
                        )
                    })
                )
            }
        </div>
    )
};