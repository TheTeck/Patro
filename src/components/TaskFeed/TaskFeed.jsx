import React from 'react';

import TaskCard from '../TaskCard/TaskCard';
import './TaskFeed.scss';

export default function TaskFeed (props) {
    console.log(props.tasks)
    return (
        <div className="taskfeed-container">
            {
                props.tasks.map(task => {
                    return <TaskCard key={task._id} task={task} user={props.user} />
                })
            }
        </div>
    );
};