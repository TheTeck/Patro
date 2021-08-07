import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import CustomButton from '../../components/CustomButton/CustomButton';
import NewTaskModal from '../../components/NewTaskModal/NewTaskModal';
import TaskFeed from '../../components/TaskFeed/TaskFeed';
import taskService from '../../utils/taskService';

import './HomePage.scss';

export default function HomePage (props) {

    const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
    const [tasks, setTasks] = useState([]);

    function openModal () {
        setOpenNewTaskModal(true);
    };

    function closeModals () {
        setOpenNewTaskModal(false);
        getTasksForUser();
    };

    async function getTasksForUser () {
        try {
            const userTasks = await taskService.getAllForUser(props.user._id);
            setTasks(userTasks.tasks);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTasksForUser();
    }, []);

    return (
        <div>
            <Header menuOptions={props.menuOptions} logoutHandler={props.logoutHandler} />
            <div className="homepage-container">
                <div className="homepage-central-container">
                    <CustomButton title="New Task" icon="add" action={openModal} />
                    <CustomButton title="Filter" icon="sort" />
                    <TaskFeed tasks={tasks} />
                </div>
                <NewTaskModal user={props.user} open={openNewTaskModal} closeModals={closeModals} />
            </div>
        </div>
    )
}