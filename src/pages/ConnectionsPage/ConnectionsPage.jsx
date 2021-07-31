import React from 'react';
import './ConnectionsPage.scss';

import Header from '../../components/Header/Header';

export default function ConnectionsPage (props) {
    return (
        <>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div>Connections Page</div>
        </>
    )
}