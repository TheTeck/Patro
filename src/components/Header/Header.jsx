import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';

const menuOptions = [
    "Completed Tasks",
    "Connections"
]

export default function Header (props) {

    const history = useHistory();

    function handleLogoutClick () {
        props.logoutHandler();
        history.push('/');
    }

    return (
        <div className="header-container">
            <div className="hamburger">
                <div className="material-icons md-48">menu</div>
            </div>

            <div className="app-title">Patro</div>

            <div className="menu-options-container">
                {
                    menuOptions.map((option, index) => {
                        return (
                            <div key={index} className="menu-option">
                                {option}
                            </div>
                        )
                    })
                }
            </div>

            <div onClick={handleLogoutClick} className="person-icon-text-container">
                <div className="material-icons md-48">person</div>
                <div className="person-action-text">
                    {
                        props.user ? "Log Out" : "Log In / Sign Up" 
                    }
                </div>
            </div>
        </div>
    )
};