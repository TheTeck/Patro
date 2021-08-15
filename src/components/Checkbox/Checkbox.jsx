import React, { useState } from 'react';

import './Checkbox.scss';

export default function Checkbox (props) {
    
    const [completed, setCompleted] = useState(props.completed);

    function toggleCompletion () {
        setCompleted(prev => !prev);
    };

    return (
        <div className="checkbox" onClick={toggleCompletion}>
            { completed ?
                <div className="material-icons md-48 check">checkbox</div> :
                <div className="material-icons md-48 uncheck">checkbox</div>
            }
        </div>
    );
};