import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';

import userService from '../../utils/userService';
import './TaskCard.scss';

export default function TaskCard (props) {

    const [creator, setCreator] = useState("Unknown");

    const priorityClassString = `priority-marking priority-${props.task.priority}`;

    async function getUsername() {
        try {
            const taskCreator = userService.getOne(props.task.creator);
            setCreator(taskCreator);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (props.task.creator === props.user._id) {
            setCreator("me");
        } else {
            getUsername();
        }
    }, []);

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