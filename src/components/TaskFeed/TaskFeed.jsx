import React from 'react';
import './TaskFeed.scss';

export default function TaskFeed (props) {
    console.log(props.tasks)
    return (
        <div style={{ border: '2px solid red' }}>
            {
                props.tasks.map(task => {
                    return <div key={task._id}>{task.description}</div>
                })
            }
        </div>
    );
};