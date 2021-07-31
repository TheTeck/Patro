import React from 'react';

import Header from '../../components/Header/Header';

const menuOptions = [
    "Completed Tasks",
    "Connections"
]

export default function HomePage (props) {

    return (
        <>
            <Header menuOptions={menuOptions} logoutHandler={props.logoutHandler} />
        </>
    )
}