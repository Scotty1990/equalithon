import React from 'react';
import SearchJobsForm from './SearchJobsForm';

function GDHeader() {
    return (
        <div>
            <h1 id='header-title-gd' className='header-text'>Global Deeds</h1>
            <p id='your-global-search-provider' className='header-text'>Your global opportunity search provider</p>
            <p id='find-education-employment-resources' className='header-text'>Find reliable educational, employment and emergency resources here and rise to THE TOP!</p>
            <SearchJobsForm 
                textBoxId={`search-text-div`}
                dropdownId={'dropdown-div'}
                findButtonId={'find-btn'}
            />
        </div>
    );
}

export default GDHeader;