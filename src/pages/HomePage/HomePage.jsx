import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage (props) {

    const history = useHistory();

    function handleLogoutClick () {
        props.logoutHandler()
        history.push('/')
    }

    return (
        <>
            <div>Homepage mofo</div>
            <button onClick={handleLogoutClick}>Log Out</button>
        </>
    )
}