import React from 'react';
import NavBar from './NavBar';
import Video from './pics/video.webp'

function MyGDPortalPage() {
    return (
        <div className='nav-bar'>
            <NavBar />
            <div className='gd-header'>
                <h1 className='header-title-gd'>Global Deeds</h1>
                <p className='your-global-search-provider'>Your global opportunity search provider</p>
                <p className='find-education-employment-resources'>Find reliable educational, employment and emergency resources here and rise to THE TOP!</p>
                <form>
                    <div className='search-text-div'>
                        <input 
                            className="search-text-input-field"
                            type="text"
                            placeholder='Enter Search Keyword'
                        ></input>
                    </div>
                    <select name="plan" className='dropdown-div'>
                        <option value="all-categories">All Categories</option>
                        <option value="starter">Cat 1 </option>
                        <option value="professional">Cat 2</option>
                        <option value="corporate">Cat 3</option>
                    </select>
                    <button className="find-btn">
                        <div className='search-icon-div'>
                            <div className='search-icon'></div>
                        </div>
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
                        >
                        <circle 
                            cx="11" 
                            cy="11" 
                            r="8"/
                        >
                        <line 
                            x1="21" 
                            y1="21" 
                            x2="16.65" 
                            y2="16.65"
                        /></svg>
                        <p className='find-btn-text'>Find</p>
                    </button>
                </form>
            </div>
            <div className='video-banner-div'>
                <p className='welcome'>Welcome!</p>
                <p className='welcome-text'>Global Deeds, Inc, is a hybrid social 
                    enterprise dedicated to providing access to opportunities to 
                    youth living in poverty and educators who support them. As a 
                    company, your subscriptions will help us serve youth in need 
                    of opportunities, and you will have access to highly trained 
                    individuals that can perform at the level you require.
                </p>
                <button id="learn-more"><p id="learn-more-text">Learn More</p></button>
                <div className='video'><img id='video-img' src={Video} alt='video' /></div>
            </div>
            <div className='students-individuals-div'>
                <p className='students-individuals-text'>Students / Individuals</p>
            </div>
            <div className='students-individuals-icon'>
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
            id="top"
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
            id="middle"
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
            id="bottom"
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
            </div>
            <div className='category-card-earn-money'>
                <div className='category-title-icon-div-earn-money-container'>
                    <div className='category-title-and-icon-earn-money'>
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
                        <p className='earn-money'>Earn Money</p>
                    </div>
                </div>
                <div className='category-listings-container'>
                    <div className='category-listings-earn-money'>
                        <p className='jobs'>Jobs</p>
                        <div className='jobs-line'></div>
                        <p className='internships'>Internships</p>
                        <div className='internships-line'></div>
                        <p className='summer-programs'>Summer Programs</p>
                        <div className='summer-programs-line'></div>
                        <p className='scholarships'>Scholarships</p>
                        <div className='scholarships-line'></div>
                        <p className='financial-assistance'>Financial Assistance</p>
                        <div className='financial-assistance-line'></div>
                    </div>
                </div>
            </div>
            <div className='category-card-emergency-listings'>
                <div className='category-title-icon-div-emergency-resources-listings-container'>
                    <div className='category-title-and-icon-emergency-resources'>
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
                        <p className='emergency-resources'>Emergency Resources</p>
                    </div>
                </div>
                <div className='category-listings-emergency-listings'>
                    <p className='shelters'>Shelters</p>
                    <div className='shelters-line'></div>
                    <p className='housing-opportunities'>Housing Opportunities</p>
                    <div className='housing-opportunities-line'></div>
                    <p className='emergency-aid'>Emergency Aid</p>
                    <div className='emergency-aid-line'></div>
                    <p className='hotlines'>Hotlines</p>
                    <div className='hotlines-line'></div>
                </div>
            </div>
            <div className='category-card-learn-network'>
                <div className='category-title-icon-div-learn-network-container'>
                    <div className='category-title-and-icon-learn-network'>
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
                    ><path 
                        d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
                    /></svg>
                        <p className='learn-network'>Learn How To Network</p>
                    </div>
                </div>
                <div className='category-listings-learn-network'>
                    <p className='conferences'>Conferences</p>
                    <div className='conferences-line'></div>
                    <p className='speaker-series'>Speaker Series & Competitions</p>
                    <div className='speaker-series-line'></div>
                    <p className='find-mentor'>Find a Mentor and/or Tutor</p>
                    <div className='find-mentor-line'></div>
                    <p className='volunteer-community-work'>Volunteer/Community Work</p>
                    <div className='volunteer-community-work-line'></div>
                    <p className='calendar-local-activities'>Calendar of Local Community Activities</p>
                    <div className='calendar-local-activities-line'></div>
                </div>
            </div>
            <div className='companies-school-nonprofits-div'>
                <p className='companies-school-nonprofits-text'>Companies / School / Nonprofits</p>
            </div>
            <div className='category-card-post-jobs'>
                <div className='category-title-icon-div-post-jobs-container'>
                    <div className='category-title-and-icon-post-jobs'>
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
                        <p className='post-jobs'>Post Your Job Opportunities</p>
                    </div>
                </div>
                <div className='post-jobs-text-div'>
                    <p className='post-jobs-text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing 
                        elit. Cupiditate suscipit vero a reprehenderit 
                        accusantium fugit in ipsa delectus quisquam esse 
                        necessitatibus est, aliquid qui ad itaque beatae eum, 
                        facere?
                    </p>
                </div>
            </div>
            <div className='category-card-advertise-programs'>
                <div className='category-title-icon-div-advertise-programs-container'>
                    <div className='category-title-and-icon-advertise-programs'>
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
                        <p className='advertise-programs'>Advertise Your Programs</p>
                    </div>
                </div>
                <div className='advertise-programs-text-div'>
                    <p className='advertise-programs-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus, ipsa mollitia reiciendis officiis eos facere. 
                        Ipsa laboriosam, sapiente tempore tenetur, ad consequatur 
                        nihil doloremque deserunt!
                    </p>
                </div>
            </div>
            <div className='category-card-find-talent'>
                <div className='category-title-icon-div-find-talent-container'>
                    <div className='category-title-and-icon-find-talent'>
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
                        <p className='find-talent'>Find Talent</p>
                    </div>
                </div>
                <div className='find-talent-text-div'>
                    <p className='find-talent-text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Aliquid doloremque, recusandae non temporibus, libero 
                        eligendi soluta quo vitae nesciunt nemo magni velit. Expedita 
                        veniam consequatur repellendus!
                    </p>
                </div>
            </div>
            <div id='subscribers-companies-categories'>
                <div id="subscribers-container">
                    <div className='bottom-divs' id="subscribers">
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
                            class="feather feather-user-plus"
                        ><path 
                            d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        /><circle 
                            cx="8.5" 
                            cy="7" 
                            r="4"
                        /><line 
                            x1="20" 
                            y1="8" 
                            x2="20" 
                            y2="14"
                        /><line 
                            x1="23" 
                            y1="11" 
                            x2="17" 
                            y2="11"/
                        ></svg>
                        <p className='bottom-divs-text-and-number' id="subscribers-number">0</p>
                        <p className='bottom-divs-text-and-number' id="subscribers-text">Subscribers</p>
                    </div>
                    <div className='orange-bottom-divs' id="orange-bottom-subscribers"></div>
                </div>
                <div id="companies-container">
                    <div className='bottom-divs' id="companies">
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
                            class="feather feather-globe"
                        ><circle 
                            cx="12" 
                            cy="12" 
                            r="10"
                        /><line 
                            x1="2" 
                            y1="12" 
                            x2="22" 
                            y2="12"
                        /><path 
                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                        /></svg>
                        <p className='bottom-divs-text-and-number' id="companies-number">0</p>
                        <p className='bottom-divs-text-and-number' id="companies-text">Companies</p>
                        <div className='orange-bottom-divs' id='orange-bottom-companies'></div>
                    </div>
                </div>
                <div id="categories-container">
                    <div className='bottom-divs' id="categories">
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
                            class="feather feather-grid"
                        ><rect 
                            x="3" 
                            y="3" 
                            width="7" 
                            height="7"
                        /><rect 
                            x="14" 
                            y="3" 
                            width="7" 
                            height="7"
                        /><rect 
                            x="14" 
                            y="14" 
                            width="7" 
                            height="7"
                        /><rect 
                            x="3" 
                            y="14" 
                            width="7" 
                            height="7"
                        /></svg>
                        <p className='bottom-divs-text-and-number' id="categories-number">0</p>
                        <p className='bottom-divs-text-and-number' id="categories-text">Categories</p>
                        <div id="orange-bottom-categories" className='orange-bottom-divs'></div>
                    </div>
                </div>
            </div>
            <div id="bottom-nav">
                <div id="bottom-nav-upper-div">
                    <div id="bottom-nav-circle"></div>
                    <p id='quick-links'>Quick Links</p>
                    <ul>
                        <p id="about">• About</p>
                        <p id="services">• Services</p>
                        <p id="our-team">• Our Team</p>
                        <p id="what-we-do">• What We Do</p>
                        <p id="core-values">• Core Values</p>
                        <p id="contact-us-sub-link">• Contact Us</p>
                    </ul>
                        <p id="hours-of-operation">Hours of Operation</p>
                        <ul>
                            <p id="email-and-phone-messaging">• 24/7 Email and Phone Messaging</p>
                            <p id="by-appointment-only">• By Appointment Only</p>
                        </ul>
                        <p id="contact-us">Contact#contatUS</p>
                        <p id="phone-number">800-41-DEEDS x2</p>
                        <p id="email">Email: info@globaldeeds.org</p>
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
                            class="feather feather-facebook"
                        ><path 
                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
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
                            class="feather feather-twitter"
                        ><path 
                            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
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
                            class="feather feather-instagram"
                        ><rect 
                            x="2" 
                            y="2" 
                            width="20" 
                            height="20" 
                            rx="5" 
                            ry="5"
                        /><path 
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        /><line 
                            x1="17.5" 
                            y1="6.5" 
                            x2="17.51" 
                            y2="6.5"
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
                            class="feather feather-youtube"
                        ><path 
                            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                        /><polygon 
                            points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                        /></svg>
                        <a 
                            href="https://www.freepnglogos.com/pics/app-store-png-logo" 
                            title="Image from freepnglogos.com"
                            id="app-store-img"
                        ><img 
                            src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png" 
                            width="200" 
                            alt="Download on the app store logo png" 
                        /></a>
                </div>
                <div id="bottom-nav-lower-div"></div>
            </div>
        </div>
    );
}

export default MyGDPortalPage;