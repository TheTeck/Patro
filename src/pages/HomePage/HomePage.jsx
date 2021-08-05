import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import CustomButton from '../../components/CustomButton/CustomButton';
import NewTaskModal from '../../components/NewTaskModal/NewTaskModal';
import taskService from '../../utils/taskService';

import './HomePage.scss';

export default function HomePage (props) {

    const [openNewTaskModal, setOpenNewTaskModal] = useState(false);

    function openModal () {
        setOpenNewTaskModal(true);
    };

    function closeModals () {
        setOpenNewTaskModal(false);
    };

    async function getTasksForUser () {
        try {
            const task = await taskService.getOne(props.user.tasks[1]);
            console.log(props.user.tasks)
        } catch (err) {
            console.log(err);
        }
    };

    getTasksForUser();

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