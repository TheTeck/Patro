import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import CustomButton from '../../components/CustomButton/CustomButton';
import NewTaskModal from '../../components/NewTaskModal/NewTaskModal';

import './HomePage.scss';

export default function HomePage (props) {

    console.log(props.user);
    const [openNewTaskModal, setOpenNewTaskModal] = useState(false);

    function openModal () {
        setOpenNewTaskModal(true);
    };

    function closeModals () {
        setOpenNewTaskModal(false);
    };


    return (
        <div>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div className="homepage-container">
                <div className="homepage-central-container">
                    <CustomButton title="New Task" icon="add" action={openModal} />
                    <CustomButton title="Filter" icon="sort" />
                </div>
                <NewTaskModal user={props.user} open={openNewTaskModal} closeModals={closeModals} />
            </div>
        </div>
    )
}