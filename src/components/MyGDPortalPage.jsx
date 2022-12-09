import React from 'react';
import NavBar from './NavBar';
import Video from './pics/video.webp'
import GDHeader from './GDHeader';
import StudentsIndividualsCards from './StudentsIndividualsCards';
import CompaniesSchoolsNonprofits from './CompaniesSchoolsNonprofits';
import SubscribersCompanies from './SubscribersCompanies';
import BottomNav from './BottomNav';

function MyGDPortalPage() {
    return (
        <div className='nav-bar'>
            <NavBar />
            <GDHeader />
            <div id='video-banner-div'>
                <p id='welcome'>Welcome!</p>
                <p id='welcome-text'>Global Deeds, Inc, is a hybrid social 
                    enterprise dedicated to providing access to opportunities to 
                    youth living in poverty and educators who support them. As a 
                    company, your subscriptions will help us serve youth in need 
                    of opportunities, and you will have access to highly trained 
                    individuals that can perform at the level you require.
                </p>
                <button id="learn-more"><p id="learn-more-text">Learn More</p></button>
                <div id='video'><img id='video-img' src={Video} alt='video' /></div>
            </div>
            <StudentsIndividualsCards />
            <CompaniesSchoolsNonprofits />
            <SubscribersCompanies />
            <BottomNav />
        </div>
    );
}

export default MyGDPortalPage;