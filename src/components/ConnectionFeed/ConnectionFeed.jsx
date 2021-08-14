import React from 'react';

import './ConnectionFeed.scss';

export default function ConnectionFeed (props) {
    return (
        <div className="connection-feed-container">
            {
                props.connections.length === 0 ? "No Connections Yet" :
                (
                    props.connections.map(connection => {
                        return (
                            <>{connection}</>
                        )
                    })
                )
            }
        </div>
    )
}