import React, { useState, useEffect, useContext } from 'react';

import Checkbox from '../Checkbox/Checkbox';
import userService from '../../utils/userService';
import { UserContext } from '../../UserContext';
import './TaskCard.scss';

export default function TaskCard (props) {

    const [creator, setCreator] = useState("Unknown");
    const user = useContext(UserContext);

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
        if (props.task.creator === user._id) {
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
            <Checkbox completed={props.task.complete} />
        </div>
    );
};