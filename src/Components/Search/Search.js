import React from 'react';
import './Search.scss';

export default function Search({ searchChange }) {
    const handleOnSearchChange = (searchData) => {
        searchChange(searchData.target.value)
    }
    return (
        <div className='search-box'>
            <input
                onChange={handleOnSearchChange}
                className="search"
                type="search"
                placeholder="Search category (for ex... HATS, SNEAKERS, JACKETS, WOMENS, MENS)"
            />
        </div>
    )
}
