import React from 'react';
import './TaskCard.scss';

export default function TaskCard (props) {
    return (
        <div className="taskcard">
            <div className="taskcard-header">

            </div>
            <div className="taskcard-content">
                {props.task.description}
            </div>
        </div>
    );
};