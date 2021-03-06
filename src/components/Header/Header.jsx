import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';

export default function Header (props) {

    const [dropdownActive, setDropdownActive] = useState(false);
    const history = useHistory();

    function handleLogoutClick () {
        props.logoutHandler();
        history.push('/');
    }

    function handleLoginClick () {
        history.push('/login')
    }

    function handleHamburgerClick () {
        setDropdownActive(prevState => !prevState);
    }

    function handleOptionClick (e) {
        handleHamburgerClick();
        history.push(`/${e.target.innerHTML.toLowerCase().replace(' ', '')}`);
    }

    let dropdown = `menu-dropdown-options-container ${dropdownActive ? "dropdown-active" : "dropdown-inactive"}`;

    return (
        <div className="header-container">
            <div className="header-main-content-container">
                {
                    props.menuOptions ?
                    <div onClick={handleHamburgerClick} className="hamburger">
                        <div className="material-icons md-48">menu</div>
                    </div> : ''
                }

                <div className="app-title">Patro</div>

                {
                    props.menuOptions ? 
                        <div className="menu-options-container">
                            {
                                props.menuOptions.map((option, index) => {
                                    return (
                                        <div onClick={handleOptionClick} key={index} className="menu-option">
                                            {option}
                                        </div>
                                    )
                                })
                            }
                        </div> : <div className="menu-options-container"></div>
                }

                <div onClick={props.menuOptions ? handleLogoutClick : handleLoginClick} className="person-icon-text-container">
                    <div className="material-icons md-48">person</div>
                    <div className="person-action-text">
                        {
                            props.menuOptions ? "Log Out" : "Log In" 
                        }
                    </div>
                </div>
            </div>
            {
                props.menuOptions ?
                    <div className={dropdown}>
                        {
                            props.menuOptions.map((option, index) => {
                                return (
                                    <div onClick={handleOptionClick} key={index} className="dropdown-menu-option">
                                        {option}
                                    </div>
                                )
                            })
                        }
                        <div onClick={handleHamburgerClick} className="dropdown-menu-option">Close</div>
                    </div> : ''
            }
        </div>
    )
};