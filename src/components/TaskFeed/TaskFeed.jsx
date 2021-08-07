import React from 'react';
import './TaskFeed.scss';

export default function TaskFeed (props) {
    console.log(props.tasks)
    return (
        <div className="taskfeed-container">
            {
                props.tasks.map(task => {
                    return <div key={task._id}>{task.description}</div>
                })
            }
        </div>
    );
};