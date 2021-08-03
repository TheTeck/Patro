import React from 'react';

import Header from '../../components/Header/Header';
import CustomButton from '../../components/CustomButton/CustomButton';

import './HomePage.scss';

export default function HomePage (props) {

    return (
        <div>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div className="homepage-container">
                <div className="homepage-central-container">
                    <CustomButton title="New Task" icon="add" />
                    <CustomButton title="Filter" icon="sort" />
                </div>
            </div>
        </div>
    )
}