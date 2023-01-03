import React from 'react';
import FilterSearch from './FilterSearch';
import NavBar from './NavBar';
import SearchJobsForm from './SearchJobsForm';

function GDPortalPosts() {
    return (
        <div>
            <NavBar />
            <div id="breadcrumbs-div">
                <select name="plan" id="breadcrumbs-my-gd-portal-dropdown" className='breadcrumbs-dropdowns'>
                    <option value="all-categories"><p className='breadcrumb'>My GD Portal</p></option>
                    <option value="starter">Cat 1 </option>
                    <option value="professional">Cat 2</option>
                    <option value="corporate">Cat 3</option>
                </select>
                <select name="plan" id="breadcrumbs-earn-money-dropdown" className='breadcrumbs-dropdowns'>
                    <option value="all-categories"><p>Earn Money</p></option>
                    <option value="starter">Cat 1 </option>
                    <option value="professional">Cat 2</option>
                    <option value="corporate">Cat 3</option>
                </select>
                <select name="plan" id="breadcrumbs-jobs-dropdown" className='breadcrumbs-dropdowns'>
                    <option value="all-categories"><p className='breadcrumb'>Jobs</p></option>
                    <option value="starter">Cat 1 </option>
                    <option value="professional">Cat 2</option>
                    <option value="corporate">Cat 3</option>
                </select>
            </div>
            <SearchJobsForm 
                textBoxId={`search-text-div-portal-posts`}
                dropdownId={'dropdown-div-portal-posts'}
                findButtonId={'find-btn-portal-posts'}
            />
            <FilterSearch />
        </div>
    );
}

export default GDPortalPosts;