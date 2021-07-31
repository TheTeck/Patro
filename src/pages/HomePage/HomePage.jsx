import React from 'react';

import Header from '../../components/Header/Header';

export default function HomePage (props) {

    return (
        <>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div>Home Page</div>
        </>
    )
}