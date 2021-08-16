import React from 'react';

import './SearchBar.scss';

export default function SearchBar (props) {
    return (
        <div className="searchbar-container">
            <div className="material-icons md-36">search</div>
            <input className="searchbar-input" placeholder="Search" />
        </div>
    );
};