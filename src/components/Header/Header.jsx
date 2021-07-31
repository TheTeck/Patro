import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';

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

            {
                props.menuOptions ? 
                    <div className="menu-options-container">
                        {
                            props.menuOptions.map((option, index) => {
                                return (
                                    <div key={index} className="menu-option">
                                        {option}
                                    </div>
                                )
                            })
                        }
                    </div> : <div className="menu-options-container"></div>
            }

            <div onClick={handleLogoutClick} className="person-icon-text-container">
                <div className="material-icons md-48">person</div>
                <div className="person-action-text">
                    {
                        props.menuOptions ? "Log Out" : "Log In / Sign Up" 
                    }
                </div>
            </div>
        </div>
    )
};