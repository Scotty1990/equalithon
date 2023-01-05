import React from 'react';
import '../css/CompaniesSchoolsNonProfits.css';

function CompaniesSchoolsNonprofits(props) {
    return (
        <div>
            <div id='companies-school-nonprofits-div'>
                <p id='companies-school-nonprofits-text'>Companies / School / Nonprofits</p>
            </div>
            <div id='category-card-post-jobs'>
                <div id='category-title-icon-div-post-jobs-container'>
                    <div id='category-title-and-icon-post-jobs' className='category-titles-and-icons'>
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
                        id="plus-circle-jobs"
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
                        <p id='post-jobs' className='category-text-boxes-titles'>Post Your Job Opportunities</p>
                    </div>
                </div>
                <div id='post-jobs-text-div'>
                    <p id='post-jobs-text' className='category-texts'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing 
                        elit. Cupiditate suscipit vero a reprehenderit 
                        accusantium fugit in ipsa delectus quisquam esse 
                        necessitatibus est, aliquid qui ad itaque beatae eum, 
                        facere?
                    </p>
                </div>
            </div>
            <div id='category-card-advertise-programs'>
                <div id='category-title-icon-div-advertise-programs-container'>
                    <div id='category-title-and-icon-advertise-programs' className='category-titles-and-icons'>
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
                            class="feather feather-monitor"
                            id="feather-monitor"
                        ><rect 
                            x="2" 
                            y="3" 
                            width="20" 
                            height="14" 
                            rx="2" 
                            ry="2"
                        /><line 
                            x1="8" 
                            y1="21" 
                            x2="16" 
                            y2="21"
                        /><line 
                            x1="12" 
                            y1="17" 
                            x2="12" 
                            y2="21"
                        /></svg>
                        <p id='advertise-programs' className='category-text-boxes-titles'>Advertise Your Programs</p>
                    </div>
                </div>
                <div id='advertise-programs-text-div'>
                    <p id='advertise-programs-text' className='category-texts'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus, ipsa mollitia reiciendis officiis eos facere. 
                        Ipsa laboriosam, sapiente tempore tenetur, ad consequatur 
                        nihil doloremque deserunt!
                    </p>
                </div>
            </div>
            <div id='category-card-find-talent'>
                <div id='category-title-icon-div-find-talent-container'>
                    <div id='category-title-and-icon-find-talent' className='category-titles-and-icons'>
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
                        class="feather feather-search"
                        id="find-talent-feather-search"
                    ><circle 
                        cx="11" 
                        cy="11" 
                        r="8"
                    /><line 
                        x1="21" 
                        y1="21" 
                        x2="16.65" 
                        y2="16.65"
                    /></svg>
                        <p id='find-talent' className='category-text-boxes-titles'>Find Talent</p>
                    </div>
                </div>
                <div id='find-talent-text-div'>
                    <p id='find-talent-text' className='category-texts'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Aliquid doloremque, recusandae non temporibus, libero 
                        eligendi soluta quo vitae nesciunt nemo magni velit. Expedita 
                        veniam consequatur repellendus!
                    </p>
                </div>
            </div>        
        </div>
    );
}

export default CompaniesSchoolsNonprofits;