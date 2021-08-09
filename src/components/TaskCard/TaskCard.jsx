import React, { useState } from 'react';
import './TaskCard.scss';

export default function TaskCard (props) {

    const [creator, setCreator] = useState("Anon");

    const priorityClassString = `priority-marking priority-${props.task.priority}`;

    return (
        <div className="task-container">
            <div className="taskcard">
                <div className="taskcard-header">
                    <div className={priorityClassString}> </div>
                    <div className="task-creator">Created by {creator}</div>
                </div>
                <div className="taskcard-content">
                    {props.task.description}
                </div>
            </div>
        </div>
    );
};