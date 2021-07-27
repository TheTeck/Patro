import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
export default function HomePage (props) {

    const history = useHistory();

    function handleLogoutClick () {
        props.logoutHandler()
        history.push('/')
    }

    return (
        <>
            <Header />
            <button onClick={handleLogoutClick}>Log Out</button>
        </>
    )
}