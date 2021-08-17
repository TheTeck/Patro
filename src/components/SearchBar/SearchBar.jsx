import React, { useState } from 'react';

import './SearchBar.scss';

export default function SearchBar (props) {

    const [value, setValue] = useState('');

    function handleUserFilter (e) {
        props.showSeachResults(value);
    };

    function handleSearchInput (e) {
        setValue(e.target.value);
    };

    return (
        <div className="searchbar-container">
            <div className="material-icons md-36">search</div>
            <input onChange={handleSearchInput} className="searchbar-input" placeholder="Search" />
            <button onClick={handleUserFilter} className="searchbar-btn">Go</button>
        </div>
    );
};