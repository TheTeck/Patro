import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import CustomButton from '../../components/CustomButton/CustomButton';
import ModalBase from '../../components/ModalBase/ModalBase';

import './HomePage.scss';

export default function HomePage (props) {

    const [openNewTaskModal, setOpenNewTaskModal] = useState(false);

    function openModal () {
        console.log('clicked')
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
                <ModalBase open={openNewTaskModal} closeModals={closeModals}>Inner content</ModalBase>
            </div>
        </div>
    )
}