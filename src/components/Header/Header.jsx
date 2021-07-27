import React from 'react';
import './Header.scss';

const menuOptions = [
    "Completed Tasks",
    "Connections"
]

export default function Header (props) {

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

            <div className="person-icon-text-container">
                <div className="material-icons md-48">person</div>
                <div className="person-action-text">Log Out</div>
            </div>
        </div>
    )
};