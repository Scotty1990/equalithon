import React, { useState } from 'react';
import IconMenu from './IconMenu';
import Dropdown from 'react-bootstrap/Dropdown'
import { SplitButton } from 'react-bootstrap';

function StudentsIndividualsCards(props) {
    const [showIconMenu, setShowIconMenu] = useState(false)

    function studentsIndividualsIconMenu() {
        setShowIconMenu(true)
        console.log("here")
    }
    return (
        <div>
            <div id='students-individuals-div'>
                <p id='students-individuals-text'>Students / Individuals</p>
            </div>
            <div id='students-individuals-icon' onClick={studentsIndividualsIconMenu}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-icons">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="feather feather-more-horizontal"
                        id="top-more-icon"
                    ><circle 
                        cx="12" 
                        cy="12" 
                        r="1"
                    /><circle 
                        cx="19" 
                        cy="12" 
                        r="1"
                    /><circle 
                        cx="5" 
                        cy="12" 
                        r="1"
                        /></svg>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="feather feather-more-horizontal"
                        id="middle-more-icon"
                    ><circle 
                        cx="12" 
                        cy="12" 
                        r="1"
                    /><circle 
                        cx="19" 
                        cy="12" 
                        r="1"
                    /><circle 
                        cx="5" 
                        cy="12" 
                        r="1"
                        /></svg>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="feather feather-more-horizontal"
                        id="bottom-more-icon"
                    ><circle 
                        cx="12" 
                        cy="12" 
                        r="1"
                    /><circle 
                        cx="19" 
                        cy="12" 
                        r="1"
                    /><circle 
                        cx="5" 
                        cy="12" 
                        r="1"
                        /></svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>                                                                                                          
                        <Dropdown.Item href="#/view-profile" className="icon-menu-dropdowns">
                            <p>View Profile</p>
                            {/* <p id="view-profile-text" className='icon-menu-texts'>View Profile</p> */}
                        </Dropdown.Item>
                        <div id="view-profile-line" className='icon-menu-lines'></div>
                        <Dropdown.Item href="#/scholarships" className="icon-menu-dropdowns">
                            <p>Scholarships</p>
                            {/* <p id="scholarships-text" className='icon-menu-texts'>Scholarships</p> */}
                        </Dropdown.Item>
                        <div id="a" className='icon-menu-lines'></div>
                        <Dropdown.Item href="#/shelters" className="icon-menu-dropdowns">
                            <p>Shelters</p>
                            {/* <p id="shelters-text" className='icon-menu-texts'>Shelters</p> */}
                        </Dropdown.Item>
                            <div id="b" className='icon-menu-lines'></div>
                        <Dropdown.Item href="#/job-opportunities" className="icon-menu-dropdowns">
                            <p>Job Opportunities</p>
                            {/* <p id="job-opportunities-text" className='icon-menu-texts'>Job Opportunities</p> */}
                        </Dropdown.Item>
                            <div id="job-opportunities-line" className='icon-menu-lines'></div>
                        <Dropdown.Item href="#/internship-opportunities" className="icon-menu-dropdowns">
                            <p>Internship Opportunities</p>
                            {/* <p id="internship-opportunities-text" className='icon-menu-texts'>Internship Opportunities</p> */}
                        </Dropdown.Item>
                            <div id="internship-opportunites-line" className='icon-menu-lines'></div>
                        <Dropdown.Item href="#/networking-opportunities" className="icon-menu-dropdowns">
                            <p>Networking Opportunities</p>
                            {/* <p id="networking-opportunities-text" className='icon-menu-texts'>Networking Opportunities</p> */}
                        </Dropdown.Item>
                            <div id="networking-opportunities-line" className='icon-menu-lines'></div>
                        <Dropdown.Item href="#/free-food-in-your-area" className="icon-menu-dropdowns">
                            <p>Free Food In Your Area</p>
                            {/* <p id="free-food-text" className='icon-menu-texts'>Free Food In Your Area</p> */}
                        </Dropdown.Item>
                        <div id="free-food-in-your-area-line" className='icon-menu-lines'></div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div id='category-card-earn-money'>
                <div id='category-title-icon-div-earn-money-container'>
                    <div id='category-title-and-icon-earn-money'>
                        <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class="feather feather-dollar-sign"
                    ><line 
                    x1="12" 
                    y1="1" 
                    x2="12" 
                    y2="23"
                    /><path 
                    d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                        /></svg>
                        <p id='earn-money' className='category-title-texts'>Earn Money</p>
                    </div>
                </div>
                <div id='category-listings-container-earn-money'>
                    <div id='category-listings-earn-money'>
                        <p id='jobs' className='listings-text'>Jobs</p>
                        <div id='jobs-line' className='listings-lines'></div>
                        <p id='internships' className='listings-text'>Internships</p>
                        <div id='internships-line' className='listings-lines'></div>
                        <p id='summer-programs' className='listings-text'>Summer Programs</p>
                        <div id='summer-programs-line' className='listings-lines'></div>
                        <p id='scholarships' className='listings-text'>Scholarships</p>
                        <div id='scholarships-line' className='listings-lines'></div>
                        <p id='financial-assistance' className='listings-text'>Financial Assistance</p>
                        <div id='financial-assistance-line' className='listings-lines'></div>
                    </div>
                </div>
            </div>
            <div id='category-card-emergency-listings'>
                <div id='category-title-icon-div-emergency-resources-listings-container'>
                    <div id='category-title-and-icon-emergency-resources'>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="feather feather-plus-circle"
                        id="feather-plus-circle-emergency"
                    ><circle 
                        cx="12" 
                        cy="12" 
                        r="10"
                    /><line 
                        x1="12" 
                        y1="8" 
                        x2="12" 
                        y2="16"
                    /><line 
                        x1="8" 
                        y1="12" 
                        x2="16" 
                        y2="12"
                        /></svg>
                        <p id='emergency-resources' className='category-title-texts'>Emergency Resources</p>
                    </div>
                </div>
                <div id='category-listings-emergency-listings'>
                    <p id='shelters' className='listings-text'>Shelters</p>
                    <div id='shelters-line' className='listings-lines'></div>
                    <p id='housing-opportunities' className='listings-text'>Housing Opportunities</p>
                    <div id='housing-opportunities-line' className='listings-lines'></div>
                    <p id='emergency-aid' className='listings-text'>Emergency Aid</p>
                    <div id='emergency-aid-line' className='listings-lines'></div>
                    <p id='hotlines' className='listings-text'>Hotlines</p>
                    <div id='hotlines-line' className='listings-lines'></div>
                </div>
            </div>
            <div id='category-card-learn-network'>
                <div id='category-title-icon-div-learn-network-container'>
                    <div id='category-title-and-icon-learn-network'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        class="feather feather-cloud"
                        id="feather-cloud"
                    ><path 
                        d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
                    /></svg>
                        <p id='learn-network' className='category-title-texts'>Learn How To Network</p>
                    </div>
                </div>
                <div id='category-listings-learn-network'>
                    <p id='conferences' className='listings-text'>Conferences</p>
                    <div id='conferences-line' className='listings-lines'></div>
                    <p id='speaker-series' className='listings-text'>Speaker Series & Competitions</p>
                    <div id='speaker-series-line' className='listings-lines'></div>
                    <p id='find-mentor' className='listings-text'>Find a Mentor and/or Tutor</p>
                    <div id='find-mentor-line' className='listings-lines'></div>
                    <p id='volunteer-community-work' className='listings-text'>Volunteer/Community Work</p>
                    <div id='volunteer-community-work-line' className='listings-lines'></div>
                    <p id='calendar-local-activities' className='listings-text'>Calendar of Local Community Activities</p>
                    <div id='calendar-local-activities-line' className='listings-lines'></div>
                </div>
            </div>
        </div>
    );
}

export default StudentsIndividualsCards;