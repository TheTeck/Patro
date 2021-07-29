import React from 'react';

import Header from '../../components/Header/Header';

export default function HomePage (props) {

    return (
        <>
            <Header user={!!props.user} logoutHandler={props.logoutHandler} />
        </>
    )
}