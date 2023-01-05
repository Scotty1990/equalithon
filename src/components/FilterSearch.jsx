import React from 'react';
import '../css/FilterSearch.css';

function FilterSearch(props) {
    function expand() {
        this.css("overflow", "visible")
        this.css("display", "visible")
    }
    return (
        <div id="filter-search">
            <p id="filter-search-title">Filter Search</p>
            <div id="filter-search-line"></div>
            <label className='filter-search-checkbox-categories'>
                <input id="checkbox-companies" type="checkbox" />
                <p id="filter-search-companies" className='filter-search-checkbox-text'>Companies</p>
            </label>
            <label id="checkbox-nonprofits-label" className='filter-search-checkbox-categories'>
                <input type="checkbox" />
                <p id="filter-search-nonprofits" className='filter-search-checkbox-text'>Nonprofits</p>
            </label>
            <div id="filter-search-sort-type-container" className='filter-search-parameter-containers'>
                <button type="button" id="filter-search-sort-type" className='collapsible' onClick={expand}>Sort Type</button>
                <div className='content'>
                    <label className='filter-search-checkbox-sort-type-categories'>
                        <input id="checkbox-sort-type-relevant" type="checkbox" />
                        <p id="sort-type-relevant">Relevant</p>
                    </label>
                    <label className='filter-search-checkbox-sort-type-categories'>
                        <input id="checkbox-sort-type-newest" type="checkbox" />
                        <p id="sort-type-newest">Newest</p>
                    </label>
                    <label className='filter-search-checkbox-sort-type-categories'>
                        <input id="checkbox-sort-type-oldest" type="checkbox" />
                        <p id="sort-type-oldest">Oldest</p>
                    </label>
                </div>
            </div>
            <div id="job-type-dropdown">
                <p id="job-type">Job Type</p>
            </div>
            <label className='filter-search-checkbox-job-type-categories'>
                <input id="checkbox-job-type-volunteer" type="checkbox" />
                <p id="job-type-volunteer">Volunteer</p>
            </label>
            <label className='filter-search-checkbox-job-type-categories'>
                <input id="checkbox-job-type-internship" type="checkbox" />
                <p id="job-type-internship">Internship</p>
            </label>
            <label className='filter-search-checkbox-job-type-categories'>
                <input id="checkbox-job-type-temporary" type="checkbox" />
                <p id="job-type-temporary">Temporary</p>
            </label>
            <label className='filter-search-checkbox-job-type-categories'>
                <input id="checkbox-job-type-contract" type="checkbox" />
                <p id="job-type-contract">Contract</p>
            </label>
            <label className='filter-search-checkbox-job-type-categories'>
                <input id="checkbox-job-type-part-time" type="checkbox" />
                <p id="job-type-part-time">Part-time</p>
            </label>
            <label className='filter-search-checkbox-job-type-categories'>
                <input id="checkbox-job-type-full-time" type="checkbox" />
                <p id="job-type-full-time">Full-time</p>
            </label>
            <p id="on-site-remote">On-site/Remote</p>
            <label className='filter-search-checkbox-on-site'>
                <input id="checkbox-on-site" type="checkbox" />
                <p id="on-site">On-site</p>
            </label>
            <label className='filter-search-checkbox-remote'>
                <input id="checkbox-remote" type="checkbox" />
                <p id="remote">Remote</p>
            </label>
            <label className='filter-search-checkbox-hybrid'>
                <input id="checkbox-hybrid" type="checkbox" />
                <p id="hybrid">Hybrid</p>
            </label>
            <input id="city-state-text-box" type="text" placeholder="City/State" />
            <a href="https://www.google.com/maps" id="google-maps-link">Use Google Maps</a>
            <button id="reset-btn"><p id="reset-text">Reset</p></button>
            <button id="update-btn"><p id="update-text">Update Search</p></button>
        </div>
    );
}

export default FilterSearch;