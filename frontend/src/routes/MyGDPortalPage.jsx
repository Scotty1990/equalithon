import React from 'react';
import NavBar from '../components/NavBar';
import GDHeader from '../components/GDHeader';
import StudentsIndividualsCards from '../components/StudentsIndividualsCards';
import CompaniesSchoolsNonprofits from '../components/CompaniesSchoolsNonprofits';
import SubscribersCompanies from '../components/SubscribersCompanies';
import BottomNav from '../components/BottomNav';
import VideoBanner from '../components/VideoBanner';


function MyGDPortalPage() {
    return (
        <div>
            <NavBar />
            <GDHeader />
            <VideoBanner />
            <StudentsIndividualsCards />
            <CompaniesSchoolsNonprofits />
            <SubscribersCompanies />
            <BottomNav />
        </div>
    );
}

export default MyGDPortalPage;