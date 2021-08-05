import React from 'react';
import './CustomButton.scss';

export default function CustomButton (props) {
    return (
        <button className="custom-button-container" onClick={props.action}>
            {props.title}
            {props.icon ? <div className="material-icons md-12">&nbsp;{props.icon}</div> : ''}
        </button>
    );
}