import React from 'react';
import NavBar from './NavBar';
import GDHeader from './GDHeader';
import StudentsIndividualsCards from './StudentsIndividualsCards';
import CompaniesSchoolsNonprofits from './CompaniesSchoolsNonprofits';
import SubscribersCompanies from './SubscribersCompanies';
import BottomNav from './BottomNav';
import VideoBanner from './VideoBanner';

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