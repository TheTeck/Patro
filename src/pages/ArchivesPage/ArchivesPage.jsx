import React from 'react';
import './ArchivesPage.scss';

import Header from '../../components/Header/Header';

export default function ArchivesPage (props) {
    return (
        <>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div>Archives Page</div>
        </>
    )
}