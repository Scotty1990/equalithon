import React from 'react';

function FilterSearch(props) {
    return (
        <div id="filter-search">
            <p id="filter-search-title">Filter Search</p>
            <div id="filter-search-line"></div>
            <label id="checkbox-companies-label" className='filter-search-checkbox-categories'>
                <input type="checkbox" />
                <p id="filter-search-companies" className='filter-search-checkbox-text'>Companies</p>
            </label>
            <label id="checkbox-nonprofits-label" className='filter-search-checkbox-categories'>
                <input type="checkbox" />
                <p id="filter-search-nonprofits" className='filter-search-checkbox-text'>Nonprofits</p>
            </label>
            <div id="filter-search-sort-type-container" className='filter-search-parameter-containers'>
                <p id="filter-search-sort-type" className='filter-parameters-texts'>Sort Type</p>
            </div>
        </div>
    );
}

export default FilterSearch;